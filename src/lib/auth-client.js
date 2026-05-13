import { createAuthClient } from "better-auth/react"
export const authClient = createAuthClient({
    // baseURL: "https://ph-a08-tiles-gallery.vercel.app"
    baseURL: "http://localhost:3000"
})

export const { signIn, signUp, useSession } = createAuthClient()