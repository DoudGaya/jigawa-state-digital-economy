import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Home, Key, DollarSign, Users, Star, PhoneCall } from "lucide-react"
import Image from "next/image"
import jigawaLogo from '@/app/assets/images/jg-logo-white.png'
import rislan from '@/app/assets/team/rislan.jpg'
import hashim from '@/app/assets/team/hashim.jpg'
import governor from '@/app/assets/team/governor.png'
// import danModi from '@/app/assets/team/dan-modi.png'
import deputy from '@/app/assets/team/deputy.png'
import murtala from '@/app/assets/team/murtala.jpg'
import habib from '@/app/assets/team/habib.jpg'
import jigawaFlag from '@/app/assets/images/ng-flag.png'

export default function AboutUs() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative bg-green-500 py-20 h-[70vh] pt-20 px-4 sm:px-6 lg:px-8">
        <div className="relative max-w-7xl space-y-4 items-center pt-20 mx-auto">
            <Image src={jigawaLogo.src} alt='' className=' h-32 object-contain max-w-max object-left' width={700} height={700} />
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

      <section style={{ backgroundImage: `url(${jigawaFlag.src})` }} className=" bg-contain bg-no-repeat bg-center bg-blend-overlay bg-white/50 py-20 h-full pt-20 px-4 sm:px-6 lg:px-8">
        <div className="relative max-w-7xl grid grid-cols-1 md:grid-cols-2 space-x-4 space-y-4 items-center pt-20 mx-auto">
            <div className=" flex items-center space-x-4 flex-col justify-center text-center md:flex-row">
              <Image src={governor} alt='' className=' h-[200px] bg-white rounded-full w-[200px] border-green-500 border-4 object-cover obj' width={700} height={700} />
              <div className=" flex flex-col ">
                <h1 className=" text-lg font-poppins"> Jigawa State Governor</h1>
                <p className=" text-gray-800 text-lg md:text-2xl font-bold">H.E Malam Umar A. Namadi,FCA</p>
              </div>
            </div>
            <div className=" flex items-center space-x-4 flex-col justify-center text-center md:flex-row">
              <Image src={deputy} alt='' className=' h-[200px] rounded-full bg-white w-[200px] border-green-500 border-4 object-contain object-left' width={700} height={700} />
              <div className=" flex flex-col ">
                <h1 className=" text-lg font-poppins">Deputy Governor of Jigawa State</h1>
                <p className=" text-gray-800 text-lg md:text-2xl font-bold">H.E Engr. Aminu Usman</p>
              </div>
            </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-gray-900 text-center mb-12">Meet Our Team</h2>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { name: "Dr. Rislan Abdulazeez Kanya", role: "Special Assistant to the Executive Governor of Jigawa State on ICT", image: rislan },
              { name: "Hashim H Hashim", role: "Special Assistant to the Executive Governor of Jigawa State on ICT II", image: hashim},
              { name: "Murtala Lawan", role: "Special Assistant tothe Jigawa State Governor on ICT and Digital Economy", image: murtala },
              { name: "Habib Kani", role: "Special Assistant tothe Jigawa State Governor on ICT and Digital Economy", image: habib },
            ].map((member, index) => (
              <div key={index} className=" py-6 text-center">
                <img
                  className="mx-auto h-40 w-40 rounded-md object-cover border-2 border-green-500 xl:h-56 xl:w-56"
                  src={member.image.src}
                  alt={member.name}
                />
                <div className="mt-6">
                  <p className="text-sm text-green-600 font-poppins font-medium">{member.role}</p>
                  <h3 className="text-lg font-medium font-poppins text-gray-900">{member.name}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}