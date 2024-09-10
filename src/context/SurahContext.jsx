import { createContext, useEffect, useState } from "react";

export const SurahContext = createContext();

export const SurahProvider = ({ children }) => {
  const [surahMode, setSurahMode] = useState(
    () => localStorage.getItem("surahMode") || "read"
  );

  useEffect(() => {
    localStorage.setItem("surahMode", surahMode);
  }, [surahMode]);

  const contextValue = {
    surahMode,
    setSurahMode,
  };

  return (
    <SurahContext.Provider value={contextValue}>
      {children}
    </SurahContext.Provider>
  );
};
