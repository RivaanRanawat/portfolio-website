import React, { useState, useEffect } from "react";
import { useMediaQuery } from "react-responsive";
import Switch from "react-switch";
const DARK_CLASS = "dark";

export const DarkToggle = () => {
  const systemPrefersDark = useMediaQuery(
    {
      query: "(prefers-color-scheme: dark)",
    },
    undefined,
    (prefersDark) => {
      setIsDark(prefersDark);
    }
  );

  const [isDark, setIsDark] = useState(systemPrefersDark);

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add(DARK_CLASS);
    } else {
      document.documentElement.classList.remove(DARK_CLASS);
    }
  }, [isDark]);

  return (
    <Switch
      className="DarkToggle"
      checked={isDark}
      onChange={(event) => setIsDark(event)}
      checkedIcon="🔆"
      uncheckedIcon="🌙"
      onColor="#fff"
      offColor="#021F34"
      offHandleColor="#0556f3"
      onHandleColor="#00AAF2"
    />
  );
};
