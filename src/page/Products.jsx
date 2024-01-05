import React, { useContext, useEffect, useMemo, useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { FaSearch } from "react-icons/fa";
import product1 from "../img/product1.jpg"
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { data } from '../dates';
import useNetwork from './../UseNetwork';
import { toast } from 'react-toastify';
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

const filterProducts = (list, keywoards) => {
  return keywoards === '' ? list : list.filter(item => item.name.toLowerCase().includes(keywoards.toLowerCase()))
}


function Products() {
  const [count, setCount] = useState(0)
  const [keywords, setKeywords] = useState('')

  const filterProd = useMemo(() => filterProducts(data, keywords), [data,keywords])

  useEffect(() => {
      const interval = setInterval(() => {
          setCount(prev => prev+1)
      },1000)

      return () => clearInterval(interval)
  }, [])

  const {online, since} = useNetwork()




  return (  
    <>
      <Navbar />
      <div className='container mx-auto mt-10'>
        <div className="flex items-center">
          <input type="text" value={keywords}  onChange={(e) => setKeywords(e.target.value)} placeholder='Search products' className='p-[10px] w-[400px] border-[2px]' />
          <FaSearch  size={30} className='ml-[10px]'/>
        </div>

        <div className="block">
        {online ? (
          <div className="flex flex-wrap justify-center sm:justify-between gap-2">
          {filterProd.map((item, i) => (
            <div key={item.id}>
              <Link to={`/product/${item.id}`} >
                <div className="block w-[270px] mt-5 text-center cursor-pointer">
                  <img src={item.url} width={270} height={187} alt={item.name} />
                  <h5 className='text-[#888] mt-[20px] mb-[20px]'>{item.name}</h5>
                  <h4 className='text-[#FF3831]'>Now: ${item.price}</h4>
                  <h4 className='text-[#999] line-through'>Regular Price: {item.regPrice}</h4>
                </div>
              </Link>
            </div>
          ))}
          </div>
        ) : (
          <HomeLoading />
        )}
        </div>
      </div>
      <Footer />
    </>
  )
}


function HomeLoading() {
    useEffect(() => {
      toast.error('Internet is not connect')
    }, [])
  return (
    <div className="flex items-center justify-center gap-10 flex-wrap mt-8">
      {[1, 2, 3, 4, 5, 6].map((item) => (
        <div key={item} className='mt-8' >
          <Skeleton height={300} width={400} />
        </div>
      ))}
    </div>
  )
}
export default Products