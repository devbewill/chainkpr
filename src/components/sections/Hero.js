export default function Hero() {
  return (
    <section className="hero overflow-hidden pb-10 md:min-h-[95vh] ">
      <div className="">
        <div className="relative px-6 pt-14 lg:px-8">
          <img
            alt="hero-wave"
            src="wave.svg"
            className=" absolute -top-0 -right-20"
          />

          <div className="relative pt-20 lg:mt-5">
            <div className="max-w-7xl z-1 mx-auto mt-5 lg:mt-20">
              <h2 className="text-sm font-semibold leading-7 text-primary uppercase"></h2>
              <h1 className="text-4xl font-bold lg:font-semibold tracking-tight   lg:text-[7rem] lg:leading-none ">
                Your Gateway to Seamless Blockchain Integration 
              </h1>
              <p className="mt-5 lg:text-2xl leading-6 max-w-3xl text-gray-700 ">
                Choose the optimal blockchain solution effortlessly.
              </p>
              <div className="flex-col mt-16 flex items-center  gap-6 lg:flex-row">
                <a href="#start-trial" className="btn  bg-black text-white">
                  Try now for free
                </a>
                <a
                  href="#book-a-demo"
                  className="text-md font-semibold leading-6 hover:text-primary transition"
                >
                  <span aria-hidden="true">Book a demo →</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
