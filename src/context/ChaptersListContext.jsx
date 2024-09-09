import { createContext, useEffect, useState } from "react";

export const ChaptersListContext = createContext();

export const ChaptersListProvider = ({ children }) => {
  const [chaptersListIsActive, setChaptersListIsActive] = useState(false);
  const [selectedSurah, setSelectedSurah] = useState(
    () => parseInt(localStorage.getItem("selectedSurah")) || 1
  );

  useEffect(() => {
    localStorage.setItem("selectedSurah", selectedSurah);
  }, [selectedSurah]);

  const changeSelectedSurah = (chapterId) => {
    setSelectedSurah(chapterId);
  };

  const toggleChaptersListIsActive = () => {
    setChaptersListIsActive(!chaptersListIsActive);
  };

  const contextValue = {
    chaptersListIsActive,
    setChaptersListIsActive,
    toggleChaptersListIsActive,
    selectedSurah,
    setSelectedSurah,
    changeSelectedSurah,
  };

  return (
    <ChaptersListContext.Provider value={contextValue}>
      {children}
    </ChaptersListContext.Provider>
  );
};
