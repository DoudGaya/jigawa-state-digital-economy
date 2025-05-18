"use server"
import { db } from '@/lib/db'
import { createGallerySchema } from '@/lib/schema'
import { revalidatePath } from 'next/cache'
import * as z from 'zod'

export const createGallery = async (values: z.infer<typeof createGallerySchema>) => {
    try {
        const fieldValidation = createGallerySchema.safeParse(values);
        if (!fieldValidation.success) {
            return { error: "Field validation failed", details: fieldValidation.error.errors }
        }
        
        const { 
            description,
            imageUrl,
            title,
        } = fieldValidation.data

        const gallery = await db.gallery.create({
            data: {
                published: true,
                description,
                imageUrl,
                title,
            }
        })

        // Call revalidatePath after the data operation completes
        revalidatePath('/user/gallery')
        return { success: "Gallery has been created successfully", gallery: gallery }
    } catch (error) {
        console.error("Error creating gallery:", error)
        return { error: "Failed to create gallery" }
    }
}

// Read-only operation - no revalidatePath
export const getAllGalleries = async () => {
    try {
        const gallery = await db.gallery.findMany()
        return gallery
    } catch (error) {
        console.error("Error fetching all galleries:", error)
        return []
    }
}

// Read-only operation - no revalidatePath
export const getGalleryById = async (id: string) => {
    try {
        const gallery = await db.gallery.findUnique({
            where: {
                id
            },
        })
        
        return gallery
    } catch (error) {
        console.error(`Error fetching gallery by ID ${id}:`, error)
        return null
    }
}

export const deleteGallery = async (id: string) => {
    try {
        if (!id) {
            return { error: "Gallery Not Found" }
        }

        const dbGallery = await getGalleryById(id)

        if (!dbGallery) {
            return { error: "Gallery does not exist" }
        }

        await db.gallery.delete({
            where: {
                id
            }
        })

        // Call revalidatePath after the data operation completes
        revalidatePath('/user/gallery')
        return { success: "Gallery has been deleted successfully" }
    } catch (error) {
        console.error(`Error deleting gallery ${id}:`, error)
        return { error: "Failed to delete gallery" }
    }
}

export const updateGallery = async (id: string, values: z.infer<typeof createGallerySchema>) => {
    try {
        const fieldValidation = createGallerySchema.safeParse(values);
        if (!fieldValidation.success) {
            return { error: "Field validation failed", details: fieldValidation.error.errors }
        }
        
        const { 
            description,
            imageUrl,
            title,
        } = fieldValidation.data

        const gallery = await db.gallery.update({
            where: {
                id
            },
            data: {
                published: true,
                description,
                imageUrl,
                title,
            }
        })

        // Call revalidatePath after the data operation completes
        revalidatePath('/user/gallery')
        return { success: "Gallery has been updated successfully", gallery: gallery }
    } catch (error) {
        console.error(`Error updating gallery ${id}:`, error)
        return { error: "Failed to update gallery" }
    }
}

// Add a separate revalidation function that can be called explicitly when needed
export const revalidateGalleryPaths = async () => {
    revalidatePath('/user/gallery')
    return { revalidated: true }
}