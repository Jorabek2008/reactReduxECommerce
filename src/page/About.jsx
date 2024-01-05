import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import aboutImg from "../img/aboutImg.jpg"

function About() {
  return (
    <>
      <Navbar />
      <div className='mt-10 container mx-auto'>
        <h1 className='text-center text-[50px] sm:text-[50px] text-[#999] uppercase mb-4'>Grow with us</h1>
        <p className="text-center text-[16px] sm:text-[16px]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, <br /> dignissimos animi! Dolore ab ad neque.</p>
        <div className="block text-center mt-8">
          <button className='bg-black text-white border-none rounded-[8px] px-[30px] py-[10px]'>All Watch</button>
        </div>
        <div className="block sm:flex sm:justify-between items-center flex-wrap w-[100px] sm:w-[300px] md:w-[700px] gap-8 mx-auto mt-10">
          <div className="block">
            <h1 className='text-[50px] text-center text-[#999]'>23000</h1>
            <h5 className='text-center text-[#666] font-bold' >Furniture</h5>
          </div>
          <div className="block">
            <h1 className='text-[50px] text-center text-[#999]'>14</h1>
            <h5 className='text-center text-[#666] font-bold' >Office</h5>
          </div>
          <div className="block">
            <h1 className='text-[50px] text-center text-[#999]'>1300</h1>
            <h5 className='text-center text-[#666] font-bold' >Workers</h5>
          </div>
          <div className="block">
            <h1 className='text-[50px] text-center text-[#999]'>200</h1>
            <h5 className='text-center text-[#666] font-bold' >Brands</h5>
          </div>
        </div>
        <div className="block mt-10">
          <img className='w-full h-[50vh] sm:h-[70vh] md:h-[100vh]' src={aboutImg} alt="" />
        </div>
        <div className="block mt-10 w-[400px] sm:w-[600px] mx-auto md:w-[800px]">
          <h1 className='text-center text-[30px] sm:text[50px]'>What is different when you work with us</h1>
          <div className="block sm:flex gap-4 sm:justify-between mt-10 justify-center">
            <div className="block w-[400px] sm:w-[300px] text-center mx-auto md:w-[350px]">
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Non, itaque? Adipisci error, odit soluta, at ipsum nesciunt velit provident, ab cum minus ipsa alias odio eveniet architecto fugiat possimus fuga.</p>
              <p className="mt-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam dolores, molestias nam ex expedita magni quibusdam quisquam quas? Deleniti nulla, tempora quos soluta quaerat in?</p>
              <div className="mt-4">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quas, molestias?</div>
            </div>
            <div className="block w-[400px] sm:w-[300px] text-center mx-auto mt-14 sm:mt-0 md:w-[350px]">
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Et, sit?</p>
              <oll>
                <li>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</li>
                <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur ab facere cum expedita quaerat!</li>
                <li>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cum magnam iste delectus, odit voluptas dolorem deleniti laborum ab in praesentium!</li>
              </oll>
            </div>
          </div>
        </div>
        
      </div>
      <Footer />
    </>
  )
}

export default About