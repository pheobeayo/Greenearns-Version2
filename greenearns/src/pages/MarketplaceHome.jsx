import UseGetAllProduct from '../Hooks/UseGetAllProduct'
import { formatUnits } from 'ethers';
import { Link } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import LoadingSpinner from '../components/Loader/LoadingSpinner';

const MarketplaceHome = () => {
    const allProduct = UseGetAllProduct();
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        if (allProduct.length > 0) {
          setIsLoading(false);
        }
      }, [allProduct]);

      const convertToWholeNumber = (formattedNumber) => {
        const number = parseFloat(formattedNumber);
        return Math.floor(number);
      };

  return (
        <div className='flex lg:flex-row md:flex-row flex-col justify-between items-center p-12'>
       {isLoading ? (
          <div className='text-black'><LoadingSpinner /> Loading...</div>
        ) : ( allProduct.map((info) => ( <div className='lg:w-[32%] md:w-[32%] w-[100%] p-4 border border-[#0F160F]/20 rounded-lg mb-4 shadow-lg' key={info.id}>
       <Link to={`/marketplace/${info.id}`} className='text-[#0F160F]'>
            <img src={info.image} alt="" className='w-[100%] h-[237px] object-cover object-center rounded-lg'/>
            <h3 className='font-bold mt-4 lg:text-[20px] md:text-[20px] text-[18px] capitalise font-titiliumweb'>{info.name}</h3>
            <p className='flex justify-between my-4'>Quantity <span>{Number(info.weight)}</span></p>
            <p className='flex justify-between my-4'>Seller's location <span>{info.location}</span></p>
            <p className='flex justify-between my-4 font-bold'>Price <span>{convertToWholeNumber(formatUnits(info.price))}MTR</span> </p>
            <button className='my-4 border w-[100%] py-2 px-4 border-[#427142] bg-white text-[#427142] rounded-lg'>View  details</button>
            </Link>
        </div>)))}
    </div>
  )
}

export default MarketplaceHome