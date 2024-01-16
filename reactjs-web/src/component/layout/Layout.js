import './Layout.css'
import React from 'react'
import { Outlet, useNavigate } from 'react-router-dom';
import logo_white from '../../assets/logo/logo_white.png'
import { FaFacebook, FaInstagram, FaLinkedin, FaTelegram, FaTwitch } from "react-icons/fa";

export default function Layout() {

    const navigat = useNavigate();
    const onClickMenu = (routeName) => {
        navigat(routeName);
    }
    const dataFollow= [
        {
            name : "Facebook",
            icon : <FaFacebook className='w-10 h-10 rounded-full hover:text-gray-400 hover:duration-300'/>,
            link : "https://www.facebook.com/preycode"
        },
        {
            name : "Telegram",
            icon : <FaTelegram className='w-10 h-10 rounded-full  hover:text-gray-400 hover:duration-300'/>,
            link : "https://www.telegram.com/preycode"
        },
        {
            name : "Instagram",
            icon : <FaInstagram className='w-10 h-10 rounded  hover:text-gray-400 hover:duration-300'/>,
            link : "https://www.instagram.com/preycode"
        },
        {
            name : "Linkedin",
            icon : <FaLinkedin className='w-10 h-10  hover:text-gray-400 hover:duration-300'/>,
            link : "https://www.linkedin.com/preycode"
        },
        {
            name : "Twitch",
            icon : <FaTwitch className='w-10 h-10  hover:text-gray-400 hover:duration-300'/>,
            link : "https://www.twitch.com/preycode"
        },
    ]

  return (
    <>
    <header className='bg-blue-900 h-[52px] p-[12px] Manrope sticky top-0 z-30'>
        <div className='menuContain max-w-6xl mx-auto flex  justify-between'>
            <h1 onClick={() => onClickMenu("/")} className='txtNameBrand text-xl font-bold cursor-pointer text-white'>PREYCODE</h1>
            <ul className='flex space-x-8 p-1 font-medium cursor-pointer text-sm'>
                <li onClick={() => onClickMenu("/")} className='menu hover:text-gray-400 hover:underline text-gray-100 hover:duration-300 '>
                  Home
                </li>
                <li onClick={() => onClickMenu("/about") } className='hover:text-gray-400 hover:underline text-gray-100 hover:duration-300'>
                  About
                </li>
                <li onClick={() => onClickMenu("/customer")} className='hover:text-gray-400 hover:underline text-gray-100 hover:duration-300'>
                   Customer
                </li>
                <li onClick={() => onClickMenu("/user")} className='hover:text-gray-400 hover:underline text-gray-100 hover:duration-300'>
                    User
                </li> 
                <li onClick={() => onClickMenu("/product")} className='hover:text-gray-400 hover:underline text-gray-100 hover:duration-300'>
                    Product
                </li>
                <li onClick={() => onClickMenu("/category")} className='hover:text-gray-400 hover:underline text-gray-100 hover:duration-300'>
                    Category
                </li>
            </ul>
            <div>
                <button onClick={() => onClickMenu("/dashboard")} className='bg-blue-700 text-sm text-white px-3 py-1 rounded'>Login to Backend</button>
            </div>
        </div>
        
    </header>
    <Outlet/>
    <footer className='w-full bg-blue-900 mt-5 Manrope'>
        <section className='max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 p-8 lg:p-0 lg:py-8'>
            <div>
                <div className='h-40 w-48'>
                    <img className='w-full h-full object-cover' src={logo_white} alt="" />
                </div>
            </div>
            <div className='space-y-3'>
                <h1 className='text-white font-bold text-xl'>Contact</h1>
                <div className='flex text-gray-400 space-x-2 text-xl'>
                    <h1 className='font-bold text-gray-200 text-xl'>Email: </h1> 
                    <h1 className='text-xl'><a href=""> 1231sada@gmail.coom</a></h1>
                </div>
                <div className='flex text-gray-400 space-x-2'>
                    <h1 className='font-bold text-gray-200 text-xl'>Phone: </h1> 
                    <h1 className='text-xl'><a href=""> +855 123 123</a></h1>
                </div>
                <div className='flex text-gray-400 space-x-2 text-xl'>
                    <h1 className='font-bold text-gray-200 text-xl'>Address: </h1> 
                    <h1 className='text-xl'><a> Phnom Penh, Cambodia</a></h1>
                </div>


            </div>
            <div className='space-y-3'>
                <h1 className='text-white font-bold text-xl'>Follow Us</h1>
                <div className='flex space-x-3 text-white'>
                    {
                        dataFollow.map((item, index) => (
                            <a key={index} href={item.link} target='_blank'>
                                {item.icon}
                                <p className='text-[10px]'>{item.name}</p>
                            </a>
                        ))
                    }
                </div>
            </div>
        </section>
    </footer>
    </>
  )
}


 