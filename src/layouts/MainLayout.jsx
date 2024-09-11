import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import { useContext } from "react";
import { ChaptersListContext } from "../context/ChaptersListContext";

const MainLayout = () => {
  const { chaptersListIsActive } = useContext(ChaptersListContext);

  return (
    <>
      <Header />
      <div className="flex h-[90%]">
        {chaptersListIsActive && <Sidebar />}
        <Outlet />
      </div>
    </>
  );
};

export default MainLayout;
