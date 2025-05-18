"use server"
import { db } from '@/lib/db'
import { createNewsSchema } from '@/lib/schema'
import * as z from 'zod'
import { slugify } from '@/lib/utils'
import { revalidatePath } from 'next/cache'

export const createNewsAction = async (values: z.infer<typeof createNewsSchema>) => {
    const fieldValidation = createNewsSchema.safeParse(values);
    if (!fieldValidation.success) {
         return { error: "field Validation failed " }
    }
    const { 
        author,
        content,
        published,
        imageUrl,
        title,
     } = fieldValidation.data

     try {
        const news = await db.news.create({
            data: {
                content,
                imageUrl,
                published,
                slug: slugify(title),
                title,
                author: {
                    connect: {
                        id: author
                    }
                },
            }
        })

        // Revalidate after the data operation completes
        revalidatePath('/user')
        revalidatePath('/news')
        
        return { success: "News has been created successfully", news: news }
     } catch (error) {
        console.error("Error creating news:", error)
        return { error: "Failed to create news" }
     }
}

export const getAllNews = async () => {
    try {
        const news = await db.news.findMany({
            include: {
                author: true
            }
        })
        
        return news
    } catch (error) {
        console.error("Error fetching all news:", error)
        return []
    }
}

export const getNewsById = async (id: string) => {
    try {
        const news = await db.news.findUnique({
            where: {
                id
            },
            include: {
                author: true
            }
        })
        
        return news
    } catch (error) {
        console.error(`Error fetching news by ID ${id}:`, error)
        return null
    }
}

export const getNewsBySlug = async (slug: string) => {
    try {
        const news = await db.news.findFirst({
            where: {
                slug,
            },
            include: {
                author: true
            }
        })
        
        return news
    } catch (error) {
        console.error(`Error fetching news by slug ${slug}:`, error)
        return null
    }
}

export const deleteNews = async (id: string) => {
    try {
        await db.news.delete({
            where: {
                id
            }
        })
        
        // Revalidate after the data operation completes
        revalidatePath('/user')
        revalidatePath('/news')
        
        return { success: "News has been deleted successfully" }
    } catch (error) {
        console.error(`Error deleting news ${id}:`, error)
        return { error: "Failed to delete news" }
    }
}

export const updateNews = async (id: string, values: z.infer<typeof createNewsSchema>) => {
    const fieldValidation = createNewsSchema.safeParse(values);
    if (!fieldValidation.success) {
        return { error: "field Validation failed " }
    }
    
    const { 
        author,
        content,
        published,
        imageUrl,
        title,
    } = fieldValidation.data

    try {
        const news = await db.news.update({
            where: {
                id
            },
            data: {
                content,
                imageUrl,
                slug: slugify(title),
                published,
                title,
                author: {
                    connect: {
                        id: author
                    }
                }
            }
        })

        // Revalidate after the data operation completes
        revalidatePath('/user')
        revalidatePath('/news')
        
        return { success: "News has been updated successfully", news: news }
    } catch (error) {
        console.error(`Error updating news ${id}:`, error)
        return { error: "Failed to update news" }
    }
}

// Create a separate function for revalidation only when needed
export const revalidateNewsPaths = async () => {
    revalidatePath('/user')
    revalidatePath('/news')
    return { revalidated: true }
}