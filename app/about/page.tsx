// import { Button } from "@/components/ui/button"
// import { Card, CardContent } from "@/components/ui/card"
// import { Home, Key, DollarSign, Users, Star, PhoneCall } from "lucide-react"
// import danModi from '@/app/assets/team/dan-modi.png'
import Image from "next/image"
import jigawaLogo from '@/app/assets/images/jg-logo-white.png'
import Team from "../components/Team"

export default function AboutUs() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative bg-green-500 py-20 h-[70vh] pt-20 px-4 sm:px-6 lg:px-8">
        <div className="relative max-w-7xl space-y-4 items-center pt-20 mx-auto">
            <Image src={jigawaLogo} alt='Jigawa State Logo' className=' h-32 object-contain max-w-max object-left' width={700} height={700} />
           <h1 className="text-2xl font-bold font-poppins tracking-tight text-gray-900 sm:text-2xl md:text-4xl">
            Welcome to <span className="text-white">Jigawa State</span> ICT and Digital Economy
          </h1>
          <p className="mt-6 max-w-3xl text-xl text-gray-800">
            We are committed to providing digital services and infrastructure to the people of Jigawa State.
          </p>
        </div>
      </section>

      <Team />
    </div>
  )
}