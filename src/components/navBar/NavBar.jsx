import Logo from "../logo/Logo";
import NavLink from "../navLink/NavLink";
import { NavContactLinks } from "../index";
import { useState } from "react";
const NavBar = function () {
  const [sideBar, setSideBar] = useState(false);
  return (
    <>
      <div className="flex items-center gap-[180px]">
        <div>
          <Logo />
        </div>
        <div className="hidden md:flex items-center justify-center gap-[78px] ">
          <NavLink />
          <div>
            <NavContactLinks />
          </div>
        </div>

        <div className="md:hidden text-3xl font-semibold ">
          {sideBar ? (
            <div>
              <button
                onClick={() => {
                  setSideBar((prv) => !prv);
                }}
              >
                X
              </button>
            </div>
          ) : (
            <div>
              <button
                className="rotate-90"
                onClick={() => {
                  setSideBar((prv) => !prv);
                }}
              >
                |||
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
};
export default NavBar;
