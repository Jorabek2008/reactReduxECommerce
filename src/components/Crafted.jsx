import React from 'react'
import craftedImg from "../img/craftedImg.jpg"

function Crafted() {
  return (
    <>
        <div className="container mt-8 block mx-auto items-center xl:flex sm:flex lg:flex md:flex 2xl:flex justify-between">
            <div className='mx-auto w-[300px] sm:w-full'>
                <h1 className='text-[30px] font-bold leading-[30px] sm:text-[40px] sm:leading-[40px] lg:text-[40px] lg:leading-[40px] md:text-[40px] md:leading-[40px] uppercase'>Masterpieces <br /> crafted from <span className='text-[#38CB89]'>solid <br /> wood</span></h1>
                <p className='my-8'>Since 1990 , Iconic has been producing ecological furniture. We stand <br /> for a modern , minimalist design vovabulary and a sustainable <br /> approach to design</p>
                <button className='bg-black border-none rounded-[8px] text-white uppercase text-[13px] md:text[18px] py-[10px] px-[10px] md:px-[30px] hover:bg-white hover:text-black transition-all'>Order custom design</button>
            </div>
            <div className='mx-auto container'>
                <img src={craftedImg} className='mt-4 mx-auto w-[300px] sm:w-[500px]' />
            </div>
        </div>
    </>
  )
}

export default Crafted