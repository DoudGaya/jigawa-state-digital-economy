"use server"
import { db } from '@/lib/db'
import { revalidatePath } from 'next/cache'

export async function getAllRecords() {
    try {
        const news = await db.news.findMany({
            include: {
                author: true
            }
        })

        const activities = await db.activities.findMany({
            include: {
                author: true
            }
        })

        const galleries = await db.gallery.findMany()

        const policies = await db.policies.findMany({
            include: {
                author: true
            }
        })

        const academics = await db.academic.findMany({
            orderBy: {
                createdAt: 'desc'
            }
        })

        const authors = await db.author.findMany()
        
        return { news, activities, galleries, policies, authors, academics }
    } catch (error) {
        console.error("Error fetching dashboard data:", error)
        return { 
            news: [], 
            activities: [], 
            galleries: [], 
            policies: [], 
            authors: [], 
            academics: [] 
        }
    }
}

// Create a separate action for revalidation if needed
export async function revalidateDashboard() {
    revalidatePath('/user')
    return { revalidated: true }
}