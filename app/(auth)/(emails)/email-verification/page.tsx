"use client"

import { useCallback, useEffect, useState } from "react"
import { Suspense } from "react"
import { useSearchParams } from "next/navigation"
import { emailVerification } from "@/actions/email-verification"
import { FormError } from "@/components/FormError"
import { FormSuccess } from "@/components/FormSuccess"
import { BoxLoader } from "@/components/BoxLoader"
import Link from "next/link"

function EmailVerificationClient() {
  const searchParams = useSearchParams()
  const [error, setError] = useState<string | undefined>("")
  const [success, setSuccess] = useState<string | undefined>("")
  const [isLoading, setIsLoading] = useState(true)
  
  const token = searchParams.get("token")
  
  const onSubmit = useCallback(async () => {
    if (!token) {
      setError("Missing token!")
      setIsLoading(false)
      return
    }
    
    try {
      const data = await emailVerification(token)
      
      if (data.error) {
        setError(data.error)
      }
      
      if (data.success) {
        setSuccess(data.success)
      }
    } catch (error) {
      setError("Something went wrong!")
    } finally {
      setIsLoading(false)
    }
  }, [token])
  
  useEffect(() => {
    onSubmit()
  }, [onSubmit])
  
  return (
    <div className="flex flex-col items-center justify-center h-full">
      {isLoading ? (
        <BoxLoader />
      ) : (
        <div className="flex flex-col items-center space-y-4">
          <FormError message={error} />
          <FormSuccess message={success} />
          
          {success && (
            <Link 
              href="/login" 
              className="text-center py-2 px-6 bg-green-600 hover:bg-green-700 text-white rounded-md"
            >
              Login
            </Link>
          )}
        </div>
      )}
    </div>
  )
}

export default function EmailVerificationPage() {
  return (
    <Suspense fallback={<BoxLoader />}>
      <EmailVerificationClient />
    </Suspense>
  )
}
