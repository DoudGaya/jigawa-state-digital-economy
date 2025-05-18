'use client'

import React, { useState, useEffect } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { ScrollArea } from '@/components/ui/scroll-area'
// import { AcademicsTable } from './AcademicsTable'
import { AcademicsTable } from './AcademicsTable'
import { AddAcademicForm } from './AddAcademicForm'
// import { AcademicForm } from '@/app/components/academic-form'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
// import { AddAcademicForm } from './AddAcademicForm'
// import Academicsform
// import { AcademicType } from '@/actions/academics-management'
import { AcademicType } from '@/lib/academics-schema'
import { useToast } from "@/hooks/use-toast"
import { deleteAcademicAction } from "@/actions/academics-management"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export function AcademicActionArea({
  academics,
}: {
  academics: AcademicType[]
}) {
  const [academicItems, setAcademicItems] = useState<AcademicType[]>([...academics])
  const [currentPage, setCurrentPage] = useState(1)
  const [searchTerm, setSearchTerm] = useState('')
  const [filterField, setFilterField] = useState('all')
  const [isDialogOpen, setIsDialogOpen] = useState(false)
  const { toast } = useToast()

  const itemsPerPage = 10

  // Sort and filter academics
  const filteredAcademics = academicItems.filter(item => {
    if (searchTerm === '') return true
    
    const searchLower = searchTerm.toLowerCase()
    
    if (filterField === 'all') {
      return (
        item?.firstName?.toLowerCase().includes(searchLower) ||
        item?.surname?.toLowerCase().includes(searchLower) ||
        item?.institution?.toLowerCase().includes(searchLower) ||
        item?.discipline?.toLowerCase().includes(searchLower) ||
        item?.lga?.toLowerCase().includes(searchLower) ||
        item?.email?.toLowerCase().includes(searchLower)
      )
    }
    
    // Filter by specific field
    if (filterField === 'name') {
      return (
        item?.firstName?.toLowerCase().includes(searchLower) ||
        item?.surname?.toLowerCase().includes(searchLower)
      )
    }
    
    // Handle other specific fields
    return item[filterField as keyof AcademicType]?.toString().toLowerCase().includes(searchLower)
  })

  const totalPages = Math.ceil(filteredAcademics.length / itemsPerPage)
  const startIndex = (currentPage - 1) * itemsPerPage
  const endIndex = startIndex + itemsPerPage
  const currentAcademicItems = filteredAcademics.slice(startIndex, endIndex)

  // Reset to page 1 when search changes
  useEffect(() => {
    setCurrentPage(1)
  }, [searchTerm, filterField])

  const handleDeleteAcademic = async (academicId: string) => {
    try {
      const result = await deleteAcademicAction(academicId)
      
      if (result.success) {
        setAcademicItems(prevItems => prevItems.filter(item => item.id !== academicId))
        toast({
          title: "Record Deleted",
          description: "Academic record has been deleted successfully",
        })
      } else {
        toast({
          title: "Error",
          description: result.error || "Failed to delete record",
          variant: "destructive",
        })
      }
    } catch (error) {
      console.error("Error deleting academic record:", error)
      toast({
        title: "Error",
        description: "Failed to delete academic record. Please try again.",
        variant: "destructive",
      })
    }
  }

  const handleAddAcademic = (newAcademic: AcademicType) => {
    setAcademicItems(prevItems => [newAcademic, ...prevItems])
    setIsDialogOpen(false)
    toast({
      title: "Record Added",
      description: "New academic record has been added successfully",
    })
  }

  const handleUpdateAcademic = (updatedAcademic: AcademicType) => {
    setAcademicItems(prevItems => 
      prevItems.map(item => 
        item.id === updatedAcademic.id ? updatedAcademic : item
      )
    )
    toast({
      title: "Record Updated",
      description: "Academic record has been updated successfully",
    })
  }

  return (
    <div className="flex flex-col w-full h-[calc(100vh-5vh)]">
      <div className="flex flex-col max-h-min py-0 my-0 bg-white dark:bg-dark-bg border-b drop-shadow-sm w-full">
        <div className="w-full items-center flex px-6 justify-between py-4 rounded-lg">
          <div className="flex flex-col space-y-8 md:space-y-0 md:flex-row w-full md:justify-between md:items-center">
            <div className="flex space-y-2 flex-col">
              <p className='text-lg font-poppins font-semibold'>Academic Records Management</p>
              <div className="flex space-x-2">
                <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
                  <DialogTrigger asChild>
                    <Button className='font-poppins text-white dark:bg-green-500'>Add Academic Record</Button>
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-[700px] max-h-[85%] md:max-w-xl overflow-y-auto">
                    <DialogHeader>
                      <DialogTitle className='py-5 flex text-center bg-green-200 dark:bg-green-900/30 rounded-lg justify-center'>
                        <p className='flex items-start text-center font-poppins text-green-800 dark:text-green-300'>Add Academic Record</p>
                      </DialogTitle>
                    </DialogHeader>
                    <AddAcademicForm onSubmit={handleAddAcademic} onClose={() => setIsDialogOpen(false)} />
                  </DialogContent>
                </Dialog>
              </div>
            </div>
            <div className="flex flex-col gap-2 md:flex-row items-end md:items-center">
              <div className="mb-0 flex flex-col space-y-2">
                <Label htmlFor="filter" className='text-sm font-poppins'>Filter By</Label>
                <Select 
                  value={filterField} 
                  onValueChange={(value) => setFilterField(value)}
                >
                  <SelectTrigger className="w-[150px]">
                    <SelectValue placeholder="Filter field" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Fields</SelectItem>
                    <SelectItem value="name">Name</SelectItem>
                    <SelectItem value="institution">Institution</SelectItem>
                    <SelectItem value="discipline">Discipline</SelectItem>
                    <SelectItem value="lga">LGA</SelectItem>
                    <SelectItem value="rank">Rank</SelectItem>
                    <SelectItem value="email">Email</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="mb-0 flex flex-col space-y-2">
                <Label htmlFor="search" className='text-sm font-poppins'>Search</Label>
                <Input
                  id="search"
                  type="text"
                  placeholder="Search academics..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-[250px] outline-green-500"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <ScrollArea className="flex-grow overflow-auto">
        <div className="p-4">
          <AcademicsTable 
            academics={currentAcademicItems} 
            onDelete={handleDeleteAcademic}
            onUpdate={handleUpdateAcademic}
          />
        </div>
      </ScrollArea>
      <div className="flex justify-center py-4 bg-white dark:bg-dark-bg border-t">
        <Button
          onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
          disabled={currentPage === 1}
          className='bg-black dark:bg-gray-600'
        >
          Previous
        </Button>
        <span className="mx-4 flex items-center">
          Page {currentPage} of {totalPages || 1} 
          <span className="ml-2 text-sm text-gray-500">
            ({filteredAcademics.length} records)
          </span>
        </span>
        <Button
          onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages || 1))}
          disabled={currentPage === totalPages || totalPages === 0}
          className='bg-black dark:bg-gray-600'
        >
          Next
        </Button>
      </div>
    </div>
  )
}