import ContactForm from "./ContactForm";

export default function Contacts() {
  return (
    <section className="contacts pt-16">
      <h1 id="contacts" className="text-2xl text-center font-black lg:text-5xl">
        Are you ready to try now ?
      </h1>
      <div className="lg:flex flex-col mx-auto max-w-screen-xl pt-20 lg:py-20 md:px-6 gap-10 items-center ">
        <h1 className="my-5 text-xl text-black max-w-xl ">
          Contact us <span className="text-primary">now </span>
        </h1>

        <ContactForm></ContactForm>
      </div>
    </section>
  );
}
