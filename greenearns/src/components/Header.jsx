import React from 'react'
import logo from '../assets/logo.svg'
import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <header className='py-8 bg-[#2B452B]/5'>
        <div className='w-[90%] mx-auto flex justify-between'>
        <img src={logo} alt="" className='w-[235px] h-[43px]' />
        <nav>
            <NavLink to='/' className='text-[#0F160F]/90 hover:text-[#015C28] hover:font-[700] mr-6 text-[18px]'>Home</NavLink>
            <NavLink to='/marketplace' className='text-[#0F160F]/90 hover:text-[#015C28] hover:font-[700] mr-6 text-[18px]'>MarketPlace</NavLink>
            <a href='#about-us' className='text-[#0F160F]/90  hover:text-[#015C28] hover:font-[700] text-[18px]'>About Us</a>
        </nav>
        <w3m-button />
        </div>
    </header>
  )
}

export default Header