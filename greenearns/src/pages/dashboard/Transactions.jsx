import React, { useCallback, useState, useEffect } from "react";
import { readOnlyProvider, wssProvider } from "../constants/providers";
import { getGreenEarnContract } from "../constants/contract";
import { ethers } from "ethers";
import { useWeb3ModalAccount } from "@web3modal/ethers/react";
import bgIcon from '../../assets/transaction.png'
import { useNavigate } from 'react-router-dom'
import useGetSeller from '../../Hooks/useGetSeller'
// import { useWeb3ModalAccount } from "@web3modal/ethers/react";
// import useGetPurchase from '../../Hooks/useGetPurchase';

const Transactions = () => {
  const navigate = useNavigate();
  const allSeller = useGetSeller();
  // const { address } = useWeb3ModalAccount();

  const [purchase, setPurchase] = useState()

    const fetchPurchase = async () => {
        try {
            const contract = getGreenEarnContract(readOnlyProvider)

            contract.on("ProductBought", (user, id, amount) => {
                console.log ("Whatever", user, id, amount)
            })
        } catch(err) {

        }
    }

  const userSeller = allSeller.find((data) => data?.address === address);

  return (
    <main>
       <section className='flex flex-col lg:flex-row md:flex-row bg-[#427142] rounded-[20px] w-[100%] text-white'>
        <div className='lg:w-[60%] md:w-[60%] w-[100%] p-8'>
            <h2 className='lg:text-[24px] md:text-[24px] text-[18px] font-bold mb-4'>GreeenEarns - Where environmental consciousness meets blockchain innovation</h2>
            <p>View all your eco-friendly product purchases in one place. Track your contributions to a greener planet with each sustainable product you buy.</p>
            <div className='mt-6'>
            <button onClick={() => navigate('/dashboard/marketplace')}  className="bg-white text-[#427142] py-2 px-4 rounded-lg lg:text-[20px] md:text-[20px] font-bold text-[16px] lg:w-[50%] md:w-[50%] w-[100%] my-2 hover:bg-green-300 hover:font-bold">Buy Product</button>
            </div>
        </div>
        <div className='lg:w-[40%] md:w-[40%] w-[100%] bg-[#DBECDB] lg:rounded-tl-[50%] md:rounded-tl-[50%] lg:rounded-bl-[50%] rounded-tl-[50%] rounded-tr-[50%] text-right lg:rounded-tr-[20px] rounded-bl-[20px] rounded-br-[20px] p-6 flex justify-center'>
            <img src={bgIcon} alt="dashboard" className='w-[70%] mx-auto'/>
        </div>
    </section>
    <section>
    <h2 className="font-titiliumweb text-[20px] text-[#0F160F] lg:text-[24px] md:text-[24px] font-[700] mt-4">
        Purchased Products
      </h2>
    <div className="flex mb-6 text-[#0F160F] items-center">
        <img
          src='https://img.freepik.com/free-psd/abstract-background-design_1297-86.jpg?t=st=1719630441~exp=1719634041~hmac=3d0adf83dadebd27f07e32abf8e0a5ed6929d940ed55342903cfc95e172f29b5&w=2000'
          alt=""
          className='w-[40px] h-[40px] rounded-full'
        />
        {userSeller ? (
          <p className='ml-4 font-bold'>{userSeller.name}</p>
        ) : (
          <p>Unregistered.</p>
        )}
      </div>
    </section>
    </main>
  )
}

export default Transactions