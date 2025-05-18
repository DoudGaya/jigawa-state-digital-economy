"use server"

import { auth, signOut } from "@/auth"
import { cookies } from "next/headers"

export const logOut = async () => {
  // Get the session to check if user is authenticated
  const session = await auth()
  if (session) {
    // In Next.js 15, we should use the Auth.js signOut function 
    // which will properly clear the session and cookies
    try {
      await signOut({ 
        redirectTo: "/",
        redirect: true
      })
    } catch (error) {
      console.error("Error during sign out:", error)
      // Fallback if signOut doesn't redirect
      return { success: false, error: "Failed to sign out" }
    }
  }
  return { success: true }
}