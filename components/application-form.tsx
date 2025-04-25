"use client"

import type React from "react"

import { useState } from "react"
// import { submitApplication } from "@/app/actions"
import { submitApplication } from "@/actions/applications"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
// import { toast } from "@/components/ui/use-toast"
import { toast } from "sonner"
import { Loader2 } from "lucide-react"

interface ApplicationFormProps {
  student: {
    serialNumber: number
    studentId: string
    studentName: string
    certificateAwarded: string
    techSkillsDetails: string
    DateOfBirth: string
    yearOfGraduation: number
    classOfAward: string
    localGovtArea: string
  }
}

export function ApplicationForm({ student }: ApplicationFormProps) {
  const [formData, setFormData] = useState({
    email: "",
    phone: "",
    address: "",
    qualification: '',
    experience: "",
    skills: "",
    gitHubProfileUrl: '',
    // doYouHaveTechnicalSkills: "",
    nameOfMinistry: "",
    techSkillsDetails: "",
    employmentStatus: "",
    dateOfBirth: "",
    placeOfWork: "",
    jigawaStateGovtEmployment: "",
    studentId: student.studentId,
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSelectChange = (name: string, value: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const result = await submitApplication({
        ...formData,
        studentId: student.studentId,
        studentName: student.studentName,
        localGovtArea: student.localGovtArea,
        techSkillsDetails: formData.techSkillsDetails,
        DateOfBirth: formData.dateOfBirth,
        gitHubProfileUrl: formData.gitHubProfileUrl,
        employmentStatus: formData.employmentStatus,
        nameOfMinistry: formData.nameOfMinistry,
        // doYouHaveTechnicalSkills: formData.doYouHaveTechnicalSkills,
        yearOfGraduation: student.yearOfGraduation,
        classOfAward: student.classOfAward,
      })

      if (result.success) {
        toast("Application Submitted", {
          description: "Your application has been submitted successfully.",
          className: "border-green-500 border text-green-700 bg-green-50",
        })
      } else {
        toast("Submission Failed", {
          description: result.error || "Failed to submit application. Please try again.",
          className: "border border-red-500 text-red-700 bg-red-50",
        })
      }
    } catch (error) {
      toast("Error", {
        description: "An error occurred while submitting your application. Please try again.",
        className: "border border-red-500 text-red-700 bg-red-50",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div>
      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Application Form</h2>
        <p className="text-gray-600">
          Please complete the application form below to apply for the ICT and Digital Economy Skills Development
          Program.
        </p>
      </div>

      <div className="p-4 bg-green-50 border border-green-200 rounded-md mb-6">
        <h3 className="font-medium text-green-800">Verified Student Information</h3>
        <div className="mt-2 grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
          <div>
            <span className="font-medium">Name:</span> {student.studentName}
          </div>
          <div>
            <span className="font-medium">Student ID:</span> {student.studentId}
          </div>
          <div>
            <span className="font-medium">Certificate:</span> {student.certificateAwarded}
          </div>
          <div>
            <span className="font-medium">Year of Graduation:</span> {student.yearOfGraduation}
          </div>
          <div>
            <span className="font-medium">Class of Award:</span> {student.classOfAward}
          </div>
          <div>
            <span className="font-medium">Local Govt Area:</span> {student.localGovtArea}
          </div>
        </div>
      </div>

      <form onSubmit={handleSubmit} className=" grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <Label htmlFor="email">Email Address</Label>
          <Input
            id="email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter your email address"
            required
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="phone">Phone Number</Label>
          <Input
            id="phone"
            name="phone"
            type="tel"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Enter your phone number"
            required
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="dateOfBirth">Date of Birth</Label>
          <Input
            id="dateOfBirth"
            name="dateOfBirth"
            type="date"
            value={formData.dateOfBirth}
            onChange={handleChange}
            placeholder="Date of Birth"
            required
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="address">Current Address</Label>
          <Textarea
            id="address"
            name="address"
            value={formData.address}
            onChange={handleChange}
            placeholder="Enter your current address"
            required
          />
        </div>
        <div className="space-y-2">
        <Label htmlFor="qualification">Highest Qualification?</Label>
          <Select
            name="qualification"
            value={formData.qualification}
            onValueChange={(value) => handleSelectChange("qualification", value)}
          >
            <SelectTrigger>
              <SelectValue placeholder="Select highest qualification" />
            </SelectTrigger>
            <SelectContent>
            <SelectItem value="Doctorate Degree certificate (Ph.D)">Doctorate Degree certificate (Ph.D)</SelectItem>
              <SelectItem value="Master's Degree certificate (M.Sc, M.A, M.Eng, etc.)">Master's Degree certificate (M.Sc, M.A, M.Eng, etc.)</SelectItem>
              <SelectItem value="Bachelor's Degree certificate (B.Sc, B.A, B.Eng, etc. )">Bachelor's Degree certificate (B.Sc, B.A, B.Eng, etc. )</SelectItem>
              <SelectItem value="Professional Certificate (e.g., PMP, Cisco, etc.)">Professional Certificate (e.g., PMP, Cisco, etc.)</SelectItem>
              <SelectItem value="Higher National Diploma (HND)">Higher National Diploma (HND)</SelectItem>
              <SelectItem value="National Diploma (ND) ">National Diploma (ND)</SelectItem>
              <SelectItem value="Nigeria Certificate In Education (NCE)">Nigeria Certificate In Education (NCE)</SelectItem>
              <SelectItem value="Secondary School Certificate">Secondary School Certificate</SelectItem>
              <SelectItem value="Primary School Certificate">Primary School Certificate</SelectItem>
            </SelectContent>
          </Select>
        </div>


        <div className="space-y-2">
          <Label htmlFor="employmentStatus">Employment Status</Label>
          <Select
            name="employmentStatus"
            value={formData.employmentStatus}
            onValueChange={(value) => handleSelectChange("employmentStatus", value)}
          >
            <SelectTrigger>
              <SelectValue placeholder="Employment Status" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="Employed">Employed</SelectItem>
              <SelectItem value="Unemployed">Unemployed</SelectItem>
              <SelectItem value="Student">Student</SelectItem>
              <SelectItem value="Retired">Retired</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {formData.employmentStatus === "Employed" && (
          <>

          <div className="space-y-2">
                  <Label htmlFor="jigawaStateGovtEmployment">Are you Employed by Jigawa State Government?</Label>
                  <Select
                    name="jigawaStateGovtEmployment"
                    value={formData.jigawaStateGovtEmployment}
                    onValueChange={(value) => handleSelectChange("jigawaStateGovtEmployment", value)}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Are you employed by the state government?" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="YES">Yes</SelectItem>
                      <SelectItem value="NO">No</SelectItem>
                    </SelectContent>
                  </Select>
                </div>


          {formData.jigawaStateGovtEmployment === 'YES' ? (
            <>
             <div className="space-y-2">
                  <Label htmlFor="nameOfMinistry"> Jigawa State Agency / Ministry / Institute:</Label>
                  <Input
                    id="nameOfMinistry"
                    name="nameOfMinistry"
                    type="text"
                    value={formData.nameOfMinistry}
                    onChange={handleChange}
                    placeholder="Name of Ministry / Institute / Agency"
                  />
                </div>
            </>
          ) : (

            <div className="space-y-2">
            <Label htmlFor="placeOfWork">Place of Work:</Label>
            <Input
              id="placeOfWork"
              name="placeOfWork"
              type="text"
              value={formData.placeOfWork}
              onChange={handleChange}
              placeholder="What is your current place of work?"
            />
          </div>

          )}

       
        <div className="space-y-2 ">
          <Label htmlFor="experience">Work Experience</Label>
          <Textarea
            id="experience"
            name="experience"
            value={formData.experience}
            onChange={handleChange}
            placeholder="Describe your relevant work experience"
          />
        </div>
          </>
        )}

      

        {/* <div className="space-y-2">
          <Label htmlFor="doYouHaveTechnicalSkills">Do you have any technical skill?</Label>
          <Select
            name="doYouHaveTechnicalSkills"
            value={formData.doYouHaveTechnicalSkills}
            onValueChange={(value) => handleSelectChange("doYouHaveTechnicalSkills", value)}
          >
            <SelectTrigger>
              <SelectValue placeholder="Select Option" />
            </SelectTrigger>
            <SelectContent>
            <SelectItem value="Yes">Yes</SelectItem>
              <SelectItem value="No">No</SelectItem>
            </SelectContent>
          </Select>
        </div> */}


        {/* {formData.doYouHaveTechnicalSkills === "Yes" && (
            <> */}

      <div className="space-y-2">
          <Label htmlFor="skills">Select Your Tecnical Skills</Label>
          <Select
            name="skills"
            value={formData.skills}
            onValueChange={(value) => handleSelectChange("skills", value)}
          >
            <SelectTrigger>
              <SelectValue placeholder="Select your technical skill" />
            </SelectTrigger>
            <SelectContent>
            <SelectItem value="Programming">Programming</SelectItem>
              <SelectItem value="Frontend Development">Frontend Development</SelectItem>
              <SelectItem value="Backend Development">Backend Development</SelectItem>
              <SelectItem value="Full Stack Development">Full Stack Development</SelectItem>
              <SelectItem value="DevOps">DevOps</SelectItem>
              <SelectItem value="Cloud Computing">Cloud Computing</SelectItem>
              <SelectItem value="Database Management">Database Management</SelectItem>
              <SelectItem value="Mobile Development">Mobile Development</SelectItem>
              <SelectItem value="UI/UX Design">UI/UX Design</SelectItem>
              <SelectItem value="Data Science">Data Science</SelectItem>
              <SelectItem value="Machine Learning">Machine Learning</SelectItem>
              <SelectItem value="Cybersecurity">Cybersecurity</SelectItem>
              <SelectItem value="Quality Assurance">Quality Assurance</SelectItem>
              <SelectItem value="Project Management">Project Management</SelectItem>
              <SelectItem value="Software Testing">Software Testing</SelectItem>
              <SelectItem value="Agile Methodologies">Agile Methodologies</SelectItem>
              <SelectItem value="System Architecture">System Architecture</SelectItem>
              <SelectItem value="Networking">Networking</SelectItem>
              <SelectItem value="IT Support">IT Support</SelectItem>
              <SelectItem value="Technical Writing">Technical Writing</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label htmlFor="gitHubProfileUrl">GitHub Profile URL:</Label>
          <Input
            id="gitHubProfileUrl"
            name="gitHubProfileUrl"
            type="link"
            value={formData.gitHubProfileUrl}
            onChange={handleChange}
            placeholder="https://github.com/yourusername"
          />
        </div>
       

        <div className="space-y-2 md:col-span-2 ">
          <Label htmlFor="techSkillsDetails">Describe your Technical Skills (Optional)</Label>
          <Textarea
            id="techSkillsDetails"
            name="techSkillsDetails"
            value={formData.experience}
            onChange={handleChange}
            placeholder="Describe details about your skills technical skills (Optional) "
          />
        </div>
             
            {/* </>
          )}
        */}

      
       
      
      

        <Button type="submit" className="w-full md:col-span-2" disabled={isSubmitting}>
          {isSubmitting ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Submitting...
            </>
          ) : (
            "Submit Application"
          )}
        </Button>
      </form>
    </div>
  )
}
