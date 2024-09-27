import { useEffect, useState } from "react";
import { fetchChapter, fetchChapterText } from "../services/ChapterService";
import Verse from "./Verse";

const ListenSurah = ({ id }) => {
  const [chapterText, setChapterText] = useState([]);
  const [chapter, setChapter] = useState({});
  const [activeVerseIndex, setActiveVerseIndex] = useState(1);
  const [activeVerse, setActiveVerse] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const chapterData = await fetchChapter(id);
        setChapter(chapterData);

        const chapterTextData = await fetchChapterText(id);
        setChapterText(chapterTextData);
        if (chapterTextData && chapterTextData.length > 0) {
          setActiveVerse(chapterTextData[0].text_uthmani);
        }
      } catch (error) {
        console.error("Error fetching chapter or chapter text:", error);
      }
    };
    fetchData();
  }, [id]);

  return (
    <div className="font-arabic6 text-2xl tracking-wider font-bold text-right p-4 mb-6">
      <div className="tracking-normal text-center pb-8 space-y-8 mt-4">
        <h2 className="text-5xl">{chapter.name_arabic}</h2>
        <h4 className="text-3xl">
          {chapter.bismillah_pre && "بِسْمِ ٱللَّهِ ٱلرَّحْمَـٰنِ ٱلرَّحِيمِ"}
        </h4>
      </div>
      {activeVerse && (
        <Verse verseNumber={activeVerseIndex} text={activeVerse} />
      )}
    </div>
  );
};

export default ListenSurah;
