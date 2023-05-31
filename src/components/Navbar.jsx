import React from 'react';
import { useState } from 'react';
import {niota_logo, close, menu }from '../assets'
import { navLinks } from '../constants';



const Navbar = () => {
  
  const [toggle, setToggle] = useState(false);


  return (
    <nav className='w-fill flex py-6 justify-between items-center navbar'>
      <div className='flex-1 flex'>
        <img src= {niota_logo} alt='NIOTA' className='w-[32px] h-[32px] ml-10'/>
        <a href='#' className='cursor-pointer text-[20px] text-white ml-3 sm:flex ml-5px'>Niota</a>
      </div>
      

      <ul className='list-none sm:flex hidden justify-end items-center flex-1'>
        {navLinks.map((nav, index) => (
          <li key={nav.id} className={`font-poppins font-normal cursor-pointer text-[16px] text-white mr-10`}>
            <a href={`#${nav.id}`}>{nav.title}</a>
          </li>
        ))}
      </ul>
      <div className='sm:hidden flex flex-1 justify-end items-center mr-8'>
          <img src={toggle ? close : menu} alt="menu" className='w-[32px] h-[32px] object-contain'
            onClick={() => setToggle((prev)=> !prev)}
          />

          <div className={`${toggle ? 'flex' : 'hidden'} p-6 bg-black-gradient absolute top-20 right-0 mx-4 ml-24 my-2 min-w-[140px] rounded-x1 sidebar`}>
          <ul className='list-none justify-end items-center flex-1'>
        {navLinks.map((nav, index) => (
          <li key={nav.id} className={`font-poppins font-normal cursor-pointer text-[16px] text-white mb-3`}>
            <a href={`#${nav.id}`}>{nav.title}</a>
          </li>
        ))}
      </ul>

          </div>
      </div>
    </nav>
  )
}

export default Navbar
