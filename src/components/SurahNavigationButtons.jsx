import React, { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { Link, useParams } from "react-router-dom";

const SurahNavigationButtons = () => {
  const { theme } = useContext(ThemeContext);
  const { id } = useParams();

  return (
    <div className="flex justify-center items-center mb-4 font-english">
      <div className="flex gap-4">
        {id > 1 && (
          <Link
            to={`/surah/${parseInt(id) - 1}`}
            className={`border-2 w-40 sm:w-48 border-[#2D8C7F] rounded-full py-2 px-1 text-lg font-medium hover:bg-[#2D8C7F] transition-all duration-300 ease-in-out ${
              theme === "dark" && "border-[#0F5734] hover:bg-[#0F5734]"
            } text-center`}
          >
            Previous Surah
          </Link>
        )}
        {id < 114 && (
          <Link
            to={`/surah/${parseInt(id) + 1}`}
            className={`border-2 w-40 sm:w-48 border-[#2D8C7F] rounded-full py-2 px-1 text-lg font-medium hover:bg-[#2D8C7F] transition-all duration-300 ease-in-out ${
              theme === "dark" && "border-[#0F5734] hover:bg-[#0F5734]"
            } text-center`}
          >
            Next Surah
          </Link>
        )}
      </div>
    </div>
  );
};

export default SurahNavigationButtons;
