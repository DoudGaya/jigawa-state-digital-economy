"use server"

import { PrismaClient } from "@prisma/client"
import { z } from "zod"

const prisma = new PrismaClient()

// Define the schema for validation
const academicFormSchema = z.object({
  firstName: z.string().min(2),
  surname: z.string().min(2),
  otherName: z.string().optional(),
  email: z.string().min(2),
  institution: z.string().min(2),
  sex: z.enum(["Male", "Female", "Other"]),
  lga: z.string().min(2),
  discipline: z.string(),
  otherDiscipline: z.string().optional(),
  teachingExperience: z.string().min(10),
  rank: z.string(),
  whatsappNo: z.string().regex(/^(\+234|0|234)[0-9]{10}$/),
})

type AcademicFormData = z.infer<typeof academicFormSchema>

export async function submitAcademicForm(formData: AcademicFormData) {
  try {
    // Validate the form data
    const validatedData = academicFormSchema.parse(formData)

    // Create a new academic record in the database
    const academic = await prisma.academic.create({
      data: {
        firstName: validatedData.firstName,
        surname: validatedData.surname,
        otherName: validatedData.otherName || null,
        institution: validatedData.institution,
        sex: validatedData.sex,
        email: validatedData.email,
        lga: validatedData.lga,
        discipline: validatedData.discipline,
        teachingExperience: validatedData.teachingExperience,
        rank: validatedData.rank,
        whatsappNo: validatedData.whatsappNo,
      },
    })

    return {
      success: true,
      data: academic,
    }
  } catch (error) {
    console.error("Error submitting academic form:", error)

    if (error instanceof z.ZodError) {
      return {
        success: false,
        error: "Validation error. Please check your form data.",
      }
    }

    return {
      success: false,
      error: "Failed to submit form. Please try again later.",
    }
  } finally {
    await prisma.$disconnect()
  }
}
