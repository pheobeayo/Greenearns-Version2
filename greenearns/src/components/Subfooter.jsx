import Subscriber from "./Subscribe";


const Subfooter = () => {
  return (
    <section className="bg-[#2A382A] w-[100vw]">
      <div className="mx-auto sm:px-[80px] pb-[100px]  md:mx-96">
        <div className='mx-4'>
          <h2 className="text-white text-xl sm:text-2xl font-bold leading-10 mt-4">
            Subscribe to our mailing list
          </h2>
          <p className="text-justify pt-[10px] text-white text-xs sm:text-sm font-normal leading-5 sm:leading-7">
            Join us in making a meaningful impact through responsible
            <br /> choices and shared commitment to a greener future.{" "}

          </p>

          <Subscriber />
        </div>
      </div>
    </section>



  )
}

export default Subfooter;   