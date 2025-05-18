"use server"

import { db } from '@/lib/db'
import { revalidatePath } from 'next/cache'
import { DatabaseError } from '@/lib/db'
import { AcademicSchema, AcademicType } from '@/lib/academics-schema'
import { z } from 'zod'

export async function getAllAcademics() {
  try {
    return await db.academic.findMany({
      orderBy: {
        createdAt: 'desc'
      }
    })
  } catch (error) {
    console.error('Failed to fetch academics:', error)
    throw new DatabaseError('Failed to fetch academics', error)
  }
}

export async function getAcademicById(id: string) {
  try {
    return await db.academic.findUnique({
      where: {
        id
      }
    })
  } catch (error) {
    console.error('Failed to fetch academic:', error)
    throw new DatabaseError('Failed to fetch academic', error)
  }
}

export async function createAcademic(data: z.infer<typeof AcademicSchema>) {
  try {
    const fieldValidation = AcademicSchema.safeParse(data)

    if (!fieldValidation.success) {
      return { error: "Field validation failed", details: fieldValidation.error.errors }
    }

    const academic = await db.academic.create({
      data: {
        ...fieldValidation.data,
        otherName: fieldValidation.data.otherName || null,
      }
    })

    revalidatePath('/user/academics')
    return { success: "Academic record has been created successfully", academic }
  } catch (error) {
    console.error('Failed to create academic record:', error)
    
    if (error instanceof Error) {
      if (error.message.includes('duplicate key')) {
        return { error: "This academic record already exists" }
      }
    }
    
    return { error: "Failed to create academic record" }
  }
}

export async function updateAcademic(id: string, data: z.infer<typeof AcademicSchema>) {
  try {
    const fieldValidation = AcademicSchema.safeParse(data)

    if (!fieldValidation.success) {
      return { error: "Field validation failed", details: fieldValidation.error.errors }
    }

    const academic = await db.academic.update({
      where: {
        id
      },
      data: {
        ...fieldValidation.data,
        otherName: fieldValidation.data.otherName || null,
      }
    })

    revalidatePath('/user/academics')
    return { success: "Academic record has been updated successfully", academic }
  } catch (error) {
    console.error('Failed to update academic record:', error)
    return { error: "Failed to update academic record" }
  }
}

export async function deleteAcademicAction(id: string) {
  try {
    if (!id) {
      return { error: "Academic record not found" }
    }

    const dbAcademic = await getAcademicById(id)

    if (!dbAcademic) {
      return { error: "Academic record does not exist" }
    }

    await db.academic.delete({
      where: {
        id
      }
    })

    revalidatePath('/user/academics')
    return { success: "Academic record has been deleted successfully" }
  } catch (error) {
    console.error('Failed to delete academic record:', error)
    return { error: "Failed to delete academic record" }
  }
}