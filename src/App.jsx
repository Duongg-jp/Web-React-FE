import { Link, Outlet } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Slide from "./components/Slide";
import CardNew from "./components/CardNew";
import BestSeller from "./components/BestSeller";
import Banner from "./components/Banner";
import Gallery from "./components/Gallery";

function App() {
  return (
    <div className="App">
      <Header />
      <Slide/>
      <CardNew/>
      <BestSeller/>
      <Banner/>
      <Gallery/>
      <Footer />
    </div>
  );
}

export default App;
