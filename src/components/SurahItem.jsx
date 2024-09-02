const SurahItem = () => {
  return (
    <div className="flex items-center gap-4 px-2 py-3 bg-[#297870] hover:bg-[#256F67] rounded-lg cursor-pointer group hover:scale-110 transition-all duration-300 ease-in-out">
      <p className="font-english font-bold">1</p>
      <div className="text-xs lg:text-sm">
        <p className="font-english">Al-Fatihah</p>
        <p className="font-arabic">سُورَةُ الْفَاتِحَة</p>
        <p></p>
      </div>
    </div>
  );
};

export default SurahItem;
