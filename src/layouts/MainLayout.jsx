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
      {chaptersListIsActive && <Sidebar />}
      <Outlet />
    </>
  );
};

export default MainLayout;
