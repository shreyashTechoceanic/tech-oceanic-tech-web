import { Link } from "react-router-dom";

const NavLink = () => {
  return (
    <div className="flex gap-2 capitalize items-center text-white text-[16px] leading-[18px] font-[400] ">
      <Link to="/">Home</Link>
      <Link to="/">About</Link>
      <Link to="/">Services</Link>
      <Link to="/">Technologies</Link>
      <Link to="/">Contact</Link>
    </div>
  );
};

export default NavLink;
