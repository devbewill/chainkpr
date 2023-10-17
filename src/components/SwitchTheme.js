import React, { Fragment, useEffect, useState } from "react";
import { Listbox, Transition } from "@headlessui/react";
import { CheckIcon, ChevronUpDownIcon } from "@heroicons/react/20/solid";

// const SwitchTheme = () => {
//   const [theme, setTheme] = useState("light");

//   //modify data-theme when theme changes
//   useEffect(() => {
//     //apply theme
//     const body = document.documentElement;
//     body.setAttribute("data-theme", theme);

//     //close dropdown after click
//     const elem = document.activeElement;
//     elem?.blur();
//   }, [theme]);

//   return (
//     <div className="dropdown ">
//       <label tabIndex={0} className="btn m-1">
//         {theme}
//       </label>
//       <ul
//         tabIndex={0}
//         className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
//       >
//         <li>
//           <a onClick={(e) => setTheme("light")}>Light</a>
//         </li>
//         <li>
//           <a onClick={(e) => setTheme("cyberpunk")}>cyberpunk</a>
//         </li>
//         <li>
//           <a
//             onClick={(e) => setTheme(e.target.getAttribute("value"))}
//             value="dark"
//           >
//             Dark
//           </a>
//         </li>
//       </ul>
//     </div>
//   );
// };

// export default SwitchTheme;

export default function SwitchTheme() {
  const [theme, setTheme] = useState("light");
  const themes = ["light", "dark", "pink"];

  // modify data-theme when theme changes
  useEffect(() => {
    //apply theme
    const body = document.documentElement;
    body.setAttribute("data-theme", theme);
  }, [theme]);

  return (
    <Listbox value={theme}>
      <div className="fixed w-40 right-0 left-0 mx-auto  z-50 mt-1 ">
        <Listbox.Button className="relative cursor-default rounded-lg bg-white py-2 pl-3 pr-10 text-left shadow-md focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm">
          {theme}
        </Listbox.Button>
        <Listbox.Options>
          {themes.map((theme) => (
            <Listbox.Option
              key={theme}
              value={theme}
              onClick={() => setTheme(theme)}
            >
              {theme}
            </Listbox.Option>
          ))}
        </Listbox.Options>
      </div>
    </Listbox>
  );
}
