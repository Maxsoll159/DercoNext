"use client"
import { useSession } from "next-auth/react";

export default function Login() {
    const { data: session, status } = useSession()
    const user: any = session?.user
    return (
        <>
            <h1>Soy el dasboarh</h1>
            {
                session !== undefined && (
                    <p>{user?.usuario?.apellidos}</p>
                )
            }
        </>
    )
}