import { useEffect, useState } from "react";
import { fetchChapter, fetchChapterText } from "../services/ChapterService";
import { getChapterAudioById } from "../services/GlobalAPI";
import Verse from "./Verse";

const ListenSurah = ({ id }) => {
  const [chapterText, setChapterText] = useState([]);
  const [chapter, setChapter] = useState({});
  const [activeVerseIndex, setActiveVerseIndex] = useState(1);
  const [activeVerse, setActiveVerse] = useState("");
  const [audioFiles, setAudioFiles] = useState([]);
  const [currentAudioIndex, setCurrentAudioIndex] = useState(0);
  const [currentPageNumber, setCurrentPageNumber] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch chapter details
        const chapterData = await fetchChapter(id);
        setChapter(chapterData);

        // Fetch chapter text
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

  useEffect(() => {
    const fetchChapterAudio = async () => {
      try {
        const res = await getChapterAudioById(id, currentPageNumber);
        setAudioFiles(res.data.audio_files);
        setCurrentAudioIndex(0);
        setTotalPages(res.data.pagination.total_pages);
      } catch (error) {
        console.error("Error fetching chapter audio:", error);
      }
    };
    fetchChapterAudio();
  }, [id, currentPageNumber]);

  const handleAudioEnd = () => {
    setActiveVerseIndex((prevIndex) => prevIndex + 1);
    setActiveVerse(chapterText[activeVerseIndex].text_uthmani);
    if (currentAudioIndex < audioFiles.length - 1) {
      setCurrentAudioIndex((prevIndex) => prevIndex + 1);
    } else if (currentPageNumber < totalPages) {
      setCurrentPageNumber((prev) => prev + 1);
    }
  };

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
      <audio
        controls
        autoPlay
        src={`https://verses.quran.com/${audioFiles[currentAudioIndex]?.url}`}
        onEnded={handleAudioEnd}
      ></audio>
    </div>
  );
};

export default ListenSurah;
