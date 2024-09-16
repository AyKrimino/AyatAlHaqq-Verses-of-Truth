import React, { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

const Verse = ({ verseNumber, text }) => {
  const { theme } = useContext(ThemeContext);

  return (
    <div className="w-full">
      <div className="py-3 mt-3 space-x-2">
        <span className="inline text-gray-50 border border-gray-900 rounded-br-full rounded-tl-full bg-[#2D8C7F]">
          {verseNumber}
        </span>
        <div className="inline">{text}</div>
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
