import React, { useState } from 'react'
import './HomePage.css'
import CarouselHomeSlider from '../../component/carousel/CarouselHomeSlider'
import HomeItem from './HomeItem'

//  import {IoCart, IoHome, IoRemove,} from "react-icons/io5";

export default function HomePage() {
 
  return (
    <>
     <div className='w-full'> <CarouselHomeSlider/></div>
      <main className='max-w-6xl mx-auto Manrope mt-3'>
        <h1 className='text-center font-bold text-3xl'>List of Product</h1>
        <div className='mt-5'>
          <HomeItem/>
        </div>
        
      </main>
    </>
  )
}

// react plugin antd design library end video
