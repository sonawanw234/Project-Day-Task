import React, { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";

// Lazy pages
const Home = lazy(() => import("../pages/Home/home"));
const GALLERY = lazy(() => import("../pages/GALLERY/GALLERY"));
const CONTACT = lazy(() => import("../pages/CONTACT/CONTACT"));
const Story = lazy(() => import("../pages/Story/Story"));
const PRESSRELEASE = lazy(() =>
  import("../pages/ARTIST/ARTIST")
);

const AppRoutes = () => {
  return (
    <Suspense
      fallback={
        <div className="flex justify-center items-center h-screen text-lg font-semibold">
          Loading...
        </div>
      }
    >
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/story" element={<Story />} />
        <Route path="/gallery" element={<GALLERY />} />
        <Route path="/press-release" element={<PRESSRELEASE />} />
        <Route path="/contact" element={<CONTACT />} />
      </Routes>
    </Suspense>
  );
};

export default AppRoutes;