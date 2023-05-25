import { InputHTMLAttributes } from "react"
interface FromProps extends InputHTMLAttributes<HTMLInputElement> {
    labelText: string
    value: string
}

export const Input = ({ labelText, value ,...props }: FromProps) => {
    console.log(value?.length)
    return (
        <div className="flex flex-col">
            <label htmlFor={props.id} className="mb-2">
                {labelText}
            </label>
            <input className={`border border-gray-300 rounded-lg px-3 focus:border focus:border-blue-500 placeholder:text-sm outline-none py-3 ${value?.length < 0 ? "border-blue-500" : "border-red-500"}`} {...props}/>
        </div>
    )
}
