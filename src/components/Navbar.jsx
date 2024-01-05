import React, {useContext, useEffect, useReducer, useState} from 'react'
import { RxHamburgerMenu } from "react-icons/rx";
import { IoMdClose } from "react-icons/io";
import Logo from "../img/FurtinetLogo.png"
import { Link } from 'react-router-dom';
import { AiOutlineShoppingCart } from "react-icons/ai";
import "../firebase/config"
import {getAuth, onAuthStateChanged, signOut} from "firebase/auth"
import { toast } from 'react-toastify';
import { useDispatch, useSelector } from 'react-redux';
import { loadingTrue } from '../redux/action/prodAction';

export const navLinks = [
  { href: "/", label: "Home", id:1 },
  { href: "/products", label: "Products", id:2 },
  { href: "/about", label: "About Us", id:3 },
  { href: "/contact", label: "Contact Us", id:4 },
];


function Navbar() {
  
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const {cart, loading} = useSelector(state => state.productReducer)

  const dispatch = useDispatch()

  const [isLogged, setIsLogged] = useState(false)
  
  let auth = getAuth()
  useEffect(() => {
    let findUser = onAuthStateChanged(auth, (user) => {
      if(user){
        setIsLogged(true)
        dispatch(loadingTrue(true))
      }else{
        setIsLogged(false)
        dispatch(loadingTrue(false))
      }
    })
      return findUser
    }, [auth])

    const logOutHandler = () => {
      signOut(getAuth())
      .then(() => {
        toast.success("User is logout successfull")
      })
      .catch((e) => toast.error(e.error))
    }


  return (
    <>
      <header className="sm:px-8 px-4 py-2 z-10 w-full">
        <nav className="flex justify-between items-center max-container">
          <Link to="/"> 
            <img src={Logo} width={100} height={100} />
          </Link>
          <ul className="flex-1 flex justify-center items-center gap-16 max-lg:hidden">
            {navLinks.map((item) => (
              <li key={item.label}>
                <Link
                  to={item.href}
                  className="font-montserrat leading-normal text-lg text-slate-gray"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
          <div className="flex items-center gap-4 text-lg leading-normal font-medium font-montserrat wide:mr-24 max-lg:ml-[-200px]">
            <Link to="/cart">
              <div className="flex items-center cursor-pointer">
                <div className="block w-[20px] h-[20px] bg-[#38CB89] rounded-[50%] text-white">
                  <p className='mt-[50%] ml-[50%] translate-x-[-50%] translate-y-[-50%]'>
                    {cart.length}
                  </p>
                </div>
                <AiOutlineShoppingCart className='cursor-pointer' size={23} />
              </div>
            </Link>
            {isLogged ? (
              <Link to="/" onClick={logOutHandler}>
                Log out
              </Link>
            ) : (
              <Link to="/login">
                Log in
              </Link>
            )}
          </div>
          <div
            className="hidden max-lg:block cursor-pointer"
            onClick={() => {
              setIsMenuOpen(!isMenuOpen);
            }}
          >
            <RxHamburgerMenu className="text-4xl" />
          </div>
        </nav>
      </header>
      {isMenuOpen && (
        <div>
          <nav className="fixed top-0 right-0 left-0 bottom-0 lg:bottom-auto bg-slate-100  ">
            <div
              className="hidden max-lg:block fixed right-0  px-8 py-4 cursor-pointer"
              onClick={() => {
                setIsMenuOpen(!isMenuOpen);
              }}
            >
              <IoMdClose className="text-4xl" />
            </div>
            <ul className="lg:hidden flex flex-col items-center justify-center h-full ">
              {navLinks.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="font-montserrat leading-normal text-lg text-slate-gray"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      )}
    </>
  )
}

export default Navbar