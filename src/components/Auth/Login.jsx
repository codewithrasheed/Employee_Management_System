import React, { useState } from 'react'

const Login = ({handleLogin}) => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const submitHandler = (e) => {
        e.preventDefault();
        handleLogin(email, password);
        setEmail('');
        setPassword('');
    }

  return (
    <>
    <h1 className="text-4xl text-center uppercase bg-[#059669] text-white p-5 ems">Employee Management System</h1>
    <div className='flex items-center justify-center mt-16'>
        <div className='border-2 border-emerald-600 p-20 rounded-xl relative login'>
            <h2 className='text-3xl mt-6 absolute top-0'>Login</h2>
            <form
            onSubmit={(e)=>{
                submitHandler(e)
            }} 
            className='flex flex-col items-center justify-center mt-5'>
                <input
                value={email}
                onChange={(e)=>{
                    setEmail(e.target.value)
                }}
                required 
                className='outline-none bg-transparent border-2 border-emerald-600 py-3 px-6 rounded-full text-xl placeholder:text-gray-400' type="email" placeholder='Enter your email' />
                <input 
                value={password}
                onChange={(e)=>{
                    setPassword(e.target.value)
                }}
                required
                className='outline-none bg-transparent border-2 border-emerald-600 py-3 px-6 rounded-full text-xl mt-3 placeholder:text-gray-400' type="password" placeholder='Enter your password' />
                <button className='mt-5 bg-emerald-600 py-2 px-28 rounded-full text-xl'>Log in</button>
            </form>
        </div>
    </div>
                </>
  )
}

export default Login