import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ThemeContext } from "../context/ThemeContext";
import { SurahContext } from "../context/SurahContext";

const QuranAccessOptions = () => {
  const { theme } = useContext(ThemeContext);
  const { setSurahMode } = useContext(SurahContext);

  return (
    <div className="flex justify-center my-4">
      <div className="flex gap-4 font-english">
        <Link
          to={`/surah/1`}
          className={`border-2 w-40 sm:w-48 rounded-full py-2 px-1 text-lg font-medium  transition-all duration-300 ease-in-out ${
            theme === "dark"
              ? "border-[#0F5734] hover:bg-[#0F5734]"
              : "border-[#2D8C7F] hover:bg-[#2D8C7F]"
          } text-center`}
          onClick={() => setSurahMode("read")}
        >
          Read Quran
        </Link>
        <Link
          to={`/surah/1`}
          className={`border-2 w-40 sm:w-48 rounded-full py-2 px-1 text-lg font-medium transition-all duration-300 ease-in-out ${
            theme === "dark"
              ? "border-[#0F5734] hover:bg-[#0F5734]"
              : "border-[#2D8C7F] hover:bg-[#2D8C7F]"
          } text-center`}
          onClick={() => setSurahMode("listen")}
        >
          Audio Quran
        </Link>
      </div>
    </div>
  );
};

export default QuranAccessOptions;
