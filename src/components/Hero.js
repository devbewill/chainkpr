export default function Hero() {
  return (
    <section className="hero pb-10 md:min-h-[95vh]">
      <div className="bg-white">
        <div className="relative isolate px-6 pt-14 lg:px-8">
          <div
            className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
            aria-hidden="true"
          >
            <div
              className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#a888f4] to-[#50ffd6] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
              style={{
                clipPath:
                  "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
              }}
            />
          </div>
          <div className="pt-20">
            <div className="max-w-7xl mx-auto mt-5 lg:mt-20 text-center">
              {/* <a
                href="/article/usecase-dpp"
                className="inline-flex justify-between items-center py-1 px-1 pr-4 mb-7 text-xs text-gray-700 bg-white shadow-lg rounded-full  hover:bg-gray-200"
                role="alert"
              >
                <span class=" bg-primary rounded-full text-white px-3 py-1 mr-2">
                  New
                </span>
                <span class="font-medium">Digital Product Passport?</span>
                <svg
                  class="ml-2 w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </a> */}
              <h1 className="text-4xl font-extrabold tracking-tight text-gray-900  lg:text-[5rem] lg:leading-none ">
                Unlock real-time process control with blockchain
                {/* Empower your data and processes with blockchain */}
              </h1>
              <p className="mx-auto mt-5 lg:text-2xl leading-6 max-w-3xl text-gray-500">
                Datome brings transparency, traceability and regulatory
                compliance to your enterprise operations. <br></br>All without
                requiring a background in blockchain technology
                {/* Safeguard Your Business against errors, manipulations and costly
                anomalies. */}
              </p>
              <div className="mt-16 flex items-center justify-center gap-x-6">
                <a
                  href="#start-trial"
                  className="rounded-md bg-black px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-primary  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary transition"
                >
                  Try now for free
                </a>
                <a
                  href="#book-a-demo"
                  className="text-sm font-semibold leading-6  hover:text-primary transition"
                >
                  <span aria-hidden="true">Book a demo →</span>
                </a>
              </div>
            </div>
          </div>
          <div
            className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
            aria-hidden="true"
          >
            <div
              className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#50bcff] to-[#ff6ada] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
              style={{
                clipPath:
                  "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
