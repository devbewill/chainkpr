export default function PartnersLogos() {
  return (
    <section className="partners bg-secondary">
      <div className="mx-auto max-w-7xl px-6 pt-5 pb-14">
        <p className="text-center text-xs font-semibold uppercase">
          trusted by
        </p>
        <div className="mx-auto mt-4 grid max-w-lg grid-cols-5 items-end gap-x-8  lg:mx-0 lg:max-w-none lg:grid-cols-5 grayscale">
          <img
            className="col-span-1 max-h-9 lg:max-h-8 w-full object-contain"
            src="./partners/ibm.svg"
            alt="ibm"
            width={158}
            height={48}
          />
          <img
            className="col-span-1 max-h-9 lg:max-h-12 w-full object-contain "
            src="./partners/ey.svg"
            alt="ey"
            width={158}
            height={48}
          />
          <img
            className="col-span-1 max-h-9 lg:max-h-6 w-full object-contain"
            src="./partners/oracle.svg"
            alt="oracle"
            width={158}
            height={48}
          />
          <img
            className="col-span-1 max-h-9 lg:max-h-8 w-full object-contain"
            src="./partners/infocert.svg"
            alt="infocert"
            width={158}
            height={48}
          />
          <img
            className="col-span-1 max-h-9 lg:max-h-8 w-full object-contain"
            src="./partners/tinaba.svg"
            alt="tinaba"
            width={158}
            height={48}
          />
        </div>
      </div>
    </section>
  );
}
