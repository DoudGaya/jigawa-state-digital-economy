'use client'

import React, { useState } from 'react'
import { signOut } from 'next-auth/react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { ScrollArea } from '@/components/ui/scroll-area'
import { ActivityItem } from './ActivityItem'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { AddActivityForm } from './AddActivityForm'
import { ActivitiesType, AuthorType } from '@/typings'
import { useToast } from '@/hooks/use-toast'
import { deleteActivity } from '@/actions/activities'

const logout = () => {
  signOut()
}

export function ActivityActionArea({
  authors,
  activities
}: {
  authors: AuthorType[]
  activities: ActivitiesType[]
}) {
  const [activitiesItems, setActivitiesItems] = useState<ActivitiesType[]>([...activities])
  const [currentPage, setCurrentPage] = useState(1)
  const [searchTerm, setSearchTerm] = useState('')
  const [isDialogOpen, setIsDialogOpen] = useState(false)

  const { toast } = useToast()

  const itemsPerPage = 20

  const filteredActivities = activitiesItems.filter(item =>
    item?.title?.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item?.content?.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item?.author?.name?.toLowerCase().includes(searchTerm.toLowerCase())
  )

  const totalPages = Math.ceil(filteredActivities.length / itemsPerPage)
  const startIndex = (currentPage - 1) * itemsPerPage
  const endIndex = startIndex + itemsPerPage
  const currentActivities = filteredActivities.slice(startIndex, endIndex)

  const handleDeleteActivity = async (activityId: string) => {
    try {
      await deleteActivity(activityId)
      setActivitiesItems(prevItems => prevItems.filter(item => item.id !== activityId))
      toast({
        title: "Activity Deleted",
        description: "Activity has been deleted successfully",
      })
    } catch (error) {
      console.error("Error deleting activity:", error)
      toast({
        title: "Error",
        description: "Failed to delete activity. Please try again.",
        variant: "destructive",
      })
    }
  }

  const handleAddActivity = (newActivity: ActivitiesType) => {
    setActivitiesItems(prevItems => [...prevItems, newActivity])
    setIsDialogOpen(false)
    toast({
      title: "Activity Added",
      description: "New activity has been added successfully",
    })
  }

  return (
    <div className="flex flex-col w-full h-[calc(100vh-5vh)]">
      <div className="flex flex-col max-h-min py-0 my-0 bg-white dark:bg-dark-bg border-b drop-shadow-sm  w-full">
        <div className="w-full items-center flex px-6 justify-between py-4 rounded-lg">
          <div className="flex flex-col space-y-8 md:space-y-0 md:flex-row w-full md:justify-between md:items-center">
            <div className="flex space-y-2 flex-col">
              <p className='text-lg font-poppins font-semibold'>Activities Management</p>
              <div className="flex space-x-2">
                <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
                  <DialogTrigger asChild>
                    <Button className='font-poppins text-white dark:bg-green-500'>Add Activity</Button>
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-[700px] max-h-[85%] md:max-w-xl overflow-y-auto">
                    <DialogHeader>
                      <DialogTitle className='py-5 flex text-center bg-green-200 dark:bg-green-900/30 rounded-lg justify-center'>
                        <p className='flex items-start text-center font-poppins dark:text-green-200 text-green-800'>Add Activity</p>
                      </DialogTitle>
                    </DialogHeader>
                    <AddActivityForm authors={authors} onSubmit={handleAddActivity} onClose={() => setIsDialogOpen(false)} />
                  </DialogContent>
                </Dialog>
              </div>
            </div>
            <div className="flex flex-col">
              <div className="mb-4 flex flex-col space-y-2">
                <Label htmlFor="search" className='text-base font-poppins font-semibold'>Search Activity</Label>
                <Input
                  id="search"
                  type="text"
                  placeholder="Search by title, content, or author"
                  value={searchTerm}
                  onChange={(e) => {
                    setSearchTerm(e.target.value)
                    setCurrentPage(1)
                  }}
                  className="max-w-sm outline-green-500 border-green-500 placeholder:text-green-700 w-[350px]"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <ScrollArea className="flex-grow ">
        <div className="p-4">
          <div className="grid max-w-7xl mx-auto grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-3">
            {currentActivities.map((activity) => (
              <ActivityItem activity={activity} key={activity.id} onDelete={handleDeleteActivity} />
            ))}
          </div>
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
        <span className="mx-4">
          Page {currentPage} of {totalPages}
        </span>
        <Button
          onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
          disabled={currentPage === totalPages}
          className='bg-black dark:bg-gray-600'
        >
          Next
        </Button>
      </div>
    </div>
  )
}

