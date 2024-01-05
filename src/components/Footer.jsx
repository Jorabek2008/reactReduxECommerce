import React from 'react'
import Logo from "../img/FurtinetLogo.png"
import { navLinks } from './Navbar'
import { Link } from 'react-router-dom'
import { FaInstagram } from "react-icons/fa";
import { FiYoutube } from "react-icons/fi";
import { SlSocialFacebook } from "react-icons/sl";



function Footer() {
  return (
    <div className='bg-black w-full mt-20 py-10'>
        <div className="container mx-auto">
            <div className="flex items-center justify-between">
                <img src={Logo} width={100} height={100} />
                <div className="flex items-center">
                {navLinks.map((item) => (
                    <li key={item.label}>
                            <Link
                            to={item.href}
                            className="font-montserrat leading-normal text-lg text-white"
                            >
                            {item.label}
                        </Link>
                    </li>
                ))}
                </div>
            </div>
            <div className="block sm:flex sm:justify-between items-center justify-center mt-10">
                <p className='text-white'>Copyright © 2023 Icons. All rights reserved    Privacy Policy     Terms of Use</p>
                <div className="flex items-center justify-center mt-6 text-white gap-4">
                    <Link to="https://www.instagram.com/" target='_blank'>
                        <FaInstagram className='cursor-pointer' />
                    </Link>
                    <Link to="https://www.youtube.com/" target='_blank'>
                        <FiYoutube className='cursor-pointer' />
                    </Link>
                    <Link to="https://www.facebook.com/" target='_blank'>
                        <SlSocialFacebook className='cursor-pointer' /> 
                    </Link>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer