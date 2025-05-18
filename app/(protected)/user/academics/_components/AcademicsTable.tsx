"use client"

import { Button } from "@/components/ui/button"
// import { AcademicType } from "@/actions/academics-management"
import { AcademicType } from "@/lib/academics-schema"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Edit2, Trash2 } from 'lucide-react'
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { useState } from "react"
// import { EditAcademicForm } from "./EditAcademicForm"
import { EditAcademicForm } from "./EditAcademicForm"

export function AcademicsTable({ 
  academics, 
  onDelete,
  onUpdate
}: {
  academics: AcademicType[]
  onDelete: (academicId: string) => void
  onUpdate: (academic: AcademicType) => void
}) {
  const [selectedAcademic, setSelectedAcademic] = useState<AcademicType | null>(null)
  const [isEditDialogOpen, setIsEditDialogOpen] = useState(false)

  const handleEditClick = (academic: AcademicType) => {
    setSelectedAcademic(academic)
    setIsEditDialogOpen(true)
  }

  const handleUpdateSubmit = (updatedAcademic: AcademicType) => {
    onUpdate(updatedAcademic)
    setIsEditDialogOpen(false)
  }

  if (academics.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center p-8 text-center">
        <p className="text-gray-500 mb-4">No academic records found</p>
        <p className="text-sm text-gray-400">Try adjusting your search or add a new record</p>
      </div>
    )
  }

  return (
    <>
      <div className="rounded-md border">
        <Table>
          <TableHeader>
            <TableRow className="bg-green-50 dark:bg-green-900/20">
              <TableHead className="font-semibold">Name</TableHead>
              <TableHead className="font-semibold">Institution</TableHead>
              <TableHead className="font-semibold">Discipline</TableHead>
              <TableHead className="font-semibold">LGA</TableHead>
              <TableHead className="font-semibold">Rank</TableHead>
              <TableHead className="font-semibold">Contact</TableHead>
              <TableHead className="font-semibold text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {academics.map((academic) => (
              <TableRow key={academic.id} className="hover:bg-gray-50 dark:hover:bg-gray-900/10">
                <TableCell className="font-medium">
                  {academic.firstName} {academic.surname}{" "}
                  {academic.otherName && <span className="text-gray-500">{academic.otherName}</span>}
                </TableCell>
                <TableCell>{academic.institution}</TableCell>
                <TableCell>{academic.discipline}</TableCell>
                <TableCell>{academic.lga}</TableCell>
                <TableCell>{academic.rank}</TableCell>
                <TableCell>
                  <div className="flex flex-col">
                    <span className="text-xs">{academic.email}</span>
                    <span className="text-xs text-gray-500">{academic.whatsappNo}</span>
                  </div>
                </TableCell>
                <TableCell className="text-right">
                  <div className="flex justify-end space-x-2">
                    <Button 
                      variant="ghost" 
                      size="sm" 
                      className="h-8 w-8 p-0"
                      onClick={() => handleEditClick(academic)}
                    >
                      <Edit2 className="h-4 w-4 text-green-600" />
                    </Button>
                    
                    <AlertDialog>
                      <AlertDialogTrigger asChild>
                        <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                          <Trash2 className="h-4 w-4 text-red-600" />
                        </Button>
                      </AlertDialogTrigger>
                      <AlertDialogContent className="w-[90%] md:w-[500px] rounded-xl">
                        <AlertDialogHeader>
                          <AlertDialogTitle>Delete Academic Record</AlertDialogTitle>
                          <AlertDialogDescription className="text-stone-700">
                            This action cannot be undone. This will permanently delete the record for{" "}
                            <span className="font-semibold text-black">
                              {academic.firstName} {academic.surname}
                            </span>{" "}
                            from the database.
                          </AlertDialogDescription>
                        </AlertDialogHeader>
                        <AlertDialogFooter>
                          <AlertDialogCancel>Cancel</AlertDialogCancel>
                          <AlertDialogAction 
                            className="bg-red-600 hover:bg-red-700"
                            onClick={() => onDelete(academic.id)}
                          >
                            Delete
                          </AlertDialogAction>
                        </AlertDialogFooter>
                      </AlertDialogContent>
                    </AlertDialog>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      <Dialog open={isEditDialogOpen} onOpenChange={setIsEditDialogOpen}>
        <DialogContent className="sm:max-w-[700px] max-h-[85%] md:max-w-xl overflow-y-auto">
          <DialogHeader>
            <DialogTitle className='py-5 flex text-center bg-green-200 dark:bg-green-900/30 rounded-lg justify-center'>
              <p className='flex items-start text-center font-poppins text-green-800 dark:text-green-300'>
                Edit Academic Record
              </p>
            </DialogTitle>
          </DialogHeader>
          {selectedAcademic && (
            <EditAcademicForm 
              academic={selectedAcademic} 
              onSubmit={handleUpdateSubmit} 
              onClose={() => setIsEditDialogOpen(false)} 
            />
          )}
        </DialogContent>
      </Dialog>
    </>
  )
}