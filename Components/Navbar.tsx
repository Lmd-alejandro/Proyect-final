import React, {useState} from 'react';

export default function Navbar() {
    const [active, setActive] = useState("nav__menu");
    const [icon, setIcon] = useState("nav__toggler");
    const navToggle = () => {
      if (active === "nav__menu") {
        setActive("nav__menu nav__active");
      } else setActive("nav__menu");
  
      // Icon Toggler
      if (icon === "nav__toggler") {
        setIcon("nav__toggler toggle");
      } else setIcon("nav__toggler");
    };

    return (
      <nav className="">
        <ul className="flex mx-[500px] space-x-[5px] mt-[20px]">
          <li className="">
            <a href="#" className="bg-slate-400 rounded text-zinc-50 ">
              Home
            </a>
          </li>
          <li className="">
            <a href="#" className="bg-slate-400 rounded text-zinc-50 mt-[500px]">
              About
            </a>
          </li>
          <li className="">
            <a href="#" className="bg-slate-400 rounded text-zinc-50">
              Service
            </a>
          </li>
          <li className="">
            <a href="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/cristiano-ronaldo-of-portugal-looks-dejected-following-news-photo-1624346993.jpg?crop=1.00xw:1.00xh;0,0&resize=640:*" className="bg-slate-400 rounded text-zinc-50">
              Contact
            </a>
          </li>
          <li className="">
            <a href="#" className="bg-slate-400 rounded text-zinc-50">
              Portfolio
            </a>
          </li>
        </ul>
        <div onClick={navToggle} className={icon}>
          <div className=""></div>
          <div className=""></div>
          <div className=""></div>
        </div>
      </nav>
    );
}