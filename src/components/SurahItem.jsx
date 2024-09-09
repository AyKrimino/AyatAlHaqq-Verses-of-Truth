import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

const SurahItem = ({
  surahNumber,
  surahEnglishTitle,
  surahArabicTitle,
  onClick,
  isSelected,
}) => {
  const { theme } = useContext(ThemeContext);

  return (
    <div
      onClick={onClick}
      className={`flex items-center gap-4 px-2 py-3 ${
        theme === "light"
          ? `${isSelected ? "bg-[#256F67]" : "bg-[#297870]"} hover:bg-[#256F67]`
          : `${isSelected ? "bg-[#0b4127]" : "bg-[#0d4a2c]"} hover:bg-[#0b4127]`
      } rounded-lg cursor-pointer group ${
        isSelected && "scale-110"
      } hover:scale-110 transition-all duration-300 ease-in-out pl-4`}
    >
      <p className="font-english font-bold">{surahNumber}</p>
      <div className="text-xs lg:text-sm space-y-2 font-semibold flex-1 flex flex-col items-center">
        <p className="font-english">{surahEnglishTitle}</p>
        <p className="font-arabic text-right tracking-wider">
          {surahArabicTitle}
        </p>
      </div>
    </div>
  );
};

export default SurahItem;
