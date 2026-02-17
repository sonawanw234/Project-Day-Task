import React from "react";

import Hero from "./Hero"       ;
import Artwork from "./Artwork";
import PROFILES from "./PROFILES";  
import AboutUs from "./About_Us";
import NEWSLETTER from "./NEWSLETTER";






const Home = () => {
  return (
    <>
     <Hero/>
     <AboutUs />
     <Artwork />
        <PROFILES />
        <NEWSLETTER />


     
      



    </>
  );
};

export default Home;