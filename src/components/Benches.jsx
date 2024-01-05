import React from 'react'
import Benches1 from "../img/benches1.jpg"
import Benches2 from "../img/benches2.jpg"
import Benches3 from "../img/benches3.jpg"


function Benches() {
  return (
    <>
        <div className="container mx-auto block md:flex flex-wrap justify-between items-center mt-8">
            <div className="block">
                <div className="flex gap-8 justify-center">
                    <div className="block w-[200px] md:w-[170px]">
                        <h1 className='text-[30px] font-bold uppercase'>chairs & <br /> benches</h1>
                        <p className='mt-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
                    </div>
                    <img src={Benches1} alt="" />
                </div>
                <div className="flex gap-8 justify-center">
                    <img src={Benches2} alt="" />
                    <div className="block w-[200px] md:w-[170px]">
                        <h1 className='text-[30px] font-bold uppercase'>ad mire</h1>
                        <p className='mt-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Qui, libero.</p>
                    </div>
                </div>
            </div>
            <img src={Benches3} width={600} className='hidden sm:block md:w-[350px] lg:w-[500px] mt-8' alt="" />
        </div>
    </>
  )
}

export default Benches