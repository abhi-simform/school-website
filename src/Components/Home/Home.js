import React from "react";

import HeroHome from "./HeroHome/HeroHome";
import AboutSection from "./AboutSection/AboutSection";
import Profile from "./Profile/Profile";
import News from "./News/News";
import Gallery from "./Gallery/Gallery";

const Home = () => {
  return (
    <>
      <HeroHome />
      <AboutSection />
      <Profile />
      <News />
      <Gallery />
    </>
  );
};

export default Home;
