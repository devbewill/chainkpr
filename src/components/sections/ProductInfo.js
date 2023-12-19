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
              Harnessing the Power of REST APIs
            </h2>
            <p className="mt-6 text-xl lg:text-3xl lg:leading-10 font-black text-gray-100">
              At the core of our seamless integration lies the simplicity and
              effectiveness of our Generic REST APIs. These APIs serve as the
              bridge between your systems and the world of blockchains.
            </p>
            <p className="mt-6 text-lg lg:text-2xl lg:leading-10 text-gray-100">
              But, what are Generic REST APIs?
            </p>
            <p className="mt-6 text-lg lg:text-2xl lg:leading-10 text-gray-100">
              Our Generic REST APIs are standardized interfaces that allow your
              applications to communicate with different blockchains in a
              uniform way. Instead of grappling with the intricacies of
              individual blockchain protocols, our APIs provide a consistent and
              simplified method of interaction.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
