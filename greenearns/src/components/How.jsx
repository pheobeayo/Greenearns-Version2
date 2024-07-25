

const How = () => {
  return (
    <div className="bg-white">
      <div className="container mx-auto px-8 sm:px-[80px] py-[100px]">
        <h1 className="text-[#427142] text-3xl md:text-3xl sm:text-lg font-bold md:mx-4 md:px-12 mt-4 ">
          Welcome to GreenEarns, where environmental
          <br />consciousness meets blockchain innovation
        </h1>

        <div className="bg-white flex gap-4 md:flex md:flex-row">
          <div className="content-card w-full md:w-[32%] mb-5 h-full rounded-t-lg px-8 mt-10 md:mx-10">
            <hr className="h-px my-8 bg-black border-0 dark:bg-black" />
            <div className="w-full h-1/2">
              <h3 className="text-[#0F160F] text-xl md:text-xl sm:text-base font-bold leading-loose ">
                Tangible Rewards
              </h3>
              <p className="text-[#0F160F] text-sm font-normal pb-2 text-justify">
                Recycling is now more rewarding
                than ever. Earn tokens for every
                eco-conscious action you take
              </p>
            </div>

          </div>



          <div className="content-card w-full md:w-[32%] mb-5 h-full rounded-t-lg px-8 mt-10">
            <hr className="h-px my-8 bg-black border-0 dark:bg-black" />
            <div className="w-full h-1/2 p-1">
              <h3 className="text-[#0F160F] text-xl md:text-xl sm:text-base font-bold leading-loose">
                Be a Part of the Future
              </h3>
              <p className="text-[#0F160F] text-sm font-normal text-justify">
                Greenearns harnesses the potential
                of blockchain and technology for a better
                world.
              </p>
            </div>
          </div>

          <div className="content-card w-full md:w-[32%] mb-5 h-full rounded-t-lg px-8 mt-10 md:mx-8">
            <hr className="h-px my-8 bg-black border-0 dark:bg-black" />
            <div className="w-full h-1/2 p-1">
              <h3 className="text-[#0F160F] text-xl md:text-xl sm:text-base font-bold leading-loose">
                Simple and Engaging
              </h3>
              <p className="text-[#0F160F] text-sm font-normal pb-4 text-justify">
                Greenearns makes sustainability
                accessible and engaging. Embrace
                the future of sustainability

              </p>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};

export default How;
