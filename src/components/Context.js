export default function Context() {
  return (
    <section className="context">
      <div className="overflow-hidden py-14 sm:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
            <div className="lg:pr-8 lg:pt-4">
              <div className="lg:max-w-lg">
                <h2 className="text-sm font-semibold leading-7 text-primary uppercase">
                  The context
                </h2>
                <p className="text-2xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                  The reliability on your data is a critical issue
                </p>
                <p className="mt-2 text-gray-600">
                  The door is often left open to potential errors, manipulations
                  and procedural anomalies. A questionable reliability, or an
                  actual wrong processing, may lead to incorrect
                  decision-making, loss of margins or even third-party claims.
                  With usual methods, ensuring trust in your data and processes
                  by all stakeholders is either not possible or complex and
                  expensive.
                </p>
              </div>
            </div>
            <img
              src="./reliability.jpg"
              alt="Product screenshot"
              className="mx-auto w-56 md:w-96 lg:mt-20 border-4 border-black rounded-xl shadow-xl ring-1 ring-gray-400/10"
              width={1280}
              height={832}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
