import { useEffect, useState } from "react";
import Verse from "./Verse";
import { fetchChapter, fetchChapterText } from "../services/ChapterService";

const ReadSurah = ({ id }) => {
  const [chapterText, setChapterText] = useState([]);
  const [chapter, setChapter] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const chapterData = await fetchChapter(id);
        setChapter(chapterData);

        const chapterTextData = await fetchChapterText(id);
        setChapterText(chapterTextData);
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
