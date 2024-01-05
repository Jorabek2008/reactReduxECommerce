import React from 'react'
import couchImg from '../img/couch.jpg';
import couchImg1 from '../img/couch1.jpg';
import "../styles/img.css"

function Couch() {
    
  return (
    <>
        <div className="container mx-auto block sm:flex flex-wrap items-center justify-center my-20">
            <img src={couchImg} className='h-[200px] mt-8 mx-auto' alt="" />
            <div className="block w-[200px] mx-auto mt-8">
                <h1 className='font-bold uppercase text-[30px]'>turntable <br /> couch</h1>
                <p className='mt-10'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi, maiores.</p>
            </div>
            <img src={couchImg1} className='mx-auto mt-8' alt="" />
            <div className="block w-[200px] mx-auto mt-8">
                <h1 className='font-bold uppercase text-[30px]'>fast <br /> delivery</h1>
                <p className='mt-10'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi, maiores.</p>
            </div>
        </div>

        <div className="container mx-auto BgImg mt-10 text-center text-white pt-20">
            <h1 className='text-[40px] font-[500] text-center'>Join our newsletter</h1>
            <p>Sign up for deals , new products and promotions</p>
            <div className="flex items-center gap-2 w-[500px] mx-auto mt-8">
                <input type="text" placeholder='Email address' className='w-[350px] rounded-[8px] border-none py-[10px] pr-[30px] pl-[10px] text-black' />
                <button className='py-[10px] px-[30px] bg-white text-black rounded-[8px]'>Sign In</button>
            </div>
        </div>
    </>
  )
}

export default Couch