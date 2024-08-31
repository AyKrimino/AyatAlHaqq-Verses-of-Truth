import logo from "../assets/images/logo.png";
import { MdDarkMode, MdOutlineLightMode } from "react-icons/md";
import { IoIosSearch } from "react-icons/io";
import { IoCloseOutline } from "react-icons/io5";
import { useContext, useEffect, useRef, useState } from "react";
import { ThemeContext } from "../context/ThemeContext";

const Header = () => {
  const [searchIsActive, setSearchIsActive] = useState(false);
  const inputRef = useRef(null);
  const { theme, toggleTheme } = useContext(ThemeContext);

  const getClasses = (theme) => {
    return theme === "light"
      ? "bg-[#2D8C7F] text-gray-50"
      : "bg-[#0F5734] text-gray-50";
  };

  useEffect(() => {
    if (searchIsActive) inputRef.current?.focus();
  }, [searchIsActive]);

  return (
    <div
      className={`p-2 px-4 sm:px-8 lg:px-12 text-xs sm:text-base lg:text-lg flex items-center justify-between ${getClasses(
        theme
      )}`}
    >
      {searchIsActive ? (
        <div className="flex items-center w-screen relative">
          <input
            ref={inputRef}
            type="text"
            className="h-14 sm:h-20 w-full outline-none bg-transparent mr-12 sm:mr-16 lg:mr-20 font-english placeholder:font-english placeholder:select-none placeholder:text-gray-50"
            placeholder="Search..."
          />
          <IoCloseOutline
            onClick={() => setSearchIsActive(false)}
            className="text-xl sm:text-2xl lg:text-3xl cursor-pointer absolute right-6 sm:right-8 lg:right-10"
          />
          <IoIosSearch className="text-xl sm:text-2xl lg:text-3xl cursor-pointer absolute right-0" />
        </div>
      ) : (
        <>
          <div className="flex items-center gap-2">
            <img
              src={logo}
              alt="logo"
              className="h-14 sm:h-20 w-14 sm:w-20 select-none cursor-pointer"
              style={{
                filter: "drop-shadow(0 4px 6px rgba(0, 0, 0, 0.7))",
              }}
            />
            <div className="">
              <h3 className="font-english tracking-wide">Ayat Al Haqq</h3>
              <h3 className="text-right font-arabic">آيات الحق</h3>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <IoCloseOutline className="hidden text-xl sm:text-2xl lg:text-3xl cursor-pointer" />
            <IoIosSearch
              onClick={() => setSearchIsActive(true)}
              className="text-xl sm:text-2xl lg:text-3xl cursor-pointer"
            />
            {theme === "light" ? (
              <MdDarkMode
                onClick={toggleTheme}
                className="text-xl sm:text-2xl lg:text-3xl text-gray-50 cursor-pointer"
              />
            ) : (
              <MdOutlineLightMode
                onClick={toggleTheme}
                className="text-xl sm:text-2xl lg:text-3xl text-gray-50 cursor-pointer"
              />
            )}
          </div>
        </>
      )}
    </div>
  );
};

export default Header;