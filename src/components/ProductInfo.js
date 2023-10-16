export default function ProductInfo() {
  return (
    <section className="ProductInfo">
      <div className=" mx-auto">
        <div className="relative overflow-hidden bg-black px-6 py-10 lg:flex">
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
                <stop stopColor="#212068" />
                <stop offset={1} stopColor="#711a93" />
              </radialGradient>
            </defs>
          </svg>
          <div className="mx-auto max-w-5xl lg:py-16 lg:text-left">
            <h2 className="text-sm font-semibold text-primary uppercase">
              Leave the tech to us
            </h2>
            <p className="mt-6 text-xl lg:text-3xl lg:leading-10 font-black text-gray-100">
              We understand that your expertise lies in your business, not
              managing complex technology. That's where we come in. With Datome,
              you have the power to construct your own ecosystem with ease.
            </p>
            <p className="mt-6 text-lg lg:text-2xl lg:leading-10 text-gray-100">
              Whether it's managing processes, permissions, or setting rules,
              our user-friendly editor empowers you to shape your digital world
              without the need for coding expertise. You focus on your vision,
              we handle the technology.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6 lg:justify-start">
              <a
                href="#book-a-demo"
                className="rounded-full text-center w-full lg:w-fit bg-primary px-6 py-3 text-md font-semibold  hover:bg-white  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black transition"
              >
                Book a demo
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
