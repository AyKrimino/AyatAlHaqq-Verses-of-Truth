import { Route, Routes } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";

const App = () => {
  return (
    <div className="min-h-screen bg-[#121212] text-gray-50">
      <Routes>
        <Route path="/" element={<MainLayout />}></Route>
      </Routes>
    </div>
  );
};

export default App;
