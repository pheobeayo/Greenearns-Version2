import React from 'react'
import bannerImg from '../assets/ecobg.svg'
import AddProduct from './AddProduct'

const Banner = () => {
  return (
    <div className='flex bg-[#427142] rounded-[20px] w-[90%] mx-auto text-white'>
        <div className='lg:w-[60%] md:w-[60%] w-[100%] p-8'>
            <h2 className='lg:text-[24px] md:text-[24px] text-[18px] font-bold mb-4'>GreeenEarns - Where environmental consciousness meets blockchain innovation</h2>
            <p>Trade recyclables on the blockchain, earn rewards, and power the green revolution with every sale and purchase</p>
            <div className='mt-6'>
            <AddProduct />
            </div>
        </div>
        <div className='lg:w-[40%] md:w-[40%] w-[100%] bg-[#DBECDB] rounded-tl-[50%] rounded-bl-[50%] text-right rounded-tr-[20px] rounded-br-[20px] p-6 flex justify-center'>
            <img src={bannerImg} alt="" />
        </div>
    </div>
  )
}

export default Banner