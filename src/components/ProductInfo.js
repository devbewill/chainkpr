export default function ProductInfo() {
  return (
    <section className="ProductInfo">
      <div className=" mx-auto max-w-7xl  ">
        <div className="relative isolate overflow-hidden bg-gray-900 px-6 pt-16 shadow-2xl sm:rounded-3xl lg:flex lg:gap-x-16 lg:pl-10 lg:pt-0">
          <svg
            viewBox="0 0 1024 1024"
            className="absolute left-1/2 -z-10 h-[50rem] w-[50rem] -translate-y-1/2 [mask-image:radial-gradient(closest-side,white,transparent)] sm:left-full sm:-ml-80 lg:left-1/2 lg:ml-0 lg:-translate-x-1/2 lg:translate-y-0"
            aria-hidden="true"
          >
            <circle
              cx={512}
              cy={512}
              r={512}
              fill="url(#759c1415-0410-454c-8f7c-9a820de03641)"
              fillOpacity="0.4"
            />
            <defs>
              <radialGradient id="759c1415-0410-454c-8f7c-9a820de03641">
                <stop stopColor="#7775D6" />
                <stop offset={1} stopColor="#7775D6" />
              </radialGradient>
            </defs>
          </svg>
          <div className="mx-auto max-w-lg text-center lg:mx-0 lg:flex-auto lg:py-32 lg:text-left">
            <h2 className="text-3xl font-bold tracking-tight text-white md:text-5xl">
              Leave the tech to us
            </h2>
            <p className="mt-6 text-gray-100">
              We understand that your expertise lies in your business, not
              managing complex technology. That's where we come in. With Datome,
              you have the power to construct your own ecosystem with ease.
              Whether it's managing processes, permissions, or setting rules,
              our user-friendly editor empowers you to shape your digital world
              without the need for coding expertise.
              <span className="block pt-2 font-bold">
                You focus on your vision, we handle the technology.
              </span>
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6 lg:justify-start">
              <a
                href="#book-a-demo"
                className="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold  shadow-sm hover:bg-secondary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2  focus-visible:outline-white"
              >
                Book a demo
              </a>
            </div>
          </div>
          <div className="relative mt-16 h-100 lg:mt-8">
            <img
              className="absolute left-0 top-0 w-[50rem] max-w-none rounded-md  bg-white/5 "
              src="./asset.jpg"
              alt="App screenshot"
              width={1824}
              height={1080}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
