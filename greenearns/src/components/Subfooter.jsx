
import Subscriber from "./Subscribe";


const Subfooter = () => {
  return (
    <div className="bg-[#2A382A]">
      <div className="container mx-auto sm:px-[80px] pb-[100px]">
     <div className='mx-4'>
      <h2 className="text-white text-xl sm:text-3xl font-bold leading-10 mt-4 font-mono">
        Subscribe to our mailing list
      </h2>
      <p className="text-justify pt-[10px] text-white text-xs sm:text-sm font-normal leading-5 sm:leading-7 font-mono">
      Join us in making a meaningful impact through responsible
        <br /> choices and shared commitment to a greener future.{" "}

      </p>

      <Subscriber />
      </div>
      </div>
    </div>
    


  )
}

export default Subfooter;   