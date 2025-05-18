"use server"
import { db } from '@/lib/db'
import { createActivitySchema } from '@/lib/schema'
import { slugify } from '@/lib/utils'
import { revalidatePath } from 'next/cache'
import * as z from 'zod'

export const createActivities = async (values: z.infer<typeof createActivitySchema>) => {
    try {
        const fieldValidation = createActivitySchema.safeParse(values);
        if (!fieldValidation.success) {
            return { error: "Field validation failed", details: fieldValidation.error.errors }
        }
        
        const { 
            author,
            content,
            published,
            date,
            location,
            imageUrl,
            title,
        } = fieldValidation.data

        const activities = await db.activities.create({
            data: {
                content,
                imageUrl,
                published,
                date: new Date(date),
                location: location,
                slug: slugify(title),
                title,
                author: {
                    connect: {
                        id: author
                    }
                },
            }
        })

        // Call revalidatePath after the data operation completes
        revalidatePath('/user/activities')
        return { success: "Activity has been created successfully", activities: activities }
    } catch (error) {
        console.error("Error creating activity:", error)
        return { error: "Failed to create activity" }
    }
}

// Read-only operation - no revalidatePath
export const getAllActivities = async () => {
    try {
        const activities = await db.activities.findMany({
            include: {
                author: true
            }
        })
        
        return activities
    } catch (error) {
        console.error("Error fetching all activities:", error)
        return []
    }
}

// Read-only operation - no revalidatePath
export const getActivityById = async (id: string) => {
    try {
        const activity = await db.activities.findUnique({
            where: {
                id
            },
            include: {
                author: true
            }
        })
        
        return activity
    } catch (error) {
        console.error(`Error fetching activity by ID ${id}:`, error)
        return null
    }
}

export const deleteActivity = async (id: string) => {
    try {
        if (!id) {
            return { error: "Activity Not Found" }
        }

        const dbActivity = await getActivityById(id)

        if (!dbActivity) {
            return { error: "Activity does not exist" }
        }

        await db.activities.delete({
            where: {
                id
            }
        })

        // Call revalidatePath after the data operation completes
        revalidatePath('/user/activities')
        return { success: "Activity has been deleted successfully" }
    } catch (error) {
        console.error(`Error deleting activity ${id}:`, error)
        return { error: "Failed to delete activity" }
    }
}

export const updateActivity = async (id: string, values: z.infer<typeof createActivitySchema>) => {
    try {
        const fieldValidation = createActivitySchema.safeParse(values);
        if (!fieldValidation.success) {
            return { error: "Field validation failed", details: fieldValidation.error.errors }
        }
        
        const { 
            author,
            content,
            published,
            date,
            location,
            imageUrl,
            title,
        } = fieldValidation.data

        const activity = await db.activities.update({
            where: {
                id
            },
            data: {
                content,
                imageUrl,
                slug: slugify(title),
                published,
                date: new Date(date),
                location,
                author: {
                    connect: {
                        id: author
                    }
                },
                title,
            }
        })

        // Call revalidatePath after the data operation completes
        revalidatePath('/user/activities')
        return { success: "Activity has been updated successfully", activity: activity }
    } catch (error) {
        console.error(`Error updating activity ${id}:`, error)
        return { error: "Failed to update activity" }
    }
}

// Add a separate revalidation function that can be called explicitly when needed
export const revalidateActivitiesPaths = async () => {
    revalidatePath('/user/activities')
    return { revalidated: true }
}