import { useEffect, useState } from "react";
import { getChapterTextById } from "../services/GlobalAPI";

const ReadSurah = ({ id }) => {
  const [chapterText, setChapterText] = useState([]);

  useEffect(() => {
    fetchChapterText();
  }, [id]);

  const fetchChapterText = async () => {
    try {
      const res = await getChapterTextById(id);
      setChapterText(res.data.verses);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="font-arabic2 text-2xl font-bold tracking-wider text-right">
      {chapterText.map((verse) => (
        <div key={verse.id}>
          <div className="">{verse.text_indopak}</div> <br />
        </div>
      ))}
    </div>
  );
};

export default ReadSurah;
