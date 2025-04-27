import React from 'react'
import Image from "next/image"
// import logo from '@/public/banner.jpg'
import jigawaLogo from '@/app/assets/images/jg-logo-white.png'
import logo from '@/app/assets/images/banner.png'

const PagesBanner = ( {message, subtitle}: {message: string, subtitle: string}) => {
  return (
    <section style={{
      backgroundImage: `url(${logo.src})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat"
    }} className=" flex w-full bg-blend-multiply py-20 md:h-[80vh] bg-cover bg-center flex-col md:items-start justify-center pt-20 px-4 sm:px-6 lg:px-8">
    <div className="relative max-w-7xl space-y-4 py-10 text-center px-6 mx-auto">
        {/* <Image src={jigawaLogo} alt='' className=' h-32 object-contain max-w-max object-left' width={700} height={700} /> */}
         <div className="space-y-4 flex bg-white/80 w-full col-span-2 px-10 py-6 shadow-sm flex-col">
            <div className="space-y-2">
              <h1 className="text-2xl text-green-900 font-poppins md:text-4xl lg:text-5xl font-bold leading-tight">
              {message}
              </h1>
              <p 
                className="text-xl md:text-xl text-gray-800">
                  {subtitle}
              </p>
            </div>

          <div className="flex items-center space-x-4">
            <div className="flex w-full text-center justify-center md:justify-start space-x-6">
              {/* <div className="flex items-center space-x-2 text-green-900 font-poppins font-semibold text-lg">
                Application
              </div> */}
            </div>
          </div>
        </div>
    </div>
  </section>
  )
}

export default PagesBanner