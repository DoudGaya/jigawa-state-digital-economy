import { Blinds, PencilLine, LayoutGrid, Images, Siren, User, GraduationCap} from "lucide-react"

import logo from '@/app/assets/images/jictde.png'
import LogoutButton from "./auth/LogOutButton"

const homes = [
    {
      title: "Home",
      url: "/user/home",
      icon: LayoutGrid,
    },
    {
      title: "Authors",
      url: "/user/authors",
      icon: User,
    },
    {
      title: "News",
      url: "/user/news",
      icon: Blinds,
    },
    {
      title: "Policies",
      url: "/user/policies",
      icon: Siren,
    },
    {
      title: "Gallery ",
      url: "/user/gallery",
      icon: Images,
    },
    {
      title: "Activities ",
      url: "/user/activities",
      icon: PencilLine,
    },
      {
      title: "Academics",
      url: "/user/academics",
      icon: GraduationCap,
    },
  ]


import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarGroup,
    SidebarGroupContent,
    SidebarGroupLabel,
    SidebarHeader,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
  } from "@/components/ui/sidebar"
import { DarkButton } from "./DarkButton"
import Image from "next/image"
  
  export function AppSidebar() {
    return (
     <Sidebar>
      <SidebarHeader className=" w-full flex justify-start ">
        <div className=" text-lg font-semibold font-poppins text-black">
          <Image alt="" src={logo} className=" h-10 object-contain" />
        </div>
      </SidebarHeader>
        <SidebarContent>
            <SidebarGroup>
                <SidebarGroupLabel className=" border-b self-center ">Jigawa ICT & Digital Economy</SidebarGroupLabel>
                <SidebarGroupContent>
                    <SidebarMenu>
                        {
                            homes.map(item => (
                                <SidebarMenuItem className="" key={item.title}>
                                    <SidebarMenuButton className=" py-3" asChild>
                                        <a className="" href={item.url}>
                                            <item.icon />
                                            <span className=" py-3"> {item.title} </span>
                                        </a>
                                    </SidebarMenuButton>
                                </SidebarMenuItem>
                            ))
                        }
                    </SidebarMenu>
                </SidebarGroupContent>
            </SidebarGroup>
        </SidebarContent>
        <SidebarFooter className="">
         <div className=" dark:bg-gray-600/50 bg items-center flex justify-between py-2 bg-white dark:bg-stone-950 px-3 rounded-xl w-full h-full">
                <DarkButton />
                <LogoutButton />
         </div>
        </SidebarFooter>
     </Sidebar>
    )
  }
  