import { useContext, useEffect, useRef, useState } from "react";
import { fetchChapter, fetchChapterText } from "../services/ChapterService";
import { getChapterAudioById } from "../services/GlobalAPI";
import Verse from "./Verse";
import { FaPlay, FaPause, FaStepBackward, FaStepForward } from "react-icons/fa";
import { ThemeContext } from "../context/ThemeContext";

const ListenSurah = ({ id }) => {
  const [chapterText, setChapterText] = useState([]);
  const [chapter, setChapter] = useState({});
  const [activeVerseIndex, setActiveVerseIndex] = useState(1);
  const [activeVerse, setActiveVerse] = useState("");
  const [audioFiles, setAudioFiles] = useState([]);
  const [currentAudioIndex, setCurrentAudioIndex] = useState(0);
  const [currentPageNumber, setCurrentPageNumber] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [isPlaying, setIsPlaying] = useState(true);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  const { theme } = useContext(ThemeContext);

  const audioRef = useRef(null);
  const seekBarRef = useRef(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Reset state before fetching new data
        setChapter({});
        setChapterText([]);
        setActiveVerseIndex(1);
        setCurrentAudioIndex(0);
        setCurrentPageNumber(1);
        setAudioFiles([]);
        setActiveVerse("");
        setIsPlaying(false);

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
        setIsLoading(true);
        const res = await getChapterAudioById(id, currentPageNumber);
        setAudioFiles(res.data.audio_files);
        setTotalPages(res.data.pagination.total_pages);
      } catch (error) {
        console.error("Error fetching chapter audio:", error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchChapterAudio();
  }, [id, currentPageNumber]);

  useEffect(() => {
    if (!isLoading && audioFiles.length > 0 && isPlaying) {
      audioRef.current.pause();
      audioRef.current.load();
      audioRef.current.play();
    }
  }, [currentAudioIndex, audioFiles]);

  useEffect(() => {
    if (chapterText.length > 0 && audioFiles.length > 0) {
      setActiveVerse(chapterText[activeVerseIndex - 1]?.text_uthmani || "");
      if (isPlaying) audioRef.current.play();
    }
  }, [activeVerseIndex, audioFiles]);

  const handleAudioEnd = () => {
    if (isLoading) return;

    if (currentAudioIndex < audioFiles.length - 1) {
      setCurrentAudioIndex((prevIndex) => prevIndex + 1);
      setActiveVerseIndex((prevIndex) => prevIndex + 1);
      setActiveVerse(chapterText[activeVerseIndex - 1]?.text_uthmani || "");
    } else if (currentPageNumber < totalPages) {
      setIsLoading(true);
      setCurrentPageNumber((prev) => prev + 1);
      setCurrentAudioIndex(0);
      setActiveVerseIndex((prevIndex) => prevIndex + 1);
      setActiveVerse(chapterText[activeVerseIndex - 1]?.text_uthmani || "");
    } else {
      setIsPlaying(false); // Stop playback if no more audio files are left
    }
  };

  const handleNextVerse = () => {
    if (isLoading) return;

    if (currentAudioIndex < audioFiles.length - 1) {
      setCurrentAudioIndex((prevIndex) => prevIndex + 1);
      setActiveVerseIndex((prevIndex) => prevIndex + 1);
      setActiveVerse(chapterText[activeVerseIndex - 1]?.text_uthmani || "");
    } else if (currentPageNumber < totalPages) {
      setIsLoading(true);
      setCurrentPageNumber((prev) => prev + 1);
      setCurrentAudioIndex(0);
      setActiveVerseIndex((prevIndex) => prevIndex + 1);
      setActiveVerse(chapterText[activeVerseIndex - 1]?.text_uthmani || "");
    }
  };

  const handlePrevVerse = () => {
    if (isLoading) return;

    if (currentAudioIndex > 0) {
      setCurrentAudioIndex((prevIndex) => prevIndex - 1);
      setActiveVerseIndex((prevIndex) => prevIndex - 1);
      setActiveVerse(chapterText[activeVerseIndex - 1]?.text_uthmani || "");
    } else if (currentPageNumber > 1) {
      setIsLoading(true);
      setCurrentPageNumber((prev) => prev - 1);
      setCurrentAudioIndex(audioFiles.length - 1);
      setActiveVerseIndex((prevIndex) => prevIndex - 1);
      setActiveVerse(chapterText[activeVerseIndex - 1]?.text_uthmani || "");
    }
  };

  const togglePlayPause = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const handleTimeUpdate = () => {
    const current = audioRef.current.currentTime;
    const total = audioRef.current.duration;
    setCurrentTime(current);
    setDuration(total);

    const progress = (current / total) * 100;
    seekBarRef.current.style.width = `${progress}%`;
  };

  const handleSeek = (e) => {
    const seekPosition =
      (e.nativeEvent.offsetX / e.currentTarget.offsetWidth) *
      audioRef.current.duration;
    audioRef.current.currentTime = seekPosition;
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
        ref={audioRef}
        src={
          audioFiles.length > 0
            ? `https://verses.quran.com/${audioFiles[currentAudioIndex]?.url}`
            : ""
        }
        onEnded={handleAudioEnd}
        onLoadedMetadata={() => setDuration(audioRef.current.duration)}
        onTimeUpdate={handleTimeUpdate}
        preload="auto"
      ></audio>

      {/* Audio Player Controls */}
      <div className="flex flex-col items-center gap-4 mt-8">
        <div className="flex items-center gap-4">
          <FaStepBackward
            className={`w-6 h-6 cursor-pointer ${
              activeVerseIndex === 1 && "opacity-50"
            }`}
            onClick={handlePrevVerse}
          />
          {isPlaying ? (
            <FaPause
              className="w-6 h-6 cursor-pointer"
              onClick={togglePlayPause}
            />
          ) : (
            <FaPlay
              className="w-6 h-6 cursor-pointer"
              onClick={togglePlayPause}
            />
          )}
          <FaStepForward
            className={`w-6 h-6 cursor-pointer ${
              activeVerseIndex === chapterText.length && "opacity-50"
            }`}
            onClick={handleNextVerse}
          />
        </div>

        {/* Seek Bar */}
        <div
          onClick={handleSeek}
          className="relative w-full max-w-xl h-2 bg-gray-300 rounded-full cursor-pointer"
        >
          <div
            ref={seekBarRef}
            className={`absolute h-full ${
              theme === "light" ? "bg-[#2D8C7F]" : "bg-[#0F5734]"
            } rounded-full`}
            style={{ width: `${(currentTime / duration) * 100}%` }}
          ></div>
        </div>

        {/* Time Display */}
        <div className="flex justify-between w-full max-w-xl text-sm text-gray-600">
          <span>
            {Math.floor(currentTime / 60)}:
            {String(Math.floor(currentTime % 60)).padStart(2, "0")}
          </span>
          <span>
            {Math.floor(duration / 60)}:
            {String(Math.floor(duration % 60)).padStart(2, "0")}
          </span>
        </div>
      </div>
    </div>
  );
};

export default ListenSurah;
