import "./App.css";
import { NavBar } from "./components";
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
    </>
  );
}

export default App;
