"use server"
import { db } from '@/lib/db'
import { AuthorSchema, createPolicySchema } from '@/lib/schema'
import { slugify } from '@/lib/utils'
import { revalidatePath } from 'next/cache'
import * as z from 'zod'

// Read-only operations shouldn't call revalidatePath
export const getAllPolicies = async () => {
    try {
        const policies = await db.policies.findMany({
            include: {
                author: true
            }
        })
        
        return policies
    } catch (error) {
        console.error("Error fetching all policies:", error)
        return []
    }
}

// Read-only operations shouldn't call revalidatePath
export const getPolcyById = async (id: string) => {
    try {
        const policy = await db.policies.findUnique({
            where: {
                id
            },
            include: {
                author: true
            }
        })
        
        return policy
    } catch (error) {
        console.error(`Error fetching policy by ID ${id}:`, error)
        return null
    }
}

// Write operations can call revalidatePath after the operation completes
export const createPolicy = async (data: z.infer<typeof createPolicySchema>) => {
    try {
        const fieldValidation = createPolicySchema.safeParse(data);

        if (!fieldValidation.success) {
            return { error: "field Validation failed ", details: fieldValidation.error.errors }
        }

        const {
            author,
            description,
            fileUrl,
            published,
            title,
        } = fieldValidation.data

        const policy = await db.policies.create({
            data: {
                title,
                description,
                slug: slugify(title),
                fileUrl,
                published,
                author: {
                    connect: {
                        id: author
                    }
                },
            }
        })

        // Call revalidatePath after the data operation completes
        revalidatePath('/user/policies')
        return { success: "Policy has been created successfully", policy: policy }
    } catch (error) {
        console.error("Error creating policy:", error)
        return { error: "Failed to create policy" }
    }
}

export const updatePolicy = async (id: string, data: z.infer<typeof createPolicySchema>) => {
    try {
        const fieldValidation = createPolicySchema.safeParse(data);

        if (!fieldValidation.success) {
            return { error: "field Validation failed ", details: fieldValidation.error.errors }
        }

        const {
            author,
            description,
            fileUrl,
            published,
            title,
        } = fieldValidation.data

        const policy = await db.policies.update({
            where: {
                id
            },
            data: {
                author: {
                    connect: {
                        id: author
                    }
                },
                description,
                fileUrl,
                published,
                title,
                slug: slugify(title),
            }
        })

        // Call revalidatePath after the data operation completes
        revalidatePath('/user/policies')
        return { success: "Policy has been updated successfully", policy: policy }
    } catch (error) {
        console.error(`Error updating policy ${id}:`, error)
        return { error: "Failed to update policy" }
    }
}

export const deletePolicy = async (id: string) => {
    try {
        if (!id) {
            return { error: "Policy Not Found" }
        }

        const dbPolicy = await getPolcyById(id)

        if (!dbPolicy) {
            return { error: "Policy does not exist" }
        }

        await db.policies.delete({
            where: {
                id
            }
        })

        // Call revalidatePath after the data operation completes
        revalidatePath('/user/policies')
        return { success: "Policy has been deleted successfully" }
    } catch (error) {
        console.error(`Error deleting policy ${id}:`, error)
        return { error: "Failed to delete policy" }
    }
}

// Add a separate revalidation function that can be called explicitly when needed
export const revalidatePoliciesPaths = async () => {
    revalidatePath('/user/policies')
    return { revalidated: true }
}


