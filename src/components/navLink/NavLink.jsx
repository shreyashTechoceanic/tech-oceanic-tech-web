import { Link } from "react-router-dom";
import { useState } from 'react'


const NavLink = () => {
  const [activeLink, setActiveLink] = useState('home');

  return (
    <div className="flex gap-[46px] text-[#ADADAD] capitalize items-center text-[16px] leading-[18px] font-[400] ">
      <Link to="/" onClick={()=>{setActiveLink('home')}} className={activeLink==="home"?"text-white":""}>Home</Link>
      <Link to="/" onClick={()=>{setActiveLink('about')}} className={activeLink==="about"?"text-white":""}>About</Link>
      <Link to="/" onClick={()=>{setActiveLink('services')}} className={activeLink==="services"?"text-white":""}>Services</Link>
      <Link to="/" onClick={()=>{setActiveLink('technologies')}} className={activeLink==="technologies"?"text-white":""}>Technologies</Link>
      <Link to="/" onClick={()=>{setActiveLink('contact')}} className={activeLink==="contact"?"text-white":""}>Contact</Link>
    </div>
  );
};

export default NavLink;
