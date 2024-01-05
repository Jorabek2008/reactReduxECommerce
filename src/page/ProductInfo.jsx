import React, { useContext, useEffect, useReducer } from "react";
import { Link, useParams } from "react-router-dom";
import Footer from "./../components/Footer";
import Navbar from "./../components/Navbar";
import { toast } from "react-toastify";
import { data } from "../dates";
import { useDispatch, useSelector } from "react-redux";
import Marquee from "react-fast-marquee";
import Skeleton from "react-loading-skeleton";
import useNetwork from './../UseNetwork';
import { addToCart } from "../redux/action/prodAction";

function ProductInfo() {
  const { id } = useParams();

  const dispatch = useDispatch();

  const { cart } = useSelector(
    (state) => state.productReducer
  );
  

  const handleAddToCart = (prodItem) =>{
    dispatch(addToCart(prodItem))
  }


  const { online, since } = useNetwork()

    !online && toast.error('Internet is not connect')

  return (
    <>
      <Navbar />
      <div>
      {online ? (
        <>
          {data.map(item => (
            <div key={item.id}>
              {item.id == id ? (
                <div className='flex items-center gap-8 container mx-auto justify-around mt-10'>
                  <img src={item.url} alt={item.name} width={400} height={240} />
                  <div>
                    <h1 className='text-[40px] w-[500px]'>{item.name}</h1>
                    <h1 className='text-[16px] w-[500px] mt-4'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Optio eos suscipit sapiente assumenda.</h1>
                    <div className="flex items-center gap-4">
                      <h1 className='text-[25px] text-[red] mt-4'>${item.price}</h1>
                      <h1 className='text-[20px] mt-4 line-through text-[#999]'>${item.regPrice}</h1>
                    </div>
                    <div className="flex gap-4 mt-4">
                      <button onClick={() => handleAddToCart(item)} className='py-[10px] px-[20px] bg-black rounded-[8px] text-white'>Add to Cart</button>
                      <Link to="/cart">
                        <button className='py-[10px] px-[20px]'>Go to Cart</button>
                      </Link>
                    </div>
                  </div>
                </div>
              ) : (
                <></>
              )}
            </div>
          ))}

          <div className="container mx-auto my-20">
        <Marquee pauseOnHover={true} pauseOnClick={true}>
          <div>
            <div className="flex">
              {data.map((item) => (
                <Link to={`/product/${item.id}`} key={item.id}>
                  <div className="mx-4 text-center" key={item.id}>
                    <img
                      src={item.url}
                      alt={item.name}
                      width={300}
                      height={240}
                      className="p-3"
                    />
                    <div>
                      <h5 className="text-[20px] font-mono">{item.name}</h5>
                      <h5>${item.price}</h5>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </Marquee>
      </div>
        </>
      ) : (
        <>
          <div>
            <div className="flex container mx-auto items-center justify-around gap-8 flex-wrap mt-8">
              {[1, 2].map((item) => (
                <div key={item} className='mt-8' >
                  <Skeleton height={300} width={500} />
                </div>
              ))}
            </div>
            <Marquee pauseOnHover={true} pauseOnClick={true}>
              <div className="flex container mx-auto items-center justify-around gap-8 flex-wrap mt-8">
                {[1, 2, 3].map((item) => (
                  <div key={item} className='mt-8' >
                    <Skeleton height={200} width={400} />
                  </div>
                ))}
              </div>
            </Marquee>
          </div>
        </>
      )}
      </div>

      <Footer />
    </>
  );
}

export default ProductInfo;
