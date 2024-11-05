import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Home, Key, DollarSign, Users, Star, PhoneCall } from "lucide-react"
import Image from "next/image"
import jigawaLogo from '@/app/assets/images/jg-logo-white.png'

export default function AboutUs() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative bg-green-600 py-20 h-[70vh] pt-20 px-4 sm:px-6 lg:px-8">
        <div className="relative max-w-7xl space-y-4 items-center pt-20 mx-auto">
            <Image src={jigawaLogo} alt='' className=' h-32 object-contain max-w-max object-left' width={700} height={700} />
     <h1 className="text-2xl font-bold font-poppins tracking-tight text-gray-900 sm:text-2xl md:text-4xl">
            Welcome to <span className="text-white">Jigawa State</span> ICT and Digital Economy
          </h1>
          <p className="mt-6 max-w-3xl text-xl text-gray-800">
            We are committed to providing digital services and infrastructure to the people of Jigawa State.
          </p>
          {/* <div className="mt-10">
            <Button className="bg-gray-900 text-white hover:bg-gray-800">Explore Our Listings</Button>
          </div> */}
        </div>
      </section>

      {/* Our Services Section */}

      {/* Team Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-gray-900 text-center mb-12">Meet Our Team</h2>
          <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { name: "Jane Doe", role: "Founder & CEO", image: "/placeholder.svg?height=400&width=400" },
              { name: "John Smith", role: "Senior Real Estate Agent", image: "/placeholder.svg?height=400&width=400" },
              { name: "Emily Brown", role: "Property Manager", image: "/placeholder.svg?height=400&width=400" },
            ].map((member, index) => (
              <div key={index} className="text-center">
                <img
                  className="mx-auto h-40 w-40 rounded-full xl:h-56 xl:w-56"
                  src={member.image}
                  alt={member.name}
                />
                <div className="mt-6">
                  <h3 className="text-xl font-medium text-gray-900">{member.name}</h3>
                  <p className="text-base text-yellow-600 font-medium">{member.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}