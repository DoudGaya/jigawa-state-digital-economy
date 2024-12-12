import { auth } from "@/auth"
import { stat } from "fs"
import { z } from "zod"


export const SettingsSchema = z.object({
  name: z.optional(z.string()),
  email: z.optional(z.string()),
  phone: z.optional(z.string()),
  image: z.optional(z.any())
}) 

export const settingsSecurityDetailsSchema = z.object({
  oldPassword: z.optional(z.string()),
  newPassword: z.optional(z.string()),
  newPasswordConfirmation: z.optional(z.string()),
  isTwoFactorEnabled: z.optional(z.boolean()),
}) 


export const loginSchema = z.object({
    email: z.string().email({
      message: "Email must be of type email"
    }),
    password: z.string().min(1, {
      message: "Password is required"
    }),
  })
  

  export const newPasswordSchema = z.object({
    password: z.string().min(6, {
      message: "Min of 6 Characters required"
    }),
    passwordConfirmation: z.string().min(6, {
    message: "Min of 6 Characters required"
    }),
  })

  export const ResetSchema = z.object({
    email: z.string().email({
      message: "Email must be of type email"
    }),
  })

  
  

  export const signUpSchema = z.object({
    fullName: z.string().min(2, {
      message: "Please provide your Full Name",
    }),
    email: z.string().min(3, {
      message: "Email address must be less than 2 characters",
    }),
    password: z.string().min(6, {
      message: "Password must be at least 6 characters",
    }),
    phone: z.string().min(2, {
      message: "Password confirmation must match characters.",
    }),
    passwordConfirmation: z.string().min(6, {
      message: "Password confirmation must match",
    }),
  })


  const senderSchema = z.object({
    senderAccountName: z.string(),
    senderCompany: z.string(),
    senderAccountNumber: z.string(),
    senderBankName: z.string(),
  })

  const receiverSchema = z.object({
    receiverAccountName: z.string(),
    receiverAccountNumber: z.string(),
    receiverBankName: z.string(),
    receiverCompany: z.string(),
  })




  export const Author = z.object({
    name: z.string(),
    designation: z.string(),
  })


  export const createNewsSchema = z.object({
    title: z.string(),
    imageUrl: z.string(),
    content: z.string(),
    published: z.boolean(),
    // category: z.string(),
    author: z.string(),
  })


  export const createGallerySchema = z.object({
    title: z.string(),
    imageUrl: z.string(),
    description: z.string(),
  })

  export const createActivitySchema = z.object({
    title: z.string(),
    imageUrl: z.string(),
    content: z.string(),
    published: z.boolean(),
    author: z.string(),
  })

  export const createPolicySchema = z.object({
    title: z.string(),
    imageUrl: z.string(),
    description: z.string(),
    published: z.boolean(),
    author: z.string(),
  })
