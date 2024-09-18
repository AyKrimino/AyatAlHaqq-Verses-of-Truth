import { useEffect, useState } from "react";
import { getChapter, getChapterTextById } from "../services/GlobalAPI";
import Verse from "./Verse";

const ReadSurah = ({ id }) => {
  const [chapterText, setChapterText] = useState([]);
  const [chapter, setChapter] = useState({});

  useEffect(() => {
    fetchChapterText();
    fetchChapter();
  }, [id]);

  const fetchChapterText = async () => {
    try {
      const res = await getChapterTextById(id);
      setChapterText(res.data.verses);
    } catch (error) {
      console.error(error);
    }
  };

  const fetchChapter = async () => {
    try {
      const res = await getChapter(id);
      setChapter(res.data.chapter);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="font-arabic6 text-2xl tracking-wider font-bold text-right p-4 mb-8">
      <div className="tracking-normal text-center pb-8 space-y-8 mt-4">
        <h2 className="text-5xl">{chapter.name_arabic}</h2>
        <h4 className="text-3xl">
          {chapter.bismillah_pre && "بِسْمِ ٱللَّهِ ٱلرَّحْمَـٰنِ ٱلرَّحِيمِ"}
        </h4>
      </div>
      <div className="">
        {chapterText.map((verse, index) => (
          <Verse
            key={verse.id}
            verseNumber={index + 1}
            text={verse.text_uthmani}
          />
        ))}
      </div>
    </div>
  );
};

export default ReadSurah;
