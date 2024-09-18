import { useContext, useEffect, useRef } from "react";
import SurahHeader from "../components/SurahHeader";
import { ChaptersListContext } from "../context/ChaptersListContext";
import { SurahContext } from "../context/SurahContext";
import ReadSurah from "../components/ReadSurah";
import ListenSurah from "../components/ListenSurah";
import { useParams } from "react-router-dom";

const SurahPage = () => {
  const { chaptersListIsActive, changeSelectedSurah } =
    useContext(ChaptersListContext);
  const { surahMode } = useContext(SurahContext);
  const { id } = useParams();
  const surahPageRef = useRef(null);

  useEffect(() => {
    if (id) {
      changeSelectedSurah(parseInt(id));
    }

    surahPageRef.current.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, [id]);

  return (
    <div
      ref={surahPageRef}
      className={`${
        chaptersListIsActive && "hidden"
      } md:block h-[100%] w-[100%] overflow-y-auto overflow-x-hidden overscroll-none scroll-smooth scrollbar-webkit`}
    >
      <SurahHeader />
      {surahMode === "read" ? <ReadSurah id={id} /> : <ListenSurah id={id} />}
    </div>
  );
};

export default SurahPage;
