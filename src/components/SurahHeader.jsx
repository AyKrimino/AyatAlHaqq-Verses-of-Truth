import { Link } from "react-router-dom";

const SurahHeader = () => {
  return (
    <div className="p-4">
      <div className="flex justify-center text-sm sm:text-base lg:text-lg">
        {/* Read Surah Button */}
        <Link
          to={`/surah/1/read`}
          className="w-full flex flex-col items-center gap-2 bg-[#2D8C7F] hover:bg-[#256F67] transition-all duration-300 ease-in-out text-gray-50 font-bold py-2 px-4 rounded-tl-full rounded-bl-full border-r"
        >
          <span className="font-english tracking-wide">Read Surah</span>
          <span className="tracking-wider text-right font-arabic">قراءة السورة</span>
        </Link>
        {/* Listen Surah Button */}
        <Link
          to={`/surah/1/listen`}
          className="w-full flex flex-col items-center gap-2 bg-[#2D8C7F] hover:bg-[#256F67]  transition-all duration-300 ease-in-out text-gray-50 font-bold py-2 px-4 rounded-tr-full rounded-br-full border-l"
        >
          <span className="font-english tracking-wide">Listen Surah</span>
          <span className="tracking-wider text-right font-arabic">استماع السورة</span>
        </Link>
      </div>
    </div>
  );
};

export default SurahHeader;
