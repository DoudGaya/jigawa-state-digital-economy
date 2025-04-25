"use server"

import { PrismaClient } from "@prisma/client"
import { studentsData } from "@/trainings"

const prisma = new PrismaClient()

interface ValidationRequest {
  method: "studentId" | "nameAndLga"
  studentId?: string
  studentName?: string
  localGovtArea?: string
}

interface ValidationResponse {
  success: boolean
  student?: any
  error?: string
}

interface ApplicationData {
  studentId: string
  studentName: string
  localGovtArea: string
  yearOfGraduation: number
  gitHubProfileUrl: string | null
  classOfAward: string
  email: string
  phone: string
  address: string
  // doYouHaveTechnicalSkills: string
  techSkillsDetails: string | null
  DateOfBirth: string
  nameOfMinistry: string
  qualification: string
  experience: string
  employmentStatus: string
  placeOfWork: string
  jigawaStateGovtEmployment: string
  skills: string
}

interface ApplicationResponse {
  success: boolean
  error?: string
}

export async function validateStudent(request: ValidationRequest): Promise<ValidationResponse> {
  try {
    let student = null

    if (request.method === "studentId" && request.studentId) {
      // Find student by ID
      student = studentsData.find((s) => s.studentId.toLowerCase() === request.studentId?.toLowerCase())
    } else if (request.method === "nameAndLga" && request.studentName && request.localGovtArea) {
      // Find student by name and LGA
      student = studentsData.find(
        (s) =>
          s.studentName.toLowerCase() === request.studentName?.toLowerCase() &&
          s.localGovtArea.toLowerCase() === request.localGovtArea?.toLowerCase(),
      )
    }

    if (!student) {
      return {
        success: false,
        error: "Student records not found (You are not eligible to apply for this program)",
      }
    }

    return {
      success: true,
      student,
    }
  } catch (error) {
    console.error("Validation error:", error)
    return {
      success: false,
      error: "An error occurred during validation. Please try again.",
    }
  }
}

export async function submitApplication(data: ApplicationData): Promise<ApplicationResponse> {
  try {
    // Check if student exists
    const studentExists = studentsData.some((s) => s.studentId === data.studentId)

    if (!studentExists) {
      return {
        success: false,
        error: "Student not found. You are not eligible to apply.",
      }
    }

    // Check if application already exists
    const existingApplication = await prisma.application.findFirst({
      where: {
        studentId: data.studentId,
      },
    })

    if (existingApplication) {
      return {
        success: false,
        error: "You have already submitted an application.",
      }
    }

    // Create new application
    await prisma.application.create({
      data: {
        studentId: data.studentId,
        studentName: data.studentName,
        localGovtArea: data.localGovtArea,
        yearOfGraduation: data.yearOfGraduation,
        classOfAward: data.classOfAward,
        email: data.email,
        DateOfBirth: data.DateOfBirth,
        // doYouHaveTechnicalSkills: data.doYouHaveTechnicalSkills,
        techSkillsDetails: data.techSkillsDetails,
        gitHubProfileUrl: data.gitHubProfileUrl,
        workExperience: data.experience,
        phone: data.phone,
        address: data.address,
        qualification: data.qualification,
        nameOfMinistry: data.nameOfMinistry,
        experience: data.experience,
        skills: data.skills,
        employmentStatus: data.employmentStatus,
        placeOfWork: data.placeOfWork,
        jigawaStateGovtEmployment: data.jigawaStateGovtEmployment,
      
      },
    })

    return {
      success: true,
    }
  } catch (error) {
    console.error("Application submission error:", error)
    return {
      success: false,
      error: "An error occurred while submitting your application. Please try again.",
    }
  }
}

interface Summary {
  count: number
  recentItems: { title: string }[]
}