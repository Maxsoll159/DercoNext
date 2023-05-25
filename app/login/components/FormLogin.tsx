"use client"
import { FormEvent } from 'react';
import { Input } from "@/components/Form/Input"
import useForm from "@/hooks/useForm"
import { IniciarSesion } from '@/helpers/ApiLogin';
import { useRouter } from 'next/navigation';
import Cookies from 'js-cookie';
import Swal from "sweetalert2";
import { signIn } from 'next-auth/react';
export const FormLogin = () => {



    const router = useRouter();
    const [formState, handleChange] = useForm({
        correo: "",
        clave: "",
        redirect: true
    })
    const enviarDatos = async(e: FormEvent) => {
        e.preventDefault()
        await signIn('credentials', formState)
    }

    return (

        <form action="" className="px-5 space-y-5" onSubmit={(e) => enviarDatos(e)}>

            <Input
                id="correo"
                name="correo"
                type="email"
                labelText="Correo Electronico"
                placeholder="ejemplo@hotmail.com"
                onChange={handleChange}
                value={formState.email}
            />
            <Input
                id="clave"
                name="clave"
                type="password"
                labelText="Contraseña"
                placeholder="******"
                onChange={handleChange}
                value={formState.password}
            />
            <button className="bg-[#d90912] text-white font-bold w-full rounded-md py-3">Ingresa</button>
        </form>

    )
}
