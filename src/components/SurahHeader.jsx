import { useContext } from "react";
import { Link } from "react-router-dom";
import { SurahContext } from "../context/SurahContext";
import { ThemeContext } from "../context/ThemeContext";

const SurahHeader = () => {
  const { surahMode, setSurahMode } = useContext(SurahContext);
  const { theme } = useContext(ThemeContext);

  return (
    <div className="p-4">
      <div className="flex justify-center text-sm sm:text-base">
        {/* Read Surah Button */}
        <Link
          onClick={() => setSurahMode("read")}
          className={`w-full flex flex-col items-center gap-2 ${
            theme === "light"
              ? `${
                  surahMode === "read" ? "bg-[#256F67]" : "bg-[#2D8C7F]"
                } hover:bg-[#256F67]`
              : `${
                  surahMode === "read" ? "bg-[#0b4127]" : "bg-[#0d4a2c]"
                } hover:bg-[#0b4127]`
          } transition-all duration-300 ease-in-out text-gray-50 font-bold py-2 px-4 rounded-tl-full rounded-bl-full ${
            theme === "dark" ? "border-[#121212]" : "border-[#DCF9EB]"
          } border-r`}
        >
          <span className="font-english tracking-wide">Read Surah</span>
          <span className="tracking-wider text-right font-arabic">
            قراءة السورة
          </span>
        </Link>
        {/* Listen Surah Button */}
        <Link
          onClick={() => setSurahMode("listen")}
          className={`w-full flex flex-col items-center gap-2 ${
            theme === "light"
              ? `${
                  surahMode === "listen" ? "bg-[#256F67]" : "bg-[#2D8C7F]"
                } hover:bg-[#256F67]`
              : `${
                  surahMode === "listen" ? "bg-[#0b4127]" : "bg-[#0d4a2c]"
                } hover:bg-[#0b4127]`
          } transition-all duration-300 ease-in-out text-gray-50 font-bold py-2 px-4 rounded-tr-full rounded-br-full ${
            theme === "dark" ? "border-[#121212]" : "border-[#DCF9EB]"
          } border-l`}
        >
          <span className="font-english tracking-wide">Listen Surah</span>
          <span className="tracking-wider text-right font-arabic">
            استماع السورة
          </span>
        </Link>
      </div>
    </div>
  );
};

export default SurahHeader;
