import { Fragment, useState } from "react";
import { Dialog, Disclosure, Popover, Transition } from "@headlessui/react";

import {
  ArrowPathIcon,
  Bars3Icon,
  ChartPieIcon,
  CursorArrowRaysIcon,
  FingerPrintIcon,
  SquaresPlusIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import {
  ChevronDownIcon,
  PhoneIcon,
  PlayCircleIcon,
} from "@heroicons/react/20/solid";

const usecases = [
  {
    name: "Textile",
    description: "lorem ipsum",
    href: "/article/usecase-textile",
    icon: ChartPieIcon,
  },
  {
    name: "Security",
    description: "lorem ipsum Security ",
    href: "#",
    icon: CursorArrowRaysIcon,
  },
  {
    name: "Pharma",
    description: "Your customers’ data will be safe and secure",
    href: "#",
    icon: FingerPrintIcon,
  },
  {
    name: "Food",
    description: "Connect with third-party tools",
    href: "#",
    icon: SquaresPlusIcon,
  },
  {
    name: "Digital Passport",
    description: "Build strategic funnels that will convert",
    href: "#",
    icon: ArrowPathIcon,
  },
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="absolute max-w-7xl mx-auto inset-x-0 top-2 z-10">
      <nav
        className="relative mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8 z-50"
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <a href="/" className="flex -m-1.5 p-1.5">
            <span className="sr-only">datome</span>
            <img
              src="/datome.svg"
              class="mr-01 h-10 fill-black"
              alt="datome Logo"
            />
          </a>
        </div>

        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>

        <Popover.Group className="hidden lg:flex lg:gap-x-12">
          <Popover className="relative hover:text-primary transition">
            <Popover.Button className="flex items-center text-sm font-semibold leading-6 text-gray-900 outline-none hover:text-primary transition">
              Use cases
              <ChevronDownIcon
                className="h-5 w-5 flex-none text-gray-400"
                aria-hidden="true"
              />
            </Popover.Button>

            <Transition
              as={Fragment}
              enter="transition ease-out duration-200"
              enterFrom="opacity-0 translate-y-1"
              enterTo="opacity-100 translate-y-0"
              leave="transition ease-in duration-150"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 translate-y-1"
            >
              <Popover.Panel className="absolute -left-8 top-full z-10 mt-3 w-screen lg:max-w-xs overflow-hidden rounded-xl bg-white shadow-lg ring-1 ring-gray-900/5 ">
                <div className="p-1 divide-y">
                  {usecases.map((item) => (
                    <div
                      key={item.name}
                      className="group relative flex items-center gap-x-4 p-2 text-sm leading-6 hover:bg-secondary "
                    >
                      <div className="">
                        <item.icon
                          className="h-6 w-6 text-gray-600 group-hover:text-primary"
                          aria-hidden="true"
                        />
                      </div>
                      <div className="flex-auto">
                        <a
                          href={item.href}
                          className="block font-semibold text-gray-900"
                        >
                          {item.name}
                          <span className="absolute inset-0" />
                        </a>
                        {/* <p className="mt-1 text-gray-600">{item.description}</p> */}
                      </div>
                    </div>
                  ))}
                </div>
              </Popover.Panel>
            </Transition>
          </Popover>

          <a
            href="https://mangrovia.solutions"
            className="text-sm font-semibold leading-6 text-gray-900 hover:text-primary transition"
          >
            About us
          </a>
          {/* <a
            href="./articles"
            className="text-sm font-semibold leading-6 text-gray-900"
          >
            Articles
          </a> */}
          <a
            href="./faq"
            className="text-sm font-semibold leading-6 text-gray-900 hover:text-primary transition"
          >
            Faq
          </a>
          <a
            href="https://doc.datome.io/"
            className="text-sm font-semibold leading-6 text-gray-900 hover:text-primary transition"
          >
            Docs
          </a>
        </Popover.Group>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <a
            href="#start-trial"
            className="rounded-md bg-black px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-primary  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary transition"
          >
            Start trial <span aria-hidden="true">&rarr;</span>
          </a>
        </div>
      </nav>
      <Dialog
        as="div"
        className="lg:hidden"
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <div className="fixed inset-0 z-10" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex justify-between">
            <div className="flex lg:flex-1">
              <a href="/" className="flex -m-1.5 p-1.5">
                <span className="sr-only">datome</span>
                <img
                  src="./datome.svg"
                  class="mr-01 h-10 fill-black"
                  alt="datome Logo"
                />
              </a>
            </div>
            <button
              type="button"
              className="mr-0  text-gray-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 ">
              <div className=" py-6 divide-y-2 divide-gray-100">
                <Disclosure as="div" className="-mx-3">
                  {({ open }) => (
                    <>
                      <Disclosure.Button className="flex w-full items-center justify-between py-5 pl-3 pr-3.5 text-base font-semibold leading-7 text-gray-900 hover:bg-secondary">
                        Use cases
                      </Disclosure.Button>
                      <Disclosure.Panel className="mt-2 space-y-2">
                        {usecases.map((item) => (
                          <Disclosure.Button
                            key={item.name}
                            as="a"
                            href={item.href}
                            className="block py-1 pl-6 pr-3 text-sm leading-7 text-gray-600 hover:bg-secondary"
                          >
                            {item.name}
                          </Disclosure.Button>
                        ))}
                      </Disclosure.Panel>
                    </>
                  )}
                </Disclosure>
                <a
                  href="https://mangrovia.solutions"
                  className="-mx-3 block px-3 py-5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  About us
                </a>
                <a
                  href="./faq"
                  className="-mx-3 block px-3 py-5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Faq
                </a>
                <a
                  href="https://doc.datome.io/"
                  className="-mx-3 block  px-3 py-5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Docs
                </a>
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  );
}
