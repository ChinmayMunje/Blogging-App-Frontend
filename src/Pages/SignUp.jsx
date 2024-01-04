import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Login from './Login'
import axios from 'axios'
import { SIGNUP_API } from '../services/api'
import { ToastContainer, toast } from 'react-toastify';


const SignUp = () => {

    const switchLogin = (event) => {
        setSignupModal(false)
        setLoginModal(true)
    }

    const [data, setData] = useState({
        username: "",
        email: "",
        password: ""
    })

    const [error, setError] = useState({
        errors: {},
        isError: false
    })

    const handleChange = (e) => {
        const {name, value} = e.target
        setData((userData)=>({
            ...userData,
            [name]: value,
        }))
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        // if(error.isError){
        //     toast.error("Form Data is Invalid")
        //     setError({...error, isError: false})
        //     return;
        // }
        axios.post(SIGNUP_API,data).then((res)=>{
            console.log(res);
            toast("User Registered Successfully !!!");
            setData({
                username: "",
                email: "",
                password: ""
            })
        }).catch((err)=>{
            console.log(err);
            setError({
                errors: err,
                isError: true
            })
        })
        // console.log(data);
    }

    return (
        <>
            <h3 className='text-5xl font-semibold'>Sign Up</h3>
            <p className='font-medium text-lg text-gray-500 mt-4'>Please Enter Your details</p>
            <form className='mt-8' onSubmit={handleSubmit}>
                <div className='flex flex-col items-start justify-center'>
                    <label className='text-lg font-medium'>Username</label>
                    <input type="text" placeholder='Enter Your Username' value={data.username} name='username' onChange={handleChange} className='w-full border-2 border-gray-100 rounded-xl p-2 mt-1 bg-transparent' onInvalid={error.errors?.response?.data?.username ? true : false} />
                    <span className='text-red-500 text-start'>{error.errors?.response?.data?.username}</span>
                </div>
                <div className='flex flex-col items-start justify-center mt-2'>
                    <label className='text-lg font-medium'>Email</label>
                    <input type="email" placeholder='Enter Your email' value={data.email} name='email' onChange={handleChange} className='w-full border-2 border-gray-100 rounded-xl p-2 mt-1 bg-transparent' onInvalid={error.errors?.response?.data?.email ? true : false} />
                    <span className='text-red-500 text-start'>{error.errors?.response?.data?.email}</span>
                </div>
                <div className='flex flex-col items-start justify-center mt-2'>
                    <label className='text-lg font-medium'>Password</label>
                    <input type="password" placeholder='Enter Your password' value={data.password} name='password' onChange={handleChange} className='w-full border-2 border-gray-100 rounded-xl p-2 mt-1 bg-transparent' onInvalid={error.errors?.response?.data?.password ? true : false} />
                    <span className='text-red-500 text-start'>{error.errors?.response?.data?.password}</span>
                </div>

                <div className='mt-8 flex flex-col gap-y-4'>
                    <button className='bg-blue-950 text-white text-lg font-bold py-3 rounded-xl active:scale-[.98] active:duration-75 transition-all hover:scale-[1.01] ease-in-out' type='submit'>Sign up</button>
                </div>
                <div className='mt-8 flex justify-center items-center'>
                    <p className='font-medium text-base'>Already have an account?</p>
                    <button
                        className='ml-2 font-medium text-base text-blue-700'>Login</button>
                </div>

            </form>

        </>

    )
}

export default SignUp