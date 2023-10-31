import { useState } from "react";

export default function ContactForm() {
  const [isLoading, setIsLoading] = useState(false);
  const [formFeedback, setFormFeedback] = useState(null);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    info: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const FeedbackMessage = ({ status }) => {
    if (status === "success") {
      return (
        <p className="bg-green-100 p-4 mt-10 rounded">
          Email sent! Check your inbox e start now.
        </p>
      );
    } else if (status === "error") {
      return (
        <p className="bg-red-100 p-4 mt-10 rounded">
          ops.. error, retry later please.
        </p>
      );
    } else {
      return null;
    }
  };

  async function onSubmit(event) {
    event.preventDefault();
    setIsLoading(true);
    setFormFeedback(null);

    try {
      const response = await fetch("https://trial.datome.io/api/signup/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      setFormFeedback("success");

      if (!response.ok) {
        throw new Error("Failed to submit the data. Please try again.");
      }
    } catch (error) {
      setFormFeedback("error");
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div>
      <form onSubmit={onSubmit} class="mt-10">
        <div class="flex flex-col gap-8 max-w-md">
          <div class="relative z-0">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              class="peer block w-full appearance-none border-0 border-b border-gray-500 bg-transparent py-2.5 px-0 text-md text-gray-300 focus:border-primary focus:outline-none focus:ring-0"
              placeholder=" "
            />
            <label class="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-xl duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 text-gray-500 peer-focus:text-primary peer-focus:dark:text-primary">
              Your name
            </label>
          </div>
          <div class="relative z-0">
            <input
              type="text"
              name="email"
              value={formData.email}
              onChange={handleChange}
              class="peer block w-full appearance-none border-0 border-b text-gray-300 border-gray-500 bg-transparent py-2.5 px-0 text-md focus:border-primary focus:outline-none focus:ring-0"
              placeholder=" "
            />
            <label class="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-xl  duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 text-gray-500 peer-focus:text-primary peer-focus:dark:text-primary">
              Your email
            </label>
          </div>
          <div class="pb-10 relative z-0 col-span-2">
            <textarea
              type="text"
              name="info"
              value={formData.info}
              onChange={handleChange}
              rows="5"
              class="peer block w-full appearance-none border-0 border-b border-gray-500 bg-transparent py-2.5 px-0 text-md text-gray-300 focus:border-primary focus:outline-none focus:ring-0"
              placeholder=" "
            ></textarea>
            <label class="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-xl text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-primary peer-focus:dark:text-primary">
              Say something about you
            </label>
          </div>
        </div>
        <button
          type="submit"
          disabled={isLoading}
          class="btn bg-black text-white  hover:bg-primary"
        >
          {isLoading ? "sending..." : "Start a Trial"}
        </button>
      </form>
      <FeedbackMessage status={formFeedback} />
    </div>
  );
}
