import bannerImg from '../../assets/dashboard.svg'
import{ NavLink }from 'react-router-dom'

const Dashboard = () => {

  return (

    <main className="bg-white">
       <div className='flex bg-[#427142] rounded-[20px] w-[100%] text-white'>
        <div className='lg:w-[60%] md:w-[60%] w-[100%] p-8'>
            <h2 className='lg:text-[24px] md:text-[24px] text-[18px] font-bold mb-4'>GreeenEarns - Where environmental consciousness meets blockchain innovation</h2>
            <p>To get started listing your eco friendly product, create a seller's profile.</p>
            <div className='mt-6'>
            <NavLink to='createprofile' className="bg-white text-[#427142] py-2 px-4 rounded-lg lg:text-[20px] md:text-[20px] font-bold text-[16px] w-[100%] lg:w-[50%] md:w-[50%] my-2 hover:bg-green-300 hover:font-bold">Create Profile</NavLink>
            </div>
        </div>
        <div className='lg:w-[40%] md:w-[40%] w-[100%] bg-[#DBECDB] rounded-tl-[50%] rounded-bl-[50%] text-right rounded-tr-[20px] rounded-br-[20px] p-6 flex justify-center'>
            <img src={bannerImg} alt="dashboard" />
        </div>
    </div>
      </main> 
    
  );
};

export default Dashboard;