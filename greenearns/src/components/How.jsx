

const How = () => {
  return (
    <div className="bg-white">
      <div className="container mx-auto px-8 sm:px-[80px] py-[100px]">
        <h2 className="text-[#427142] text-3xl md:text-3xl sm:text-2xl sm:text-justify pb-[48px] font-bold leading-10">
          Welcome to GreenEarns, <br /> where environmental consciousness meets blockchain
          <br></br>innovation
        </h2>

        <div className="bg-white sm:grid sm:grid-cols-3 sm:space-x-0 gap-4 mt-10">
          <div>
            <div className="w-80 h-px border border-black"></div>
            <div className="w-full h-1/2">
              <h3 className="text-[#0F160F] text-xl md:text-xl sm:text-base font-bold leading-loose ">
                Tangible Rewards
              </h3>
              <p className="text-[#0F160F] text-sm font-normal pb-2 text-justify">
                Recycling is now more rewarding
                <br />than ever. Earn tokens for every
                <br />eco-conscious action you take
              </p>
            </div>

          </div>



          <div >
            <div className="w-80 h-px border border-black"></div>
            <div className="w-full h-1/2 p-1">
              <h3 className="text-[#0F160F] text-xl md:text-xl sm:text-base font-bold leading-loose">
                Be a Part of the Future
              </h3>
              <p className="text-[#0F160F] text-sm font-normal text-justify">
                Greenearns harnesses the potential
                <br />of blockchain and technology for a better
                world.
              </p>
            </div>
          </div>

          <div>
            <div className="w-80 h-px border border-black"></div>
            <div className="w-full h-1/2 p-1">
              <h3 className="text-[#0F160F] text-xl md:text-xl sm:text-base font-bold leading-loose">
                Simple and Engaging
              </h3>
              <p className="text-[#0F160F] text-sm font-normal pb-4 text-justify">
                Greenearns makes sustainability
                <br />accessible and engaging. Embrace
                <br /> the future of sustainability

              </p>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};

export default How;
