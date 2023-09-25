export default function Footer() {
  return (
    <footer class="pt-10 px-6 pb-5 bg-zinc-50 border-t text-gray-500">
      <div class="mx-auto max-w-screen-xl">
        <div class="md:flex md:justify-between">
          <div class="mb-6 md:mb-0 lg:w-1/3">
            <a href="./" class="flex items-center pb-5">
              <img
                src="./datome.svg"
                class="mr-01 h-8 fill-black"
                alt="datome Logo"
              />
            </a>
            <p>Embed trust in your data and processes</p>
            <p className="pt-5">
              Mangrovia Blockchain Solutions Srl <br></br>Corso Venezia 54{" "}
              <br></br>20121, Milano <br></br>VAT: IT10301800966
            </p>
          </div>
          <div class="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
            <div>
              <h2 class="mb-6 text-sm font-semibold text-black uppercase ">
                Sections
              </h2>
              <ul class="text-gray-500">
                <li class="mb-4">
                  <a href="" class="hover:underline">
                    About
                  </a>
                </li>
                <li class="mb-4">
                  <a href="" class="hover:underline">
                    Use cases
                  </a>
                </li>
                <li class="mb-4">
                  <a href="/" class="hover:underline">
                    FAQ
                  </a>
                </li>
                <li class="mb-4">
                  <a href="/" class="hover:underline">
                    Docs
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h2 class="mb-6 text-sm font-semibold text-black uppercase ">
                Legal
              </h2>
              <ul class="text-gray-500">
                <li class="mb-4">
                  <a href="#" class="hover:underline">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" class="hover:underline">
                    Terms &amp; Conditions
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr class="my-6sm:mx-auto  lg:my-8" />
        <div class="sm:flex sm:items-center sm:justify-between">
          <span class="text-sm text-black sm:text-center">
            © 2023{" "}
            <a href="https://datome.io" class="hover:underline">
              Datome
            </a>
            . All Rights Reserved.
          </span>
          <div class="flex mt-4 space-x-6 sm:justify-center sm:mt-0">
            <a href="#" class="text-black">
              <svg
                class="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
              </svg>
            </a>
            <a href="#" class="text-black">
              <svg
                class="w-5 h-5 text-black"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 18 18"
              >
                <path
                  fill-rule="evenodd"
                  d="M7.979 5v1.586a3.5 3.5 0 0 1 3.082-1.574C14.3 5.012 15 7.03 15 9.655V15h-3v-4.738c0-1.13-.229-2.584-1.995-2.584-1.713 0-2.005 1.23-2.005 2.5V15H5.009V5h2.97ZM3 2.487a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z"
                  clip-rule="evenodd"
                />
                <path d="M3 5.012H0V15h3V5.012Z" />
              </svg>
            </a>
            <a href="#" class="text-black">
              <svg
                className="w-6 h-6 text-black"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 21 16"
              >
                <path d="M16.942 1.556a16.3 16.3 0 0 0-4.126-1.3 12.04 12.04 0 0 0-.529 1.1 15.175 15.175 0 0 0-4.573 0 11.585 11.585 0 0 0-.535-1.1 16.274 16.274 0 0 0-4.129 1.3A17.392 17.392 0 0 0 .182 13.218a15.785 15.785 0 0 0 4.963 2.521c.41-.564.773-1.16 1.084-1.785a10.63 10.63 0 0 1-1.706-.83c.143-.106.283-.217.418-.33a11.664 11.664 0 0 0 10.118 0c.137.113.277.224.418.33-.544.328-1.116.606-1.71.832a12.52 12.52 0 0 0 1.084 1.785 16.46 16.46 0 0 0 5.064-2.595 17.286 17.286 0 0 0-2.973-11.59ZM6.678 10.813a1.941 1.941 0 0 1-1.8-2.045 1.93 1.93 0 0 1 1.8-2.047 1.919 1.919 0 0 1 1.8 2.047 1.93 1.93 0 0 1-1.8 2.045Zm6.644 0a1.94 1.94 0 0 1-1.8-2.045 1.93 1.93 0 0 1 1.8-2.047 1.918 1.918 0 0 1 1.8 2.047 1.93 1.93 0 0 1-1.8 2.045Z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
