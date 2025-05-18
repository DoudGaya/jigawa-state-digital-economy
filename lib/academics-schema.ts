import * as z from 'zod'

// Define Academic schema for validation
export const AcademicSchema = z.object({
  firstName: z.string().min(2, { message: "First name must be at least 2 characters." }),
  surname: z.string().min(2, { message: "Surname must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  otherName: z.string().optional(),
  institution: z.string().min(2, { message: "Institution is required." }),
  sex: z.enum(["Male", "Female", "Other"], {
    required_error: "Please select a gender.",
  }),
  lga: z.string().min(2, { message: "LGA is required." }),
  discipline: z.string().min(2, { message: "Discipline is required." }),
  teachingExperience: z.string().min(10, { message: "Teaching experience must be at least 10 characters." }),
  rank: z.string().min(2, { message: "Rank is required." }),
  whatsappNo: z.string().regex(/^(\+234|0|234)[0-9]{10}$/, {
    message: "WhatsApp number must be in valid format.",
  }),
})

// Type for Academic
export type AcademicType = {
  id: string
  firstName: string
  surname: string
  otherName?: string | null
  institution: string
  sex: string
  lga: string
  discipline: string
  teachingExperience: string
  rank: string
  email: string
  whatsappNo: string
  createdAt: Date
  updatedAt: Date
}