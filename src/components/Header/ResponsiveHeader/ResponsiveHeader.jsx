import React, {useState, useEffect} from 'react'
import { NavLink } from 'react-router-dom'
import { NavbarLinks } from '../Header'


const ResponsiveHeader = ({showMenu}) => {
  return (
    <div className={`${showMenu ? "left-0" : "-left-[100%]"}
    fixed shadow-slate-800 bottom-0 top-0 z-20  h-[90%]  w-[75%] bg-white shadow-inner px-8 pb-6 pt-2 text-green-950
    transition-all duration-200 md:hidden rounded-r-xl }`}>
      <ul className='flex pt-8 flex-col gap-4' >
      <p className="cursor-pointer text-4xl lg:text-5xl font-bold">
          <NavLink to="/stories" className="active">TETEKESSA</NavLink>
        </p>
        {
        NavbarLinks.map(({name, link, img}) => (
            <li key={link} className='text-4xl flex pt-2 hover:bg-gray-200 transition-all rounded-full p-4 justify-start duration-200 cursor-pointer gap-4'>
                <ion-icon name={img}></ion-icon>
                <NavLink to={link} className="active">{name}</NavLink>
            </li>
        ) 
      ) }
      </ul>

    </div>
  )
}

export default ResponsiveHeader
