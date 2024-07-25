import heroimage1 from "../assets/heroimage1.svg";
import heroimage2 from "../assets/heroimage2.svg";
import ornament from "../assets/ornament.svg"
import { Link } from "react-router-dom";


const Hero = () => {


    return (
        <div className="w-100 md:w-[100%] bg-white">
            <div className="flex flex-col items-center gap-4 mt-28">

                <h1 className="text-[40px] md:text-[40px] sm:[20px] font-serif font-extrabold capitalize text-center  text-[#091913] mt-8">
                    Empower climate change and sustainable
                    <br />
                    carbon reduction through recycling.
                </h1>
                <h3 className="text-[20px] md:text-[18px] sm:[12px] font-serif text-center font-semibold text-[#091913]">
                    Trade recyclables on the blockchain, earn rewards, and power the green
                    <br />
                    revolution with every sale and purchase
                </h3>
                <div className="flex items-center gap-8">
                    <Link
                        to='/sell-products'
                        style={{ textDecoration: "none", color: "white" }}
                    >
                        <button className="bg-[#427142] hover:bg-[#2B452B] text-white font-bold py-2 px-4  rounded">
                            Sell Products
                        </button>
                    </Link>
                    <Link
                        to="/buy-products"
                        style={{ textDecoration: "none", color: "#427142" }}
                    >
                        {" "}
                        <button className="bg-[#ffffff] hover:bg-[#2B452B] text-[#427142] font-bold py-2 px-4 border border-[#427142] rounded">
                            Buy Products{" "}
                        </button>
                    </Link>
                </div>
            </div>

            <div className="flex gap-16  md:flex md:flex-row sm:flex flex-col">
                <div className="mt-64 mx-16">
                <img src={ornament} alt="ornament" />
                </div>
                <div className="mt-44">
                    <img src={heroimage2} alt="heroimage1" />
                </div>
                <div className="mt-20">
                    <img src={heroimage1} alt="heroimage2" />
                </div>
                <div className="mt-64 mx-8">
                <img src={ornament} alt="ornament" />
                </div>
            </div>
        </div>
    );
};

export default Hero;
