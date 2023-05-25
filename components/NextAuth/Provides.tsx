"use client"

import { SessionProvider } from "next-auth/react"


export const Provaider = ({ children }: any) => {
    return (
        <SessionProvider >
            {children}
        </SessionProvider>
    )
}

