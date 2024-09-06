import SurahItem from "./SurahItem";
import { getChaptersList } from "../services/GlobalAPI";
import { useContext, useEffect, useState } from "react";
import { IoArrowBack } from "react-icons/io5";
import { ChaptersListContext } from "../context/ChaptersListContext";

const Sidebar = () => {
  const [chapters, setChapters] = useState([]);
  const { setChaptersListIsActive } = useContext(ChaptersListContext);

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
    <div className="w-[100%] md:w-[25%] h-[90%] p-4 px-8 pb-8 overflow-y-auto overscroll-none scroll-smooth scrollbar-webkit flex-col gap-3 text-white flex bg-[#2D8C7F] border-t border-[#DCF9EB]">
      <div className="flex items-center mb-2">
        <h3 className="font-english text-2xl lg:text-3xl font-semibold text-[#226B61] flex-1">
          Chapters
        </h3>
        <IoArrowBack
          className="text-lg lg:text-xl text-[#226B61] cursor-pointer"
          onClick={() => setChaptersListIsActive(false)}
        />
      </div>
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
