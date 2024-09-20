import React, { useContext, useEffect, useState } from "react";
import { getChapter, getChapterInfo } from "../services/GlobalAPI";
import { ThemeContext } from "../context/ThemeContext";

const TodaysSurah = () => {
  const [surahNumber, setSurahNumber] = useState(null);
  const [surahName, setSurahName] = useState("");
  const [surahDescription, setSurahDescription] = useState("");
  const [surahDescriptionSource, setSurahDescriptionSource] = useState("");
  const { theme } = useContext(ThemeContext);

  useEffect(() => {
    const today = new Date().toDateString();
    const previousDate = localStorage.getItem("surahDate");
    const previousSurahNumber = localStorage.getItem("surahNumber");

    if (!previousDate || previousDate !== today) {
      generateRandomSurahNumber(previousSurahNumber);
      localStorage.setItem("surahDate", today);
    } else {
      setSurahNumber(previousSurahNumber);
    }
  }, []);

  useEffect(() => {
    if (surahNumber) {
      getChapterDescription(surahNumber);
      getChapterName(surahNumber);
    }
  }, [surahNumber]);

  const getChapterDescription = async (surahNumber) => {
    try {
      const res = await getChapterInfo(surahNumber);
      setSurahDescription(res.data.chapter_info.short_text);
      setSurahDescriptionSource(res.data.chapter_info.source);
    } catch (error) {
      console.error(error);
    }
  };

  const getChapterName = async (surahNumber) => {
    try {
      const res = await getChapter(surahNumber);
      setSurahName(res.data.chapter.name_simple);
    } catch (error) {
      console.error(error);
    }
  };

  const generateRandomSurahNumber = (previousSurahNumber) => {
    let newSurahNumber = previousSurahNumber;
    while (newSurahNumber === previousSurahNumber) {
      newSurahNumber = Math.floor(Math.random() * 114) + 1;
    }
    localStorage.setItem("surahNumber", newSurahNumber);
    setSurahNumber(newSurahNumber);
  };

  return (
    <div>
      {surahNumber ? (
        <div className="flex justify-center">
          <div
            className={`${
              theme === "light"
                ? "bg-[#C5F0DA] text-gray-700 border-[#2D8C7F]"
                : "bg-[#141414] text-gray-100 border-[#0F5734]"
            } p-6 border-l-4 rounded-lg shadow-md my-4 mx-4 max-w-3xl font-english`}
          >
            <h2 className="text-2xl font-bold">
              Today's Highlighted Surah ({surahName})
            </h2>
            <p className="text-xl font-semibold">Surah Number: {surahNumber}</p>
            <blockquote className="text-md md:text-lg italic my-4">
              “{surahDescription}”
            </blockquote>
            <cite
              className={`block text-right ${
                theme === "light" ? "text-[#2D8C7F]" : "text-[#0F5734]"
              } font-semibold`}
            >
              — {surahDescriptionSource}
            </cite>
          </div>
        </div>
      ) : (
        <p>Loading Surah...</p>
      )}
    </div>
  );
};

export default TodaysSurah;
