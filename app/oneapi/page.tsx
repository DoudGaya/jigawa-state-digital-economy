// import { Button } from "@/components/ui/button"
// import { Card, CardContent } from "@/components/ui/card"
// import { Home, Key, DollarSign, Users, Star, PhoneCall } from "lucide-react"
import PagesBanner from "../components/PagesBanner"
import jigawaLogo from '@/app/assets/images/jigawa-state.jpg'
import Documentation from "./_components/Documentations"
import Image from "next/image"

export default function AboutUs() {
  return (
    <div className=" bg-gray-100">
      {/* Hero Section */}
    <PagesBanner message="Creating Centralized Plaftorm for Jigawa State to improve accountablity and" />

    <section className=" bg-white mx-auto flex flex-col">
       <div className=" w-full bg-white">
        <div className=" py-10 space-y-4 max-w-5xl mx-auto">
                <Image src={jigawaLogo} alt='Jigawa State Logo' className=' h-32 object-contain max-w-max object-left' width={700} height={700} />
                <h2 className="text-3xl font-extrabold text-gray-900 font-poppins text-center">About OneAPI</h2>
                <p className="text-center text-gray-800 font-poppins ">OneAPI is a centralized platform for Jigawa State to improve accountability and transparency in governance. The platform is designed to provide a single source of truth for all government data and services. It is built on the principles of open data, open standards, and open source software. OneAPI is a key component of the Jigawa State ICT and Digital Economy policy, which aims to transform the state into a digital hub for innovation and economic growth.</p>
            </div>
       </div>
       <div className=" max-w-6xl mx-auto py-6">
       <Documentation />
       </div>
    </section>    
    </div>
  )
}