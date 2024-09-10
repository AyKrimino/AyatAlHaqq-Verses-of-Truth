import SurahItem from "./SurahItem";
import { getChaptersList } from "../services/GlobalAPI";
import { useContext, useEffect, useRef, useState } from "react";
import { IoArrowBack } from "react-icons/io5";
import { ChaptersListContext } from "../context/ChaptersListContext";
import { ThemeContext } from "../context/ThemeContext";

const Sidebar = () => {
  const [chapters, setChapters] = useState([]);
  const { setChaptersListIsActive, selectedSurah, changeSelectedSurah } =
    useContext(ChaptersListContext);
  const { theme } = useContext(ThemeContext);
  const surahRefs = useRef([]);

  useEffect(() => {
    getChapters();
  }, []);

  const getChapters = async () => {
    try {
      const response = await getChaptersList;
      setChapters(response.data.chapters);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    if (chapters.length > 0) {
      const selectedSurahIndex = chapters.findIndex(
        (chapter) => selectedSurah === chapter.id
      );

      if (surahRefs.current[selectedSurahIndex]) {
        surahRefs.current[selectedSurahIndex].scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    }
  }, [chapters, selectedSurah]);

  return (
    <div
      className={`w-[100%] md:w-[25%] h-[90%] p-4 px-8 pb-8 overflow-y-auto overscroll-none scroll-smooth scrollbar-webkit flex-col gap-3 text-white flex border-t ${
        theme === "light"
          ? "bg-[#2D8C7F] border-[#DCF9EB]"
          : "bg-[#0F5734] border-[#121212]"
      } `}
    >
      <div className="flex items-center mb-2">
        <h3
          className={`font-english text-2xl lg:text-3xl font-semibold ${
            theme === "light" ? "text-[#226B61]" : "text-[#0b4127]"
          } flex-1`}
        >
          Chapters
        </h3>
        <IoArrowBack
          className={`text-lg lg:text-xl ${
            theme === "light" ? "text-[#226B61]" : "text-[#0b4127]"
          } cursor-pointer`}
          onClick={() => setChaptersListIsActive(false)}
        />
      </div>
      {chapters.map((chapter, index) => (
        <SurahItem
          key={index}
          surahNumber={chapter.id}
          surahArabicTitle={chapter.name_arabic}
          surahEnglishTitle={chapter.name_simple}
          isSelected={chapter.id === selectedSurah}
          onClick={() => changeSelectedSurah(chapter.id)}
          ref={(el) => (surahRefs.current[index] = el)}
        />
      ))}
    </div>
  );
};

export default Sidebar;
