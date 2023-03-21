import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/logo.png"
import Menu from "../assets/menu.svg"
import Close from "../assets/close.svg"

const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "tech",
    title: "Tech",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const Navbar = () => {

  const [active, setActive] = useState("")
  const [toggle, setToggle] = useState(false)
  return(
    <nav className={`sm:px-16 px-6 w-full flex items-center py-5 fixed top-0 z-20 bg-primary`}>
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <Link to="/" className="flex items-center gap-2" onClick={() => {
          setActive("")
          window.scrollTo(0, 0)
        }}>
          <img src={Logo} alt="Logo" className="object-contain" width={60}/>
          <p className="text-white text-[18px] font-bold cursor-pointer  hover:opacity-75 duration-300">Tomás Quinteros <span className="sm:block hidden">Frontend Developer</span></p>
        </Link>
        <ul className="list-none hidden sm:flex flex-row gap-10">
          {
            navLinks.map((link) => {
              return <li key={link.id} onClick={() => setActive(link.title)} className={`${active === link.title ? "text-white" : "text-secondary"} hover:text-white text-[18px] font-medium cursor-pointer duration-300`}><a href={`#${link.id}`}>{link.title}</a></li>
            })
          }
        </ul>
        <div className="sm:hidden flex flex-1 justify-end items-center">
          <img src={toggle ? Close : Menu} alt="Menu Mobile" className="w-[28px] h-[28px] object-contain cursor-pointer" onClick={() => setToggle(!toggle)}/>
          <div className={`${!toggle ? "hidden" : "flex"} p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}>
            <ul className="list-none flex-col justify-end items-start  gap-4">
              {
                navLinks.map((link) => {
                  return <li key={link.id} onClick={() => {setActive(link.title);
                  setToggle(!toggle) }} className={`${active === link.title ? "text-white" : "text-secondary"} font-poppins font-medium cursor-pointer text-[16px]`}><a href={`#${link.id}`}>{link.title}</a></li>
                })
              }
            </ul>
          </div>
        </div>
      </div>
    </nav>
  )
};

export default Navbar;
