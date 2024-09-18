import React, { useEffect, useState } from "react";
import { getChapterInfo } from "../services/GlobalAPI";

const TodaysSurah = () => {
  const [surahNumber, setSurahNumber] = useState(null);
  const [surahDescription, setSurahDescription] = useState("");
  const [surahDescriptionSource, setSurahDescriptionSource] = useState("");

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
        <div>
          <h2>Today's Highlighted Surah</h2>
          <p>Surah Number: {surahNumber}</p>
          <p>Surah Description: {surahDescription}</p>
          <h2>description source: {surahDescriptionSource}</h2>
        </div>
      ) : (
        <p>Loading Surah...</p>
      )}
    </div>
  );
};

export default TodaysSurah;
