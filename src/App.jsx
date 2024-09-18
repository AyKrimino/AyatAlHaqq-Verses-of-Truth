import { Route, Routes } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import { useContext } from "react";
import { ThemeContext } from "./context/ThemeContext";
import SurahPage from "./pages/SurahPage";
import HomePage from "./pages/HomePage";

const App = () => {
  const { theme } = useContext(ThemeContext);

  const getClasses = (theme) => {
    return theme === "dark"
      ? "bg-[#191919] text-gray-50"
      : "bg-[#DCF9EB] text-gray-900";
  };

  return (
    <div className={`h-screen ${getClasses(theme)}`}>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<HomePage />} />
          <Route path="surah/:id" element={<SurahPage />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
