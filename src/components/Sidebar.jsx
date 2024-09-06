import SurahItem from "./SurahItem";
import { getChaptersList } from "../services/GlobalAPI";
import { useEffect, useState } from "react";

const Sidebar = () => {
  const [chapters, setChapters] = useState([]);

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

  return (
    <div className="w-[25%] h-[90%] p-4 px-8 pb-8 overflow-y-auto overscroll-none scroll-smooth scrollbar-webkit flex-col gap-3 text-white hidden md:flex bg-[#2D8C7F] border-t border-[#DCF9EB]">
      {chapters.map((chapter) => (
        <SurahItem
          key={chapter.id}
          surahNumber={chapter.id}
          surahArabicTitle={chapter.name_arabic}
          surahEnglishTitle={chapter.name_simple}
        />
      ))}
    </div>
  );
};

export default Sidebar;
