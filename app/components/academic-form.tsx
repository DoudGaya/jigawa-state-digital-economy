"use client"

import { CommandGroup } from "@/components/ui/command"
import { CommandEmpty } from "@/components/ui/command"
import { useState, useEffect } from "react"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { submitAcademicForm } from "@/actions/academics"
import { z } from "zod"
import { Check, ChevronsUpDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Command, CommandInput, CommandItem, CommandList } from "@/components/ui/command"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { cn } from "@/lib/utils"
import { toast } from "sonner"
import { Textarea } from "@/components/ui/textarea"

import { disciplines, jigawaStateLGAs, ranks } from "@/lib/form-data"

const formSchema = z.object({
  firstName: z.string().min(2, { message: "First name must be at least 2 characters." }),
  surname: z.string().min(2, { message: "Surname must be at least 2 characters." }),
  email: z.string().min(2, { message: "Email must be at least 2 characters." }),
  otherName: z.string().optional(),
  institution: z.string().min(2, { message: "Institution is required." }),
  sex: z.enum(["Male", "Female", "Other"], {
    required_error: "Please select a gender.",
  }),
  lga: z.string().min(2, { message: "LGA is required." }),
  discipline: z.string({ required_error: "Please select a discipline." }),
  otherDiscipline: z.string().optional(),
  teachingExperience: z.string().min(10, { message: "Teaching experience must be at least 10 characters." }),
  rank: z.string({ required_error: "Please select a rank." }),
  whatsappNo: z.string().regex(/^(\+234|0|234)[0-9]{10}$/, {
    message: "WhatsApp number must be in format 08012345678 or +2348012345678.",
  }),
})

type FormValues = z.infer<typeof formSchema>

export function AcademicForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [showOtherDiscipline, setShowOtherDiscipline] = useState(false)

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "",
      surname: "",
      otherName: "",
      email: '',
      institution: "",
      lga: "",
      discipline: "",
      otherDiscipline: "",
      teachingExperience: "",
      whatsappNo: "",
    },
  })

  // Watch the discipline field to show/hide the "Other Discipline" field
  const selectedDiscipline = form.watch("discipline")
  
  useEffect(() => {
    setShowOtherDiscipline(selectedDiscipline === "other")
  }, [selectedDiscipline])

  async function onSubmit(data: FormValues) {
    setIsSubmitting(true)
    try {
      // If "Other" is selected, use the custom discipline value
      if (data.discipline === "other" && data.otherDiscipline) {
        data.discipline = data.otherDiscipline
      }
      
      const result = await submitAcademicForm(data)

      if (result.success) {
        toast( "Application Submitted",
         { description: "Your academic application has been successfully submitted."})
        form.reset()
      } else {
        toast("Submission Failed",
          { description: result.error || "There was an error submitting your application.",})
      }
    } catch (error) {
      toast("Submission Error", {
        description: "An unexpected error occurred. Please try again.", })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Academic Information</CardTitle>
        <CardDescription>Please fill in your academic details below.</CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <FormField
                control={form.control}
                name="firstName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>First Name</FormLabel>
                    <FormControl>
                      <Input placeholder="First Name" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}    
              />

              <FormField
                control={form.control}
                name="surname"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Surname</FormLabel>
                    <FormControl>
                      <Input placeholder="Last Name" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <FormField
              control={form.control}
              name="otherName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Other Name (Optional)</FormLabel>
                  <FormControl>
                    <Input placeholder="Middle name" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
              <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input placeholder="Email address" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <FormField
                control={form.control}
                name="institution"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Institution</FormLabel>
                    <FormControl>
                      <Input placeholder="University of..." {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="sex"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Sex</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select gender" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="Male">Male</SelectItem>
                        <SelectItem value="Female">Female</SelectItem>
                        {/* <SelectItem value="Other">Other</SelectItem> */}
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

             <FormField
                control={form.control}
                name="lga"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>LGA (Local Government Area)</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="LGA (Local Government Area)" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {
                            jigawaStateLGAs.map((lga) => (
                              <SelectItem key={lga} value={lga}>
                                {lga}
                              </SelectItem>
                            ))
                        }
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />

            <FormField
              control={form.control}
              name="discipline"
              render={({ field }) => (
                <FormItem className="flex flex-col">
                  <FormLabel>Discipline</FormLabel>
                  <Popover>
                    <PopoverTrigger asChild>
                      <FormControl>
                        <Button
                          variant="outline"
                          role="combobox"
                          className={cn("justify-between", !field.value && "text-muted-foreground")}
                        >
                          {field.value
                            ? disciplines.find((discipline) => discipline.value === field.value)?.label || field.value
                            : "Select discipline"}
                          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                        </Button>
                      </FormControl>
                    </PopoverTrigger>
                    <PopoverContent className="p-0 w-[300px] max-h-[300px] overflow-y-auto">
                      <Command>
                        <CommandInput placeholder="Search discipline..." />
                        <CommandList>
                          <CommandEmpty>No discipline found.</CommandEmpty>
                          <CommandGroup>
                            {disciplines.map((discipline) => (
                              <CommandItem
                                value={discipline.label}
                                key={discipline.value}
                                onSelect={() => {
                                  form.setValue("discipline", discipline.value)
                                }}
                              >
                                <Check
                                  className={cn(
                                    "mr-2 h-4 w-4",
                                    discipline.value === field.value ? "opacity-100" : "opacity-0",
                                  )}
                                />
                                {discipline.label}
                              </CommandItem>
                            ))}
                          </CommandGroup>
                        </CommandList>
                      </Command>
                    </PopoverContent>
                  </Popover>
                  <FormMessage />
                </FormItem>
              )}
            />

            {showOtherDiscipline && (
              <FormField
                control={form.control}
                name="otherDiscipline"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Specify Discipline</FormLabel>
                    <FormControl>
                      <Input placeholder="Please specify your discipline" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            )}

            <FormField
              control={form.control}
              name="rank"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Rank</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select rank" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {ranks.map((rank) => (
                        <SelectItem key={rank.value} value={rank.value}>
                          {rank.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="teachingExperience"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Teaching Experience</FormLabel>
                  <FormControl>
                    <Textarea 
                      placeholder="Briefly state your teaching, research, professional practice, or extension services focus" 
                      className="min-h-[120px]"
                      {...field} 
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="whatsappNo"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>WhatsApp Number</FormLabel>
                  <FormControl>
                    <Input placeholder="08012345678 or +2348012345678" {...field} />
                  </FormControl>
                  <FormDescription>Format: 08012345678 or +2348012345678</FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button type="submit" className="w-full bg-green-800" disabled={isSubmitting}>
              {isSubmitting ? "Submitting..." : "Submit Application"}
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  )
}
