export default function Context() {
  return (
    <section className="context ">
      <div className="my-20 mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mt-8 grid items-center grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
          <div className="space-y-4 text-xl">
            <h2 className="text-sm font-semibold text-primary uppercase">
              We get you
            </h2>
            <h2 className="mt-2 text-2xl md:text-4xl md:mb-8">
              Unifying diverse data flows and ensuring trust among stakeholders
              is not a piece of cake
            </h2>

            <p>
              In today's fast-paced and data-driven world, businesses need more
              than off-the-shelf solutions. They need a system that reflects
              their unique workflow, structure and responsibility management. A
              one-size-fits-all approach to business orchestration is no longer
              sufficient.
            </p>

            <p>
              That's why we empower you to create your own blockchain standard,
              making your processes management among different stakeholders
              easy, flexible and secure.
            </p>
          </div>

          <div className="relative bg-secondary h-64 overflow-hidden  sm:h-80 lg:h-full">
            <img
              alt="standard"
              src="standard.png"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
