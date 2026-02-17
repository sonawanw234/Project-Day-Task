import React from "react";
import MainFooter from "../components/Footer/MainFooter";
import MainHeader from "../components/Header/MainHeader";
import AppRoutes from "../app/AppRoutes";

const MainLayout = () => {
  return (
    <>
        <MainHeader />
        <AppRoutes />
        <MainFooter />
    </>
  );
};

export default MainLayout;