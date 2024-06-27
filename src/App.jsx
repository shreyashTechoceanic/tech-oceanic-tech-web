import "./App.css";
import Footer from "./components/footer/Footer";
import NavBar from "./components/navBar/NavBar";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <>
      <div className="w-full flex flex-col gap-10">
        <div className="w-[1270px]">
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
