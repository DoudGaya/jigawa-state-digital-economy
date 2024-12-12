'use client'

import React, { useState } from 'react'
import { signOut, useSession } from 'next-auth/react'
import Link from 'next/link'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { DarkButton } from '@/components/DarkButton'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { ScrollArea } from '@/components/ui/scroll-area'
import { NewsItemCard } from './NewsItem'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { AddNewsForm } from './AddNewsForm'
import { AuthorType, NewsType } from '@/typings'

const logout = () => {
  signOut()
}

export function NewsActionArea({
  authors,
  news
}: {
  authors: AuthorType[]
  news: NewsType[]
}) {
  const [newsItems, setNewsItems] = useState<(NewsType)[]>([...news,])
  const [currentPage, setCurrentPage] = useState(1)
  const [searchTerm, setSearchTerm] = useState('')

  const itemsPerPage = 20

  const filteredNews = newsItems.filter(item =>
    // item?.driverName?.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item?.title?.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item?.content?.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item?.author?.name?.toLowerCase().includes(searchTerm.toLowerCase())
  )

  const totalPages = Math.ceil(filteredNews.length / itemsPerPage)
  const startIndex = (currentPage - 1) * itemsPerPage
  const endIndex = startIndex + itemsPerPage
  const currentNewsItems = filteredNews.slice(startIndex, endIndex)

  return (
    <div className="flex flex-col w-full h-[calc(100vh-5vh)]">
      <div className="flex flex-col max-h-min py-0 my-0 bg-white dark:bg-dark-bg border-b drop-shadow-sm  w-full">
        <div className="w-full items-center flex px-6 justify-between py-4 rounded-lg">
          <div className="flex flex-col space-y-8 md:space-y-0 md:flex-row w-full md:justify-between md:items-center">
            <div className="flex space-y-2 flex-col">
              <p className='text-lg font-poppins font-semibold'>News Management System</p>
              <div className="flex space-x-2">
                <Dialog>
                  <DialogTrigger asChild>
                    <Button className='font-poppins text-white dark:bg-green-500'>Add News</Button>
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-[700px] h-[80%] md:max-w-4xl overflow-y-auto">
                    <DialogHeader>
                      <DialogTitle className='py-5 flex text-center bg-blue-200 rounded-lg justify-center'>
                        <p className='flex items-start text-center font-poppins text-blue-800'>Add News</p>
                      </DialogTitle>
                    </DialogHeader>
                    <AddNewsForm authors={authors} onSubmit={(data) => setNewsItems([...newsItems, data])} />
                  </DialogContent>
                </Dialog>
                
              </div>
            </div>
            <div className="flex flex-col">
              <div className="mb-4 flex flex-col space-y-2">
                <Label htmlFor="search" className='text-base font-poppins font-semibold'>Search News</Label>
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
          <div className="grid max-w-7xl mx-auto grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
            {currentNewsItems.map((news,) => (
              <NewsItemCard news={news} key={news.id} />
            ))}
          </div>
        </div>
      </ScrollArea>
      <div className="flex justify-center py-4 bg-white dark:bg-dark-bg border-t">
        <Button
          onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
          disabled={currentPage === 1}
          className=' bg-black dark:bg-gray-600'
        >
          Previous
        </Button>
        <span className="mx-4">
          Page {currentPage} of {totalPages}
        </span>
        <Button
          onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
          disabled={currentPage === totalPages}
          className=' bg-black dark:bg-gray-600'
        >
          Next
        </Button>
      </div>
    </div>
  )
}
