'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { 
  Form, 
  FormControl, 
  FormField, 
  FormItem, 
  FormLabel, 
  FormMessage
} from "@/components/ui/form"
import { useRouter } from 'next/navigation'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { createAcademic } from '@/actions/academics-management'
import { AcademicSchema } from '@/lib/academics-schema'
import { AcademicType } from '@/lib/academics-schema'
import { jigawaStateLGAs, ranks, disciplines } from '@/lib/form-data'

interface AddAcademicFormProps {
  onSubmit: (academic: AcademicType) => void;
  onClose: () => void;
}

export function AddAcademicForm({ onSubmit, onClose }: AddAcademicFormProps) {
  const [isPending, setIsPending] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const router = useRouter()

  const form = useForm<z.infer<typeof AcademicSchema>>({
    resolver: zodResolver(AcademicSchema),
    defaultValues: {
      firstName: '',
      surname: '',
      otherName: '',
      email: '',
      institution: '',
      sex: 'Male',
      lga: '',
      discipline: '',
      teachingExperience: '',
      rank: '',
      whatsappNo: '',
    },
  })

  async function handleSubmit(values: z.infer<typeof AcademicSchema>) {
    setIsPending(true)
    setError(null)
    
    try {
      const result = await createAcademic(values)
      
      if (result.error) {
        setError(result.error)
        return
      }
      
      onSubmit(result.academic as AcademicType)
      form.reset()
      onClose()
    } catch (error) {
      console.error('Error submitting form:', error)
      setError('An unexpected error occurred. Please try again.')
    } finally {
      setIsPending(false)
      router.refresh()
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-4">
        {error && (
          <div className="p-3 rounded-md bg-red-50 text-red-700 text-sm border border-red-200">
            {error}
          </div>
        )}
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <FormField
            control={form.control}
            name="firstName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>First Name</FormLabel>
                <FormControl>
                  <Input disabled={isPending} placeholder="First name" {...field} />
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
                  <Input disabled={isPending} placeholder="Surname" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <FormField
            control={form.control}
            name="otherName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Other Name (Optional)</FormLabel>
                <FormControl>
                  <Input disabled={isPending} placeholder="Other name" {...field} />
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
                  <Input disabled={isPending} type="email" placeholder="Email address" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <FormField
            control={form.control}
            name="institution"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Institution</FormLabel>
                <FormControl>
                  <Input disabled={isPending} placeholder="Institution name" {...field} />
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
                <Select 
                  disabled={isPending}
                  onValueChange={field.onChange} 
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select gender" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="Male">Male</SelectItem>
                    <SelectItem value="Female">Female</SelectItem>
                    <SelectItem value="Other">Other</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <FormField
            control={form.control}
            name="lga"
            render={({ field }) => (
              <FormItem>
                <FormLabel>LGA (Local Government Area)</FormLabel>
                <Select 
                  disabled={isPending}
                  onValueChange={field.onChange} 
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select LGA" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent className="max-h-[200px] overflow-y-auto">
                    {jigawaStateLGAs.map((lga) => (
                      <SelectItem key={lga} value={lga}>{lga}</SelectItem>
                    ))}
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
              <FormItem>
                <FormLabel>Discipline</FormLabel>
                <Select 
                  disabled={isPending}
                  onValueChange={field.onChange} 
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select discipline" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent className="max-h-[200px] overflow-y-auto">
                    {disciplines.map((discipline) => (
                      <SelectItem key={discipline.value} value={discipline.value}>
                        {discipline.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <FormField
            control={form.control}
            name="rank"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Rank</FormLabel>
                <Select 
                  disabled={isPending}
                  onValueChange={field.onChange} 
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select rank" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent className="max-h-[200px] overflow-y-auto">
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
            name="whatsappNo"
            render={({ field }) => (
              <FormItem>
                <FormLabel>WhatsApp Number</FormLabel>
                <FormControl>
                  <Input 
                    disabled={isPending} 
                    placeholder="e.g. 08012345678 or +2348012345678" 
                    {...field} 
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <FormField
          control={form.control}
          name="teachingExperience"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Teaching Experience</FormLabel>
              <FormControl>
                <Textarea 
                  disabled={isPending} 
                  placeholder="Briefly state your teaching, research, professional practice, or extension services focus" 
                  className="min-h-[120px]"
                  {...field} 
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <div className="flex justify-end space-x-2 pt-4">
          <Button 
            type="button" 
            variant="outline" 
            onClick={onClose}
            disabled={isPending}
          >
            Cancel
          </Button>
          <Button 
            type="submit" 
            className="bg-green-600 hover:bg-green-700" 
            disabled={isPending}
          >
            {isPending ? 'Submitting...' : 'Add Academic'}
          </Button>
        </div>
      </form>
    </Form>
  )
}