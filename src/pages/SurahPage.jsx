import { useContext, useEffect } from "react";
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

  useEffect(() => {
    if (id) {
      changeSelectedSurah(parseInt(id));
    }
  }, [id]);

  return (
    <div
      className={`${
        chaptersListIsActive && "hidden"
      } md:block h-[100%] w-[100%]`}
    >
      <SurahHeader />
      {surahMode === "read" ? <ReadSurah id={id} /> : <ListenSurah id={id} />}
    </div>
  );
};

export default SurahPage;
