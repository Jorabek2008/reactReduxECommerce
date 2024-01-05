import React from 'react'
import Img1 from "../img/1.jpg"
import Img2 from "../img/2.jpg"
import Img3 from "../img/3.jpg"
import Img4 from "../img/4.jpg"
import Img5 from "../img/5.jpg"

function Novel() {
  return (
    <>
        <div className="container mx-auto mt-20">
            <h1 className='font-bold uppercase text-[20px] mb-8 sm:text-[30px]'>novelties</h1>
            <div className="block md:flex items-center justify-between">
                <div className="hidden sm:block">
                    <img src={Img1} width={600} alt="" />
                    <h1 className='uppercase font-bold text-[20px] sm:text-[30px]'>bondt - round</h1>
                    <p>Design by Merit Frank Nana Groner 2010</p>
                </div>
                <div className="block">
                    <div className="flex items-center justify-between gap-8">
                        <div className="block">
                            <img src={Img2} width={300} height={300} alt="" />
                            <h1 className='uppercase font-bold text-[20px] sm:text-[30px]'>1.3 Chair</h1>
                            <p>Design by Kihun Kim 2012 </p>
                        </div>
                        <div className="block">
                            <img src={Img3} width={300} height={300} alt="" />
                            <h1 className='uppercase font-bold text-[20px] sm:text-[30px]'>Kuyu desk</h1>
                            <p>Design by Formestelle 2017 </p>
                        </div>
                    </div>
                    <div className="flex items-center justify-between gap-8 mt-8">
                        <div className="block">
                            <img src={Img4} width={300} height={300} alt="" />
                            <h1 className='uppercase font-bold text-[20px] sm:text-[30px]'>Neat noon</h1>
                            <p>Design by El schroid 2012 </p>
                        </div>
                        <div className="block">
                            <img src={Img5} width={300} height={300} alt="" />
                            <h1 className='uppercase font-bold text-[20px] sm:text-[30px]'>Denis Mahn</h1>
                            <p>Designer</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Novel