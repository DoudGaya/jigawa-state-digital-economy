import Image from 'next/image'
import React from 'react'
// import nigeria from '@/public/img/nigeria.png'
// import jigawa from '@/public/img/icons/jigawa-icon.png'
import logo from '@/app/assets/images/gigital-economy-logo.jpg'
import { FaFacebook, FaLinkedin, FaTwitter } from 'react-icons/fa'  
// import Link from 'next/link'

// interface LinksUrls {
//     id: number,
//     title: string 
//     url: string
// }

// const loginLinks = [
//     {
//         id: 1,
//         title: 'Ministry Login',
//         url: '/ministry/login'
//     },
//     {
//         id: 1,
//         title: 'Police Login',
//         url: '/police/login'
//     },
//     {
//         id: 1,
//         title: 'Courts',
//         url: '/courts/login'
//     },
//     {
//         id: 1,
//         title: 'Agents',
//         url: '/agents/login'
//     },
// ]

const SocialLinks = [
    {
        id: 1,
        title: 'Facebook',
        url: 'https://web.facebook.com/jigawa.digital.economy',
        icon: <FaFacebook className=' text-blue-600 size-7' />
    },
    {
        id: 3,
        title: 'LinkedIn',
        url: 'https://www.linkedin.com/company/jigawa-state-ict-and-digital-economy/',
        icon: <FaLinkedin className=' text-blue-400 size-7' />
    },
]



export const Footer = () => {
  return (
    <div className=' w-full px-4 dark:text-gray-900 bg-gray-100 mt-20 '>
        <div className=" grid gap-6 grid-cols-1 md:grid-cols-2 gap-x-6 max-w-5xl mx-auto py-10">
            <div className=" flex flex-col">
                <div className=" border-b-2 border-jyellow flex flex-col  space-y-3 py-1">
                    <div className=" flex flex-row space-x-3">
                        <Image src={logo} alt='' className=' h-16 py-2 object-contain max-w-max px-4  rounded-md border-2' />
                        {/* <Image src={jigawa} alt='' className=' h-14 w-14 rounded-full border-2 border-primary' /> */}
                    </div>
                    <p className=' font-poppins font-semibold'>Jigawa State ICT and Digital Economy </p>
                </div>
                <div className=" space-y-4 my-4">
                    {/* <h1 className=' font-poppins text-yellow-500  '>ABOUT US</h1> */}
                    <div className=' font-poppins w-full flex flex-col space-y-3 text-sm text-justify '>
                     <div className="">
                        <span className=' font-semibold mr-2 '>Misson:</span>
                        {/* Justice for all citizens consistent with the ideals of democracy and the rule of law. */}
                        To transform Jigawa into a leading digital economy in Nigeria by 2025, fostering innovation, creating job opportunities,
                         and positioning our state at the forefront of technological advancement.
                     </div>
                    </div>
                </div>
                <div className=" flex flex-row items-center space-x-2">
                   <p> Follow us:                    </p>
                    {
                        SocialLinks.map((link) => (
                            <a key={link.id} href={link.url} target='_blank' rel='noreferrer' className=' text-gray-900 hover:text-green-900'>
                                {link.icon}
                            </a>
                        ))
                    }
                </div>
            </div>
            <div className="  font-poppins lg:pr-10">
            <div className=" space-y-4">
                <h1 className=' font-poppins font-semibold  '>Contact US </h1>
                   <div className=" flex flex-col space-y-4">
                        <form className=' space-y-4'>
                            <div className=" flex flex-col space-y-2">
                                <label htmlFor="email" className=" font-poppins font-semibold">Email</label>
                                <input type="email" name="email" id="email" className=" border-2 border-green-700/50 rounded-md p-2" />
                            </div>
                            <div className=" flex flex-col space-y-2">
                                <label htmlFor="message" className=" font-poppins font-semibold">Message</label>
                                <textarea name="message" id="message" className=" border-2 border-green-700/50 rounded-md p-2"></textarea>
                            </div>
                            <div className=" flex flex-col space-y-2">
                                <button className=" bg-green-900 text-white rounded-md p-2">Send</button>
                            </div>
                        </form>
                   </div>
            </div>
            </div>
             
        </div>
    </div>
  )
}