import React, { useContext } from "react";
import Welcome from "../components/Welcome";
import TodaysSurah from "../components/TodaysSurah";
import { ChaptersListContext } from "../context/ChaptersListContext";
import QuranAccessOptions from "../components/QuranAccessOptions";

const HomePage = () => {
  const { chaptersListIsActive } = useContext(ChaptersListContext);

  return (
    <div
      className={`${
        chaptersListIsActive && "hidden"
      } md:block h-[100%] w-[100%] overflow-y-auto overflow-x-hidden overscroll-none scroll-smooth scrollbar-webkit`}
    >
      <Welcome />
      <QuranAccessOptions />
      <TodaysSurah />
    </div>
  );
};

export default HomePage;
