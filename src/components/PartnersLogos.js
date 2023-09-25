export default function PartnersLogos() {
  return (
    <section className="partners">
      <div className="mx-auto max-w-7xl px-6  pb-20">
        <div className="mx-auto mt-10 grid max-w-lg grid-cols-5 items-end gap-x-8  lg:mx-0 lg:max-w-none lg:grid-cols-5 brightness-0	">
          <img
            className="col-span-1 max-h-9 lg:max-h-9 w-full object-contain"
            src="./partners/ibm.svg"
            alt="ibm"
            width={158}
            height={48}
          />
          <img
            className="col-span-1 max-h-9 lg:max-h-9 w-full object-contain "
            src="./partners/ey.svg"
            alt="ey"
            width={158}
            height={48}
          />
          <img
            className="col-span-1 max-h-9 lg:max-h-9 w-full object-contain"
            src="./partners/oracle.svg"
            alt="oracle"
            width={158}
            height={48}
          />
          <img
            className="col-span-1 max-h-9 lg:max-h-9 w-full object-contain"
            src="./partners/infocert.svg"
            alt="infocert"
            width={158}
            height={48}
          />
          <img
            className="col-span-1 max-h-9 lg:max-h-9 w-full object-contain"
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
