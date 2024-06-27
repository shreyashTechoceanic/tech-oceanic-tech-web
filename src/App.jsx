import "./App.css";
import Footer from "./components/footer/Footer";
import NavBar from "./components/navBar/NavBar";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <>
      <div className="w-full">
        <div className="w-[460px] md:w-[1259px] p-5 mx-auto ">
          <NavBar />
        </div>
        <Outlet />
      </div>
      <div>
        <Footer />
      </div>
    </>
  );
}

export default App;
