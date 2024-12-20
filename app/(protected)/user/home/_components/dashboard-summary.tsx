import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { ActivitiesType, GalleryType, NewsType, PoliciesType } from '@/typings'
import Link from 'next/link'
// import { fetchSummary } from '@/app/actions'

// interface DashboardSummaryProps {
//   type: PoliciesType[] | GalleryType[] | NewsType[] | ActivitiesType[]
// }

export async function DashboardSummary({ 
    count,
    title,
 }: {
    count: number
    title: string
}) {
//   const summary = await fetchSummary(type)
  return (
    <Card className=' bg-white space-y-2 dark:text-green-300 text-green-900  dark:bg-black/30'>
      <CardHeader>
        <CardTitle className="capitalize flex items-center justify-between">
            <p className=''>{title}</p>
            <p className='text-3xl font-semibold'>{count}</p>
        </CardTitle>
      </CardHeader>
            <Link className='' href={`/user/${title.toLocaleLowerCase()}`}> 
                <CardFooter className=' w-full text-sm font-poppins duration-75 font-medium transition-all ease-in-out delay-75 dark:hover:text-green-200 rounded-b-lg hover:bg-green-300/30 hover:text-green-800 border-t py-1' >
                    visit page
                </CardFooter>
            </Link>
    </Card>
  )
}

