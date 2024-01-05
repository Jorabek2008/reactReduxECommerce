import React, { useState } from 'react'
import LoginImg from "../img/login.png"
import { Link } from 'react-router-dom'
import Home from './Home'
import Register from './Register';
import '../firebase/config'
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { toast } from 'react-toastify';


function Login() {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
 
  function emailFunck(e){
   setEmail(e.target.value)
  }
  function passwordFunck(e){
   setPassword(e.target.value)
  }
  function loginHandler(e){
    e.preventDefault()
    signInWithEmailAndPassword(getAuth(), email, password)
    .then(() => {
      toast.success("User is successfull")
      setTimeout(() => {
        location.replace('/')
      }, 2000)
    })
    .catch((e) => toast.error(e.error))
  }
  return (
    <> 
    
      <div className="flex flex-wrap p-20 items-center justify-around mt-20">
        <img src={LoginImg} alt="" />
        <form onSubmit={loginHandler}>
          <label htmlFor="email">Email</label>
          <input type="text" id='email' value={email} onChange={emailFunck} placeholder='Enter your email' className='py-[10px] mb-4 px-[10px] w-full border-none rounded-[8px] mt-2' />
          <label htmlFor="password">Password</label>
          <input type="password" id='password' value={password} onChange={passwordFunck} placeholder='Enter your password' className='py-[10px] px-[10px] w-full border-none rounded-[8px] mt-2' />
          <button type='submit' className='bg-black border-none rounded-[8px] py-[10px] px-[30px] text-white font-bold mt-4'>Send</button>
          <div className="text-center mt-4">
            <p>If you haven't logged in before, you need to register by <br /> clicking on the link</p>
            <Link to="/register" className='text-[blue]'>Register</Link>
          </div>
        </form>
      </div>
    </>
  )
}

export default Login