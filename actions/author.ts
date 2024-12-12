"use server"
import { db } from '@/lib/db'
import { Author } from '@/lib/schema'
import * as z from 'zod'



export const getAllAuthors = async () => {
    return await db.author.findMany({
        include: {
            news: true
        }
    })
}

export const getAuthorById = async (id: string) => {
    return await db.author.findUnique({
        where: {
            id
        }
    })
}

export const createAuthor = async (data: z.infer<typeof Author>) => {

    const fieldValidation = Author.safeParse(data);

    if (!fieldValidation.success) {
        return { error: "field Validation failed " }
    }

    const {
        name,
        designation,
    } = fieldValidation.data

    return await db.author.create({
        data: {
            name,
            designation
        }
    })
}

export const updateAuthor = async (id: string, data: z.infer<typeof Author>) => {
    const fieldValidation = Author.safeParse(data);

    if (!fieldValidation.success) {
        return { error: "field Validation failed " }
    }

    const {
        name,
        designation,
    } = fieldValidation.data

    return await db.author.update({
        where: {
            id
        },
        data: {
            name,
            designation
        }
    })
}


export const deleteAuthor = async (id: string) => {

    if (!id) {
        return { error: "Author Not Found" }
    }

    const dbAuthor = await getAuthorById(id)

    if (!dbAuthor) {
        return { error: "Author does not exist" }
    }

    await db.author.delete({
        where: {
            id
        }
    })

    return { success: "Author has been deleted successfully" }
}


export const getAuthorNews = async (id: string) => {
    return await db.news.findMany({
        where: {
            authorId: id
        }
    })
}

export const getAuthorNewsById = async (id: string) => {
    return await db.news.findUnique({
        where: {
            id
        }
    })
}