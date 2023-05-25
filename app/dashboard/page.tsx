"use client"
import { useSession } from "next-auth/react";

export default function Login() {
    const { data: session, status } = useSession()
    const user: any = session?.user
    console.log(user)
    return (
        <>
            <h1>Soy el dasboarh</h1>
            <h1>{user?.data?.usuario?.apellidos}</h1>
        </>
    )
}