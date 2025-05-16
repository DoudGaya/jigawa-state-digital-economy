// import { AcademicForm } from "@/components/academic-form"
import PagesBanner from "@/app/components/PagesBanner"
import { AcademicForm } from "@/app/components/academic-form"


export default function Academics() {
  return (
    <main className="">
      <PagesBanner
        subtitle="Data collection"
        message="Jigawa Academic Forum"
      />
      <div className="max-w-3xl mx-auto">
        {/* <h1 className="text-3xl font-bold mb-6 text-center"></h1> */}
          <div className="mt-12 mb-10 bg-gradient-to-r from-green-50 to-indigo-50 border-t-4 border-green-500 rounded-lg shadow-md p-6">
          <h3 className="text-lg font-semibold text-gray-800 mb-3">Dear Colleagues,</h3>
          
          <p className="text-gray-700 mb-4">
            Following the recommendation made during our recent interactive session with His Excellency, 
            it was agreed that a data collection tool should be developed to enable the gathering of 
            information on academics for potential future engagements and collaboration.
          </p>
          
          <p className="text-gray-700 mb-4">
            In response, a dedicated form has been created to support this initiative. Kindly take a 
            few moments to complete the form with your details to facilitate further engagement:
          </p>
          
          <div className="flex justify-center my-5">
            <a 
              href="https://ict.jg.gov.ng/academics" 
              className="inline-flex items-center px-5 py-2 bg-green-600 hover:bg-green-700 text-white font-medium rounded-md transition duration-150 ease-in-out"
            >
              <span className="mr-2">👉</span> Complete the Form
            </a>
          </div>
          
          <p className="text-gray-700 mb-2">
            We appreciate your support and look forward to continued collaboration.
          </p>
          
          <p className="text-gray-700">
            <span className="font-medium">Best regards,</span><br />
            <span className="text-green-700 font-semibold">Jigawa ICT & Digital Economy Office</span>
          </p>
        </div>
        <AcademicForm />
        
      
      </div>
    </main>
  )
}