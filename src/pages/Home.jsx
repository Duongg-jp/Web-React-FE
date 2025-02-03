import React from "react";
import Slide from "../components/Slide";
import CardNew from "../components/CardNew";
import BestSeller from "../components/BestSeller";
import Banner from "../components/Banner"; 

function Home() {
  return (
    <div className="">
      <Slide />
      <CardNew />
      <BestSeller />
      <Banner />
       </div>
  );
}

export default Home;
