import { useContext } from "react";
import SurahHeader from "../components/SurahHeader";
import { ChaptersListContext } from "../context/ChaptersListContext";

const SurahPage = () => {
  const { chaptersListIsActive } = useContext(ChaptersListContext);

  return (
    <div className={`${chaptersListIsActive && "hidden"} md:block h-[100%] w-[100%]`}>
      <SurahHeader />
    </div>
  );
};

export default SurahPage;
