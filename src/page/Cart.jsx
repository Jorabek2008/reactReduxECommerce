import React, { useContext, useReducer, useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import {LuPlus} from "react-icons/lu"
import {LuMinus} from "react-icons/lu"
import { FaTrash } from 'react-icons/fa'
import { useDispatch, useSelector } from 'react-redux'
import { decrementProductItem, incrementProductItem, removeProductItem } from '../redux/action/prodAction'

function Cart() {
    const { cart } = useSelector(
        (state) => state.productReducer
      );

    const dispatch = useDispatch()
    return (
    <div>
        <Navbar />
        <div>
            <div className="text-center mt-5">
                <h1 className='text-[40px] sm:text-[50px] pb-2'>Cart Products</h1>
                <hr className='border-2 ' />
            </div>
            <div className="w-[450px] sm:w-[640px] md:w-[768px] mx-auto border-2 boder-[#999] mt-8 rounded-[10px] p-[10px]">
                <div className="block sm:flex sm:justify-between items-center justify-center text-center">
                    <h1 className='text-[40px] font-bold'>Shopping Cart</h1>
                    <p className='text-[#615f5f] text-[18px]'>Products</p>
                </div>
                {cart.length > 0 ? (
                    <>
                        {cart.map(item => (
                        <div key={item.id} className="mt-10 text-center border-2 p-[10px]">
                            <div className="block sm:flex flex-wrap text-center mx-auto items-center sm:gap-4">
                                <img src={item.url} width={300} height={278} className='sm:w-[220px] mx-auto' alt={item.name} />
                                <div>
                                    <p className='text-[#999] mt-4 sm:mt-0'>Furniture</p>
                                    <h1 className='text-[25px] mt-2 w-[150px] sm:w-[180px] sm:text-[18px] mx-auto'>{item.name}</h1>
                                </div>
                                <div className="flex sm:block md:flex mx-auto justify-center items-center gap-4 mt-4 sm:mt-0">
                                    <button className='text-[blue] p-[5px] sm:p-[0] md:p-[5px] rounded-[8px] border-2 btnDisabled' disabled={item.count == 1 ? true : false}>
                                        <LuMinus size={25} onClick={() => dispatch(decrementProductItem(item.id))} />
                                    </button>
                                    <p className='text-[20px]'>{item.count}</p>
                                    <button className='text-[blue] sm:p-[0] md:p-[5px] p-[5px] rounded-[8px] border-2'>
                                        <LuPlus size={25} onClick={() => dispatch(incrementProductItem(item.id))} />
                                    </button>
                                </div>
                                <h1 className=' mt-4 sm:mt-0'>$  {(
                                      Number(item.count) * item.price
                                    ).toFixed(2)}</h1>
                                <h1><FaTrash onClick={() => dispatch(removeProductItem(item.id))} className='cursor-pointer mt-4 sm:mt-0 mx-auto text-[18px] md:text-[25px]'/></h1>
                            </div>
                        </div>
                    ))}
                    </>
                ) : (
                    <>
                        <h1 className='text-center text-[40px]'>Empty Products</h1>
                    </>
                )}

            </div>
        </div>
        <Footer />
    </div>
  )
}

export default Cart