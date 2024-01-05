import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { IoLocationSharp } from "react-icons/io5";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import Logo from "../img/FurtinetLogo.png"


function Contact() {
  return (
    <>
      <Navbar />
      <div className='container mx-auto'>
        <h1 className="text-center uppercase text-[30px] sm:text-[50px] mt-8 font-bold">get in touch</h1>
        <div className="flex mt-8 justify-between w-[200px] sm:justify-center sm:w-[500px] md:w-[700px] lg:w-[900px] md:justify-around flex-wrap mx-auto">
          <div className="block text-center w-[200px] mt-8 md:mt-0">
            <IoLocationSharp size={60} className='mx-auto bg-black py-[10px] rounded-[50%] text-white '/>
            <h3 className="font-bold uppercase mt-2">address</h3>
            <h3 className='font-bold uppercase mt-8 text-[15px]'>Where is our 1st branch?</h3>
            <p>Uzbekistan, Surkhandaray, Angor, Beruniy k, 16-uy</p>
            <h3 className='font-bold uppercase mt-8 text-[15px]'>Where is our 2st branch?</h3>
            <p>Uzbekistan, Toshkent, Sergeley, Navoiy k, 89-uy</p>
          </div>
          <div className="block text-center w-[200px] mt-8 md:mt-0">
            <FaPhoneAlt size={60} className='mx-auto bg-black rounded-[50%] text-white py-[10px]'/>
            <h3 className="font-bold uppercase mt-2">phone</h3>
            <h3 className='font-bold uppercase mt-8 text-[15px]'>Where is our 1st branch?</h3>
            <p>+998 93 908 59 80</p>
            <h3 className='font-bold uppercase mt-8 text-[15px]'>Where is our 2st branch?</h3>
            <p>+998 99 059 57 76</p>
          </div>
          <div className="block text-center w-[200px] mt-8 md:mt-0">
            <MdEmail size={60} className='mx-auto py-[10px] bg-black rounded-[50%] text-white '/>
            <h3 className="font-bold uppercase mt-2">email</h3>
            <h3 className='font-bold uppercase mt-8 text-[15px]'>Where is email 1st branch?</h3>
            <p>jorabekashurqulov400@gmail.com</p>
            <h3 className='font-bold uppercase mt-8 text-[15px]'>Where is email 2st branch?</h3>
            <p>jorabekashurqulov551@gmail.com</p>
          </div>
        </div>
        <div className="block sm:flex gap-8 mt-20 justify-around items-center">
          <div className="block sm:w-[400px]">
            <h1 className='font-bold text-[40px]'>Message Us</h1>
            <p className="mt-8">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Exercitationem optio vel expedita aperiam! Odio similique, porro molestiae facilis illum perferendis, illo reprehenderit quo expedita placeat id repellat harum officia eum.</p>
            <img src={Logo} className='w-[200px] mt-4' alt="" />
          </div>
          <div className="block mt-8 md:mt-0">
            <form>
              <div className="flex flex-wrap mx-auto items-center mb-8 gap-4">
                <div className='block'>
                  <label htmlFor="name">Name</label>
                  <input className='py-[10px] px-[10px] w-[300px] border-none rounded-[8px] mt-2' type="text" placeholder='Enter your name' id='name' />
                </div>
                <div className='block'>
                  <label htmlFor="lastName">Last Name</label>
                  <input className='py-[10px] px-[10px] w-[300px] border-none rounded-[8px] mt-2' type="text" placeholder='Enter your last name' id='lastName' />
                </div>
              </div>
              <label htmlFor="email">Email</label>
              <input className='py-[10px] px-[10px] w-full border-none rounded-[8px] mt-2' type="email" placeholder='Enter your last name' id='email' />
              <div className='mt-8'>
                <label htmlFor="message">Message</label>
                <textarea id='message' className=' w-full h-[200px] p-[20px]' placeholder='Enter your message'>
                </textarea>
              </div>
                
              <button type='submit' className='bg-black border-none rounded-[8px] py-[10px] px-[30px] text-white font-bold'>Send</button>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Contact