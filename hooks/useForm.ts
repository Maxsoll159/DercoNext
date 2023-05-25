"use client"
import { ChangeEvent } from 'react'
import { useState } from 'react';

const useForm = (initialState: any = {}) => {
    const [state, setState] = useState(initialState)

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        setState({
            ...state,
            [event.target.name]: event.target.value
        })
    }

    return [state, handleChange];
}

export default useForm;