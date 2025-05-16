import Image, { StaticImageData } from "next/image";
import '../styles.css'
import { ministries } from "@/lib/exports";
import { BarChart2, Cpu, Globe, Smartphone, Info } from "lucide-react"
import jigawaLogo from '@/app/assets/images/jigawa-state.jpg'
import Link from "next/link"
import Team from "../components/Team";

import TextBannerSlider from "../components/home-text-slider";



interface Card {
    id: number 
    url: string
    name: string
    image: StaticImageData
}

export default function Home() {
  return (
    <div className=" flex flex-col w-full">
      {/* <div className=" h-screen w-full md:flex hidden mt-10" >
      </div> */}

      <TextBannerSlider />
      {/* <div className=" bg-gray-300 py-6"></div> */}

      {/* <BannerCarousel /> */}
      
      <div className=" w-full max-w-6xl h-[80vh] md:h-[60ch] my-auto mx-auto pt-[50px] text-center items-center justify-center">
        <div className=" flex px-6 flex-col h-full space-y-4 justify-center bg my-auto items-center">
          <Image src={jigawaLogo} className=" h-36 w-36 object-cover rounded-full" alt="" width={700} height={700} />
          <h1 className=" md:text-2xl text-xl font-semibold text-green-500 font-poppins ">Welcome to Jigawa State ICT and Digital Economy Service Portal </h1>
          <span className=" text-xl font-poppins">Powered by the ICT and Digital Economy Office</span>
       </div>
      </div>
      <Team />
      
      {/* Information Section - Added Below Team Section */}
      <section className="w-full py-12 bg-gradient-to-r from-green-50 to-blue-50">
        <div className="container max-w-6xl mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row items-center gap-8 p-6 border-l-4 border-green-500 bg-white rounded-lg shadow-md">
            <div className="flex-shrink-0">
              <div className="p-3 bg-green-100 rounded-full">
                <Info className="h-8 w-8 text-green-600" />
              </div>
            </div>
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-gray-800 font-poppins">Dear Colleagues,</h3>
              
              <p className="text-gray-700">
                Following the recommendation made during our recent interactive session with His Excellency, 
                it was agreed that a data collection tool should be developed to enable the gathering of 
                information on academics for potential future engagements and collaboration.
              </p>
              
              <p className="text-gray-700">
                In response, a dedicated form has been created to support this initiative. Kindly take a 
                few moments to complete the form with your details to facilitate further engagement:
              </p>
              
              <div className="pt-2 pb-4">
                <Link 
                  href="/academics"
                  className="inline-flex items-center px-5 py-2.5 bg-green-600 hover:bg-green-700 text-white font-medium rounded-md transition duration-150 ease-in-out"
                >
                  <span className="mr-2">👉</span> Complete the Form
                </Link>
              </div>
              
              <div className="text-gray-700">
                <p>We appreciate your support and look forward to continued collaboration.</p>
                <p className="mt-2">
                  <span className="font-medium">Best regards,</span><br />
                  <span className="text-green-700 font-semibold font-poppins">Jigawa ICT & Digital Economy Office</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <section className="w-full py-12  md:py-24 lg:py-32 bg-white" id="initiatives">
          <div className="container max-w-6xl mx-auto  px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">Our Initiatives</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="flex flex-col items-center text-center space-y-2 p-4 bg-green-100 rounded-lg">
                <Globe className="h-12 w-12 text-green-600" />
                <h3 className="text-xl font-bold">Digital Infrastructure</h3>
                <p className="text-gray-600">Expanding internet connectivity across Jigawa State.</p>
              </div>
              <div className="flex flex-col items-center text-center space-y-2 p-4 bg-blue-100 rounded-lg">
                <Cpu className="h-12 w-12 text-blue-600" />
                <h3 className="text-xl font-bold">Tech Education</h3>
                <p className="text-gray-600">Empowering youth with digital skills and knowledge.</p>
              </div>
              <div className="flex flex-col items-center text-center space-y-2 p-4 bg-green-100 rounded-lg">
                <Smartphone className="h-12 w-12 text-green-600" />
                <h3 className="text-xl font-bold">E-Government</h3>
                <p className="text-gray-600">Digitizing government services for efficiency and transparency.</p>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100">
          <div className="container mx-auto max-w-6xl px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter font-poppins sm:text-4xl text-center mb-12">Our Impact</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="flex flex-col items-center space-y-2">
                <BarChart2 className="h-12 w-12 text-green-600" />
                <span className="text-4xl font-bold">50%</span>
                <span className="text-gray-600 text-center">Increase in ICT adoption</span>
              </div>
              {/* <div className="flex flex-col items-center space-y-2">
                <Globe className="h-12 w-12 text-blue-600" />
                <span className="text-4xl font-bold">1000+</span>
                <span className="text-gray-600 text-center">Wi-Fi hotspots installed</span>
              </div> */}
              <div className="flex flex-col items-center space-y-2">
                <Cpu className="h-12 w-12 text-green-600" />
                <span className="text-4xl font-bold">250+</span>
                <span className="text-gray-600 text-center">Public Staffs trained in digital skills</span>
              </div>
              <div className="flex flex-col items-center space-y-2">
                <Smartphone className="h-12 w-12 text-blue-600" />
                <span className="text-4xl font-bold">70+</span>
                <span className="text-gray-600 text-center">Government services digitized</span>
              </div>
            </div>
          </div>
        </section>
    <div className=" w-full  max-w-7xl flex flex-col mx-auto">
          <div className=" flex flex-col px-10 py-12 rounded-md mx-auto max-w-4xl">
              <h1 className=" font-poppins font-bold text-xl text-center py-4">{`Jigawa State MDA's Digitalization`}</h1>
              <p className=" font-poppins text-center text-sm md:text-base text-gray-600">
               {` We are onboarding Jigawa State MDA's into our digital transformation journey. We have a centralized platform for all government services to improve efficiency and transparency and accountability.
                The`}  <br />
                <Link className=" text-green-700 px-0.5 font-semibold hover:text-white hover:bg-green-600 " href={'/oneapi'}> Jigawa State One Government ( OneAPI ) </Link>
              </p>

              <div className=" flex flex-col md:flex-row w-full space-y-4 md:space-y-0 space-x-0 md:space-x-4 py-3 items-center justify-center">
                <Link className="border-green-500 border w-full text-center px-3 py-2 rounded-md font-poppins " href={'/oneapi'}>See the Docs 
                </Link>
                <Link href={'https://oneapi.api.jg.gov.ng'} className=" bg-green-500 w-full text-center px-3 py-2 rounded-md font-poppins text-white " target="_blank">Get Started</Link>
              </div>
          </div>
        <div className=" grid grid-cols-1 md:grid-cols-4 px-4 gap-4 ">
           {
            ministries.map((item: Card) => {
              return (
                <div className="" key={item.id}>
                <a href={item.url} target="_blank" className="product-item h-full rounded-lg">
                    <div className="product-item-image w-full items-center flex justify-center">
                        <Image width={1000} height={1000} className=" h-[120px] object-center object-contain w-[120px]" src={item.image} alt="" />
                        <div className="product-item-image-hover">
                        </div>
                    </div>
                    <div className="product-item-content">
                        
                        <div className="product-item-title font-poppins">
                           { item.name }
                        </div>
                        <div className="product-item-price">
                       Jigawa State 
                        </div>
                        <div className="button-pill">
                            <span>Visit</span>
                        </div>
                    </div>
                </a>
            </div>
              )
            })
           }
        </div>
    </div>
      <div className="grid-container">
         <div className="grid-x grid-margin-x small-up-1 medium-up-1 large-up-1 grid-x-wrapper">
             <div className="product-box column" style={{textAlign: 'center',  margin: '50px 0 50px'}}>
               <a href="#" target="_blank" className="">Powered by the ICT and Digital Economy Office</a>
            </div>
         </div>
      </div>
    </div>
  );
}
