import { Link, Outlet } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <nav>
        <Link to="/sanpham">sanpham</Link>
        <Link to="/lienhe">lienhe</Link>
      </nav>
      <Outlet />
      <Footer />
    </div>
  );
}

export default App;
