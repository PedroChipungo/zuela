import React from 'react'
import './HomeCss/Home.css'
import { NavLink } from 'react-router-dom'
import HomeContents from './HomeContents/HomeContents'
import SlideDownAnimation from './SlideDownAnimation/SlideDownAnimation'

const Home = () => {
  return (
    <div className='body h-full'>
        <div className='body h-2/4 md:h-screen text-white md:p-16 '>
            <div className='w-full md:flex flex-row py-40 p-10 md:px-24 gap-28 justify-between'>
                <div className=''>
                    <p className='text-6xl'>Fale Confiante</p>
                    <p className='my-6'>Aprenda a falar a tua língua Nacional com o Zuela</p>
                    <NavLink to={'/start'}><button className='homeBtn py-4 px-12'>Testar Zuela</button></NavLink>
                    
                </div>
               <div>
                <SlideDownAnimation/>
               </div>
            </div>
        </div>
        {/* content section */}
        <div className='bg-white'>
            <HomeContents/>
        </div>
    </div>
  )
}

export default Home
