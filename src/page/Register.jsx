import React, {useState} from 'react'
import LoginImg from "../img/register.png"
import { Link } from 'react-router-dom'
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import { toast } from 'react-toastify';

function Register() {
  
 const [email, setEmail] = useState('')
 const [password, setPassword] = useState('')

 function emailFunck(e){
  setEmail(e.target.value)
 }
 function passwordFunck(e){
  setPassword(e.target.value)
 }
 function signupFunck(e){
  e.preventDefault()
  createUserWithEmailAndPassword(getAuth(), email, password)
  .then(() => {
    toast.success("User is successfull")
    setTimeout(() => {
      location.replace('/')
    }, 2000)
  })
  .catch((e) => toast.error(e.error))
 }
  return (
    <div className="flex flex-wrap items-center justify-around mt-20 mx-auto p-20">
        <img src={LoginImg} alt="" />
        <form onSubmit={signupFunck}>
        <div className="flex flex-wrap items-center mb-8 gap-4">
            <div>
              <label htmlFor="name">Name</label>
              <input className='block py-[10px] px-[10px] w-[300px] border-none rounded-[8px] mt-2' type="text" placeholder='Enter your name' id='name' />
            </div>
            <div>
              <label htmlFor="lastName">Last Name</label>
              <input className='block py-[10px] px-[10px] w-[300px] border-none rounded-[8px] mt-2' type="text" placeholder='Enter your last name' id='lastName' />
            </div>
          </div>
          <label htmlFor="email">Email</label>
          <input type="text" id='email' value={email} onChange={emailFunck}  placeholder='Enter your email' className='py-[10px] mb-4 px-[10px] w-full border-none rounded-[8px] mt-2' />
          <label htmlFor="password">Password</label>
          <input type="password" id='password' value={password} onChange={passwordFunck} placeholder='Enter your password' className='py-[10px] px-[10px] w-full border-none rounded-[8px] mt-2' />
          <button type='submit' className='bg-black border-none rounded-[8px] py-[10px] px-[30px] text-white font-bold mt-4'>Send</button>
          <div className="text-center mt-4">
            <p>If you haven't logged in before, you need to register by <br /> clicking on the link</p>
            <Link to="/login" className='text-[blue]'>Log in</Link>
          </div>
        </form>
      </div>
  )
}

export default Register