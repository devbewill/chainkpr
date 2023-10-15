export default function Hero() {
  return (
    <section className="hero pb-10 md:min-h-[95vh]">
      <div className="bg-white">
        <div className="relative px-6 pt-14 lg:px-8">
          <div className="shape absolute h-72 top-52 right-[8vw] rounded-3xl bg-purple-100  w-96 md:h-96"></div>

          <img
            alt="hero-block"
            src="hero-block.png"
            className="hidden lg:block absolute w-[35vw] h-[35vw] top-36 right-16 object-contain"
          />

          <div className="relative pt-20 lg:mt-10">
            <div className="max-w-7xl z-1 mx-auto mt-5 lg:mt-20">
              <h2 className="text-sm font-semibold leading-7 text-primary uppercase"></h2>
              <h1 className="text-4xl tracking-tight text-gray-900  lg:text-[6rem] lg:leading-none ">
                Your standard, your blockchain
              </h1>
              <p className="mt-5 lg:text-3xl leading-6 max-w-4xl text-gray-600">
                Establish a standard among your stakeholders, orchestrate
                processes, and ensure compliance, all in one place.
              </p>
              <div className="flex-col mt-16 flex items-center  gap-6 lg:flex-row">
                <a
                  href="#start-trial"
                  className="text-center rounded-full w-full lg:w-fit bg-black px-6 py-3 text-lg font-semibold text-white hover:bg-primary  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary transition"
                >
                  Try now for free
                </a>
                <a
                  href="#book-a-demo"
                  className="text-lg font-semibold leading-6  hover:text-primary transition"
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
