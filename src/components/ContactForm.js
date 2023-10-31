export default function ContactForm() {
  return (
    <form action="" class="mt-10">
      <input type="hidden" name="access_key" value="YOUR_ACCESS_KEY_HERE" />
      <div class="flex flex-col gap-8 max-w-md">
        <div class="relative z-0">
          <input
            type="text"
            name="name"
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
            class="peer block w-full appearance-none border-0 border-b text-gray-300 border-gray-500 bg-transparent py-2.5 px-0 text-md focus:border-primary focus:outline-none focus:ring-0"
            placeholder=" "
          />
          <label class="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-xl  duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 text-gray-500 peer-focus:text-primary peer-focus:dark:text-primary">
            Your email
          </label>
        </div>
        <div class="pb-10 relative z-0 col-span-2">
          <textarea
            name="message"
            rows="5"
            class="peer block w-full appearance-none border-0 border-b border-gray-500 bg-transparent py-2.5 px-0 text-md text-gray-300 focus:border-primary focus:outline-none focus:ring-0"
            placeholder=" "
          ></textarea>
          <label class="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-xl text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-primary peer-focus:dark:text-primary">
            Say something about you
          </label>
        </div>
      </div>
      <button type="submit" class="btn bg-black text-white  hover:bg-primary">
        Start a trial
      </button>
    </form>
  );
}
