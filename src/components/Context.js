export default function Context() {
  return (
    <section className="context">
      <div className="overflow-hidden py-14 sm:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
            <div className="lg:pr-8 lg:pt-4">
              <div className="lg:max-w-lg">
                <h2 className="text-sm font-semibold leading-7 text-primary uppercase">
                  We get you
                </h2>
                <p className="text-2xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                  Unifying diverse data flows and ensuring trust among
                  stakeholders is not a piece of cake
                </p>
                <p className="mt-2 text-gray-600">
                  In today's fast-paced and data-driven world, businesses need
                  more than off-the-shelf solutions. They need a system that
                  reflects their unique workflow, structure and responsibility
                  management. A one-size-fits-all approach to business
                  orchestration is no longer sufficient. <br></br>That's why we
                  empower you to create your own blockchain standard, making
                  your processes management among different stakeholders easy,
                  flexible and secure.
                </p>
              </div>
            </div>
            <img
              src="./reliability.jpg"
              alt="Product screenshot"
              className="mx-auto w-56 md:w-96 lg:mt-5 border-4 border-black rounded-xl shadow-xl ring-1 ring-gray-400/10"
              width={1280}
              height={832}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
