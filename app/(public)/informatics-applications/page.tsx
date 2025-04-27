import PagesBanner from "@/app/components/PagesBanner"
import { ValidationForm } from "@/components/validation-form"

export default function ApplicationPage() {
  return (
    <div className="flex flex-col py-12">
      <PagesBanner
        subtitle=""
        message="Jigawa State Government ICT and Digital Economy Skills Development"
      />
      <div className="container py-10 mx-auto px-4">
        <div className="mx-auto max-w-4xl flex flex-col space-y-6">
          <div className="p-6 text-center bg-green-200/20 rounded-lg border-green-800/50 border text-green-700">
            <h1 className="text-2xl font-bold">
            Invitation to Apply for Jigawa State Government ICT and Digital Economy Skills Development Program
            </h1>
            {/* <p className="mt-2">Informatics Institute Advanced Diploma Graduate Data Collection</p> */}
          </div>

          {/* Program Information */}
          <div className="p-6 bg-white border rounded-lg border-green-700/70 shadow-md space-y-6">
            <div className="space-y-4">
              <h2 className="text-xl font-semibold text-green-800">
                {/* Invitation to Apply for Jigawa State Government ICT and Digital Economy Skills Development Program */}
              </h2>
              <p className="text-gray-700">
                The Office of the Technical Adviser on ICT and Digital Economy, in collaboration with the Ministry of
                Higher Education, Science and Technology, MAP Foundation and the AI Policy and Practice Lab at
                Cosmopolitan University, is pleased to invite all graduates of the International Advanced Diploma from
                Informatics Institute Kazaure to apply for the first phase of the Jigawa State Government ICT and
                Digital Economy Skills Development Program.
              </p>
              <p className="text-gray-700 italic">
                (The second phase of the program will accommodate graduates with B.Sc., B.Tech, HND, and International
                Diplomas in Computing from Informatics.)
              </p>
              <p className="text-gray-700">
                This initiative is designed to equip participants with cutting-edge digital skills, while connecting
                them to a vibrant ecosystem that supports employment, innovation, and entrepreneurship in the digital
                economy.
              </p>
            </div>

            <div className="border-t border-b border-gray-200 py-4">
              <h2 className="text-xl font-semibold text-green-800 mb-4">Program Structure</h2>

              <div className="space-y-4">
                <div>
                  <h3 className="font-medium text-green-700">Phase 1:</h3>
                  <p className="text-gray-700 ml-4">One-month self-paced online capacity development via Coursera.</p>
                </div>

                <div>
                  <h3 className="font-medium text-green-700">Phase 2:</h3>
                  <p className="text-gray-700 ml-4">
                    Three-month intensive, hands-on bootcamp at the following designated centers:
                  </p>

                  <ul className="list-disc text-gray-700 ml-8 mt-2 space-y-1">
                    <li>Informatics Institute, Kazaure</li>
                    <li>MAP Foundation, Hadejia</li>
                    <li>NITDA Centre, Federal University of Technology, Babura</li>
                    <li>Sule Lamido University, Kafin Hausa</li>
                  </ul>

                  <div className="mt-4 bg-green-50 p-4 rounded-md">
                    <p className="text-gray-700">
                      During the bootcamp, participants will be exposed to practical applications of AgriTech,
                      including:
                    </p>

                    <ul className="list-disc text-gray-700 ml-8 mt-2 space-y-1">
                      <li>Enrolling farmers into Farm Information Systems</li>
                      <li>Geo-mapping farms to support Climate-Smart Agriculture practices</li>
                    </ul>

                    <p className="text-gray-700 mt-3 font-medium">
                      Participants will also earn income through these hands-on field activities.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h2 className="text-xl font-semibold text-green-800">Training Focus Areas</h2>

              <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 text-gray-700">
                <li className="flex items-center">
                  <div className="w-2 h-2 rounded-full bg-green-600 mr-2"></div>
                  Artificial Intelligence (AI)
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 rounded-full bg-green-600 mr-2"></div>
                  Blockchain Technology
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 rounded-full bg-green-600 mr-2"></div>
                  Cloud Computing
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 rounded-full bg-green-600 mr-2"></div>
                  Geographic Information Systems (GIS) and Remote Sensing
                </li>
                <li className="flex items-center col-span-1 md:col-span-2">
                  <div className="w-2 h-2 rounded-full bg-green-600 mr-2"></div>
                  Sector-focused applications in AgriTech, EduTech, and HealthTech
                </li>
              </ul>
            </div>

            <div className="bg-green-50 p-5 rounded-md">
              <h2 className="text-xl font-semibold text-green-800 mb-3">Internship Opportunity</h2>
              <p className="text-gray-700">
                Upon successful completion of the bootcamp, participants will be placed in a paid 8-month internship,
                offering valuable real-world experience and industry engagement.
              </p>
            </div>
          </div>

          {/* Application Form */}
          <div className="p-6 bg-white border rounded-lg border-green-700/70 shadow-md">
            <h2 className="text-xl font-semibold text-green-800 mb-4">Application Form</h2>
            <ValidationForm />
          </div>
        </div>
      </div>
    </div>
  )
}



// import PagesBanner from "@/app/components/PagesBanner"
// import { ValidationForm } from "@/components/validation-form"

// export default function ApplicationPage() {
//   return (
//     <div className="flex flex-col py-12">
//       <PagesBanner subtitle="Office of The Technical Adviser on ICT and Digital Economy in Collaboration with Ministry of Higher Education, Science and Technology" message="Jigawa State Government ICT and Digital Economy Skills Development" />
//       <div className="container py-10 mx-auto px-4">
//         <div className=" mx-auto max-w-4xl flex flex-col space-y-4">
//           <div className="p-6 text-center bg-green-200/20 rounded-lg border-green-800/50 border text-green-700">
//             <h1 className="text-2xl font-bold">Jigawa State Government ICT and Digital Economy Skills Development</h1>
//             <p className="mt-2">Informatics Institute Advanced Diploma Graduate Data Collection</p>
//           </div>
//           <div className="p-6 bg-white border rounded-lg border-green-700/70 shadow-md">
//             <ValidationForm />
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }
