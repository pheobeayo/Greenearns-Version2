import recycle from "../assets/recycle.svg"


const Recycle = () => {




    return (
        <div className="bg-white">
            <div className="container mx-auto px-8 sm:px-[80px] py-[100px]">
                <h2 className="text-[#427142] text-3xl font-bold leading-10">
                    Recyclable materials for sale (Prices are in Unit of Measure)
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">

                    <div className="content-card mb-5  hover:skew-x-12  
              duration-150 ease-in-out">
                        <img
                            src={recycle}
                            alt="recycle"
                            className="object-cover h-48 w-full rounded-t-lg"
                        />
                        <div className="bg-white rounded-b-lg p-4 shadow-md">
                            <h3 className="font-bold text-[#0F160F] text-sm mb-2">
                                Plastic Bottles Collection
                            </h3>
                            <p className="font-normal text-justify text-[#331000] text-xs mb-4">

                            </p>
                            <div className="flex justify-between items-center">
                                <div>
                                    <h1 className="text-[#0F160F] text-xs">
                                        Seller Location:
                                    </h1>
                                    <h1 className="text-[#0F160F] text-xs"></h1>
                                </div>
                                
                            </div>
                            <div className="block mt-4">
                                <button className="bg-[#ffffff] hover:bg-[#427142] text-[#427142] font-bold py-2 px-4 border border-[#427142] rounded w-full"

                                >
                                    View details
                                </button>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Recycle;


