import recycle from "../assets/recycle.svg"
import UseGetAllProduct from '../Hooks/UseGetAllProduct'
import { formatUnits } from 'ethers';

const Recycle = () => {
const allProduct = UseGetAllProduct()

    return (
        <div className="bg-white">
            <div className="container mx-auto px-8 sm:px-[80px] py-[100px]">
                <h2 className="text-[#427142] text-3xl font-bold leading-10">
                    Recyclable materials for sale (Prices are in Unit of Measure)
                </h2>
                            <div className='flex lg:flex-row md:flex-row flex-col justify-between items-center py-12 flex-wrap'>
                        {allProduct.map((info) => ( <div className='lg:w-[32%] md:w-[32%] w-[100%] p-4 border text-black border-[#0F160F]/20 rounded-lg mb-4' key={info.id}>
                                <img src={info.image} alt="" className='w-[100%] h-[237px] object-cover object-center rounded-lg'/>
                                <h3 className='font-bold mt-4 lg:text-[20px] md:text-[20px] text-[18px] capitalise'>{info.name}</h3>
                                <p className='flex justify-between my-4'>Quantity <span>{Number(info.weight)}</span></p>
                                <p className='flex justify-between my-4'>Seller's location <span>{info.location}</span></p>
                                <p className='flex justify-between my-4 font-bold'>Price <span>{formatUnits(info.price)}MTR</span> </p>
                                <button className='my-4 border w-[100%] py-2 px-4 border-[#427142] bg-white text-[#427142] rounded-lg'>View  details</button>
                            </div>))}
                        </div>
            </div>
        </div>
    );
};

export default Recycle;


