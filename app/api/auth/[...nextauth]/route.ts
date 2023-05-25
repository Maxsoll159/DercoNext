

import NextAuth, { Awaitable, User } from "next-auth"
import GithubProvider from "next-auth/providers/github"
import Credentials from "next-auth/providers/credentials"
import { IniciarSesion } from "@/helpers/ApiLogin";
import Cookies from "js-cookie";
const handler = NextAuth({
    // Configure one or more authentication providers
    providers: [
        /*GithubProvider({
            clientId: "4073e5b9a9463b3d3e08",
            clientSecret: "cacdb62bccf6c41b32b8a1c059411c8218d28a01",
        }),*/
        Credentials({
            name: 'Custom Login',
            credentials: {
                correo: { label: 'Correo', type: "email", placeholder: 'ejemplo@hotmail.com' },
                clave: { label: 'Contraseña', type: "password", placeholder: '*****' },
            },
            async authorize(credentials, req) {
                let respuesta = await IniciarSesion(credentials)
                if (respuesta) {
                    console.log(respuesta)
                    Cookies.set("token", respuesta.token)
                    return respuesta
                } else {
                    alert("Error")
                }

            }
        })

    ],

    //Callbacks
    callbacks: {
        async jwt({ token, account, user }) {
            if (account) {
                token.accessToken = account.access_token
                switch (account.type) {
                    case 'credentials':
                        token.user = user
                        break;
                }
            }
            console.log(token)
            return token
        },
        async session({ session, token }: { session: any, token: any }) {
            session.user = token.user as any;
            console.log(session)
            return session
        }
    }
})

export { handler as GET, handler as POST }