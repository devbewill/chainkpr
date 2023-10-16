export default function Context() {
  return (
    <section className="context ">
      <div className="my-20 mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mt-8 grid items-center grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
          <div className="space-y-4 text-base">
            <h2 className="text-sm font-semibold text-primary uppercase">
              We get you
            </h2>
            <h2 className="mt-2 text-xl md:mb-8 lg:text-3xl">
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

          <div className="relative h-72 lg:h-full">
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
