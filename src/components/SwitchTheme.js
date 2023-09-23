import React, { useEffect, useState } from "react";
const SwitchTheme = () => {
  const [theme, setTheme] = useState("light");

  //modify data-theme when theme changes
  useEffect(() => {
    //apply theme
    const body = document.documentElement;
    body.setAttribute("data-theme", theme);

    //close dropdown after click
    const elem = document.activeElement;
    elem?.blur();
  }, [theme]);

  return (
    <div className="dropdown">
      <label tabIndex={0} className="btn m-1">
        {theme}
      </label>
      <ul
        tabIndex={0}
        className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
      >
        <li>
          <a onClick={(e) => setTheme("light")}>Light</a>
        </li>
        <li>
          <a onClick={(e) => setTheme("cyberpunk")}>cyberpunk</a>
        </li>
        <li>
          <a
            onClick={(e) => setTheme(e.target.getAttribute("value"))}
            value="dark"
          >
            Dark
          </a>
        </li>
      </ul>
    </div>
  );
};

export default SwitchTheme;