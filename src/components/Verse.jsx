import React, { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import VerseNumber from "./VerseNumber";

const Verse = ({ verseNumber, text }) => {
  const { theme } = useContext(ThemeContext);

  return (
    <div className="w-full px-2 sm:px-4 md:px-16 lg:px-36">
      <div className="py-3 mt-3 leading-relaxed text-right" dir="rtl">
        {/* Container for text and verse number */}
        <span className="inline">{text}</span>
        <VerseNumber number={verseNumber} />
      </div>
      <div
        className={`h-[.5px] w-full ${
          theme === "light" ? "bg-gray-900" : "bg-gray-50"
        }`}
      ></div>
    </div>
  );
};

export default Verse;
