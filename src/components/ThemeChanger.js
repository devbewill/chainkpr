import { useEffect } from "react";
import { themeChange } from "theme-change";

export default function ThemeChanger() {
  const themeValues = ["datome", "mangrovia", "fluo", "darkz"];

  useEffect(() => {
    themeChange(false);
  });

  return (
    <div className="ThemeChanger fixed right-0 z-20">
      <select className="text-primary" data-choose-theme>
        {themeValues.map((value) => (
          <option
            className="text-primary"
            key={value.toLowerCase()}
            value={value.toLowerCase()}
          >
            {value}
          </option>
        ))}
      </select>
    </div>
  );
}
