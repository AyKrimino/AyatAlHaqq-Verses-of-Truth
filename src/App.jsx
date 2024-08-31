import { Route, Routes } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import { useContext } from "react";
import { ThemeContext } from "./context/ThemeContext";

const App = () => {
  const { theme } = useContext(ThemeContext);

  const getClasses = (theme) => {
    return theme === "dark"
      ? "bg-[#121212] text-gray-50"
      : "bg-[#DCF9EB] text-gray-900";
  };

  return (
    <div className={`min-h-screen ${getClasses(theme)}`}>
      <Routes>
        <Route path="/" element={<MainLayout />}></Route>
      </Routes>
    </div>
  );
};

export default App;
