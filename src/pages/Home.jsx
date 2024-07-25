import React from "react";
import Slide from "../components/Slide";
import CardNew from "../components/CardNew";
import BestSeller from "../components/BestSeller";
import Banner from "../components/Banner"; 
import Gallery from "../components/Gallery"; 

function Home() {
  return (
    <div>
      <Slide />
      <CardNew />
      <BestSeller />
      <Banner />
      <Gallery />
    </div>
  );
}

export default Home;
