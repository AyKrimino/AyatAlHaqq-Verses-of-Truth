import { createContext, useState } from "react";

export const ChaptersListContext = createContext();

export const ChaptersListProvider = ({ children }) => {
  const [chaptersListIsActive, setChaptersListIsActive] = useState(false);

  const toggleChaptersListIsActive = () => {
    setChaptersListIsActive(!chaptersListIsActive);
  };

  const contextValue = {
    chaptersListIsActive,
    setChaptersListIsActive,
    toggleChaptersListIsActive,
  };

  return (
    <ChaptersListContext.Provider value={contextValue}>
      {children}
    </ChaptersListContext.Provider>
  );
};
