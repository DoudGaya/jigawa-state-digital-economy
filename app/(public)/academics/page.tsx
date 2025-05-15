// import { AcademicForm } from "@/components/academic-form"
import PagesBanner from "@/app/components/PagesBanner"
import { AcademicForm } from "@/app/components/academic-form"


export default function Academics() {
  return (
    <main className="">
    <PagesBanner
        subtitle="Data collection not application"
        message="Jigawa Academic Forum"
      />
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold mb-6 text-center">Academic Application Form</h1>
        <AcademicForm />
      </div>
    </main>
  )
}
