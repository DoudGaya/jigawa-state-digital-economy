import { getAllAuthors } from '@/actions/author'
import { getAllNews } from '@/actions/news'
import React from 'react'
import { Suspense } from 'react'

import { DashboardSummary } from './_components/dashboard-summary'
import { CardSkeleton } from './_components/card-skeleton'
import { getAllRecords } from '@/actions/dashboard'

const HomeDashboard = async () => {



  const {
    policies,
    galleries,
    news,
    activities,
    authors,
    academics
  } = await getAllRecords()



  type CardType = {
    id: number;
    title: string;
    count: number;
  }


  const cards: CardType[] = [
    {
      id: 1,
      title: "Policies",
      count: policies.length
    },
    {
      id: 2,
      title: "Galleries",
      count: galleries.length
    },
    {
      id: 3,
      title: "News",
      count: news.length
    },
    {
      id: 4,
      title: "Activities",
      count: activities.length
    },
    {
      id: 5,
      title: "Authors",
      count: authors.length
    },
     {
      id: 6,
      title: "Academics",
      count: academics.length
    }
  ]


  return (
    <div className="p-6 bg-gray-100 border-t dark:bg-dark-bg min-h-[calc(100vh-5vh)] ">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
        {cards.map((card) => (
          <Suspense key={card.id} fallback={<CardSkeleton />}>
            <DashboardSummary  count={card.count} title={card.title} />
          </Suspense>
        ))}
      </div>
    </div>
    )
}

export default HomeDashboard