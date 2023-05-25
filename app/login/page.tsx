import Image from "next/image";
import { FormLogin } from "./components/FormLogin";

export default function Login() {
    return (
        <section className="bg-fondoDerco w-screen h-screen bg-no-repeat bg-cover">
            <article className="container mx-auto">
                <div className="h-screen relative">
                    <div className="bg-white rounded-lg w-[410px] left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 absolute pb-10">
                        <div className="w-full bg-[#d90912] rounded-t-lg px-10 py-5">
                            <Image src="/img/logo.webp" alt="Derco Center" width={144} height={82} className="mx-auto" />
                        </div>
                        <div className="p-5">
                            <p className="text-center text-2xl">Iniciar Sesion</p>
                            <p className="text-center text-gray-500 mt-2">Ingrese su dirección de correo electrónico y contraseña para acceder al panel de administración.</p>
                        </div>
                        <FormLogin />
                    </div>
                </div>
            </article>
        </section>
    )
}