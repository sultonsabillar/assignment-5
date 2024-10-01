import { useState } from "react";
import { Link } from "react-router-dom";
import Image from "../assets/foto.jpg";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <div className="text-[#FEE715]">
      <div className="navbar px-4 md:px-10 fixed bg-[#101820]">
        <div className="navbar-start">
          <div className="avatar placeholder">
            <div className="bg-neutral text-neutral-content w-12 rounded-full">
              <img src={Image} alt="" />
            </div>
          </div>
        </div>
        <div className="navbar-end hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <Link to={"/"}>Home</Link>
            </li>
            <li>
              <Link to={"/about"}>About</Link>
            </li>
            <li>
              <Link to={"/experience"}>Experience</Link>
            </li>
            <li>
              <Link to={"/skills"}>Skills</Link>
            </li>
            <li>
              <Link to={"/interest"}>Interest</Link>
            </li>
            <li>
              <Link to={"/awards"}>Awards</Link>
            </li>
          </ul>
        </div>
        <div className="navbar-end lg:hidden">
          <div className="dropdown">
            <button className="btn btn-ghost" onClick={toggle}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block h-5 w-5 stroke-current"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </button>

            {isOpen && (
              <ul className="right-0  menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-auto p-2 shadow">
                <li>
                  <Link to={"/"} onClick={closeMenu}>
                    Home
                  </Link>
                </li>
                <li>
                  <Link to={"/about"} onClick={closeMenu}>
                    About
                  </Link>
                </li>
                <li>
                  <Link to={"/experience"} onClick={closeMenu}>
                    Experience
                  </Link>
                </li>
                <li>
                  <Link to={"/skills"} onClick={closeMenu}>
                    Skills
                  </Link>
                </li>
                <li>
                  <Link to={"/interest"} onClick={closeMenu}>
                    Interest
                  </Link>
                </li>
                <li>
                  <Link to={"/awards"} onClick={closeMenu}>
                    Awards
                  </Link>
                </li>
              </ul>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}