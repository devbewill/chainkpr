export default function Context() {
  return (
    <section className="context overflow-hidden ">
      <div className="my-10 lg:my-20 mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mt-8 grid items-center grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
          <div className="space-y-4 text-base">
            <h2 className="text-sm font-semibold text-primary uppercase">
              The context
            </h2>
            <h2 className="mt-2 text-xl md:mb-8 lg:text-3xl">
              Versatility first solution
            </h2>

            <p>
              The applications of blockchain technology span a broad spectrum,
              ranging from community building to the need for certifying data on
              specific blockchains. Businesses today seek versatile solutions
              that can seamlessly adapt to a multitude of use cases.
            </p>

            <p>
              In response to this dynamic landscape, ChainKeeper offers a
              platform that transcends the boundaries of traditional
              applications. Its versatility enables businesses to navigate a
              diverse range of scenarios and empowers users to harness the
              potential of blockchain technology across a myriad of
              transformative applications.
            </p>
          </div>

          <div className="relative h-52 lg:h-full">
            <img
              alt="standard"
              src="asset.jpg"
              className="absolute max-w-xl lg:max-w-[140%] lg:-top-14 shadow-2xl rounded-3xl ring-2 ring-black"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
