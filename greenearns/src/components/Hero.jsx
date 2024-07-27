import heroimage1 from "../assets/heroimage1.svg";
import heroimage2 from "../assets/heroimage2.svg";
import ornament from "../assets/ornament.svg"
import { Link } from "react-router-dom";


const Hero = () => {


    return (
        <div className="w-100 md:w-[100%] bg-white">
             <div className='w-100 md:w-[100%] lg:p-16 p-4  grid lg:grid-cols-2 h-[100vh] lg:gap-0 gap-4'>
                                        <div className="flex flex-col gap-4">
                                                <h1 className='text-[30px] md:text-[34px] font-bold capitalize  text-[#0F160F]' >Empower climate change and sustainable carbon reduction through recycling.</h1>
                                                <h3 className='text-[18px] md:text-[16px] text-[#0F160F]  '>Trade recyclables on the blockchain, earn rewards, and power the 
                                                    <br/>green revolution with every sale and purchase</h3>
                                                <div className="flex item-centre gap-8 ">
                                                        <Link to='/sell-product' style={{ textDecoration: 'none', color: 'white' }}>  <button className="bg-[#427142] hover:bg-[#DBE1D4] text-white font-bold py-2 px-4  rounded">
                                                                Sell Product    </button></Link>
                                                        <Link to='/market-place' style={{ textDecoration: 'none', color: '#427142' }}>  <button className="bg-white hover:bg-[#427142] text-[#427142] font-bold py-2 px-4 border border-[#427142] rounded">
                                                                Buy Products    </button></Link>
                                                </div>

                                        </div>
                                        <div className="grid grid-cols-2 gap-0 h-max">
                                                <div className="h-[100px] w-[100px] "> <img src={ornament} alt='ornament' /></div>
                                                <div className="h-[200px] w-[200px]"><img src={heroimage2} alt="middleimage1" /></div>
                                                <div className="h-[200px] w-[200px] lg:block hidden"> <img src={heroimage1} alt="middleimage2" /></div>
                                                <div className="h-[100px] w-[100px] lg:block hidden "><img src={ornament} alt='ornament' /></div>
                                        </div>
                                </div>
        </div>
    );
};

export default Hero;
