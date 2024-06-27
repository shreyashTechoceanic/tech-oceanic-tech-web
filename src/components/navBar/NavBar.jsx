import Logo from "../logo/Logo"
import  NavLink  from "../navLink/NavLink"
 const NavBar = function() {
  return (
    <div className="flex items-center gap-[159px] p-5 ">
      <div>
        <Logo/>
      </div>
      <div className="flex items-center justify-center gap-4 ">
        <NavLink/>

        <div>
        hi
      </div>
      </div>
     
    </div>
  );
}
export default NavBar;