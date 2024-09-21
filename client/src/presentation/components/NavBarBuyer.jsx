//import PropTypes from "prop-types";


//import { Header } from "./Header";
import { ArrowDown } from './ArrowDown';
import { Favourite } from "./Favourite";
import { Notification } from "./Notification";
import { Search } from "./Search";
//import { Buttons } from "../../components/Buttons";

import { Link, NavLink } from "react-router-dom";
import { Buttons } from "./Buttons";
import { FaShoppingCart } from "react-icons/fa";
import { useAuth } from "../hooks/useAuth";
import logo from "../../assets/img/logotipo-negro.svg";

import {
  IoLogOutOutline,
  IoBagOutline,
  IoMenu,
  IoPersonCircleOutline,
  IoStarOutline,
} from "react-icons/io5";

import { useState } from "react";

import arrorDown from "../../assets/img/arrow-down-01.svg"
import search from "../../assets/img/search-01.svg"
import avatar from "../../assets/img/3d-avatar-2.png"

export const NavBarBuyer = ({ property1, className, avatarClassName }) => {

  const { isAuthenticated, logout, user } = useAuth();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="bg-transparent h-20 w-full flex justify-between items-center px-4 border-b border-gray-300 relative">
      {/* Logo */}
      <section>
        <Link to="/" className="font-logo text-2xl font-extrabold text-white">
          <img
            className="w-[97px] h-16 hover:border border-white rounded-lg hover:cursor-pointer hover:scale-105 transition-all duration-300 hover:p-3 hover:shadow-lg"
            src={logo}
            alt="Logo"
          />
        </Link>
      </section>
      <div className={`w-[1390px] h-16 ${className}`}>
        <div className="flex w-[1390px] items-center justify-between absolute top-0 left-0">
          <img className="relative" />
          <div className="flex flex-col w-[1038px] h-12 items-start gap-2.5 px-4 py-[9px] relative bg-[#1a3955] rounded-[10px]">
            <div className="flex items-center gap-[70px] relative self-stretch w-full flex-[0_0_auto]">

              <div className="relative w-[271px] h-5">
                <div className="inline-flex items-center gap-[34px] relative">

                  <div className="relative w-[101px] h-5">
                    <div className="relative w-[99px] h-5">
                      <img style={{ position: 'relative', left: '58px' }} className="w-6 h-6" alt="Explorar" src={arrorDown} />
                      <div className="absolute w-[99px] top-px left-0 [font-family:'Roboto-Regular',Helvetica] font-normal text-[#faf9f6] text-[15px] tracking-[0.50px] leading-[normal]">
                        Explorar
                      </div>
                    </div>
                  </div>

                  <div className="relative w-fit [font-family:'Roboto-Regular',Helvetica] font-normal text-[#faf9f6] text-[15px] tracking-[0.50px] leading-[normal] whitespace-nowrap">
                    <a href="#" >
                      Ayuda
                    </a>
                  </div>

                  <div className="relative w-fit [font-family:'Roboto-Regular',Helvetica] font-normal text-[#faf9f6] text-[15px] tracking-[0.50px] leading-[normal] whitespace-nowrap">
                    <a href="#" >
                      Historial
                    </a>
                  </div>

                </div>
              </div>

              <div className="flex flex-col w-[330px] h-[29px] items-start gap-2.5 px-6 py-0 relative bg-[#d9d9d9] rounded-[10px]">
                <div className="inline-flex items-center gap-5 relative flex-[0_0_auto]">
                  <Search className="!h-4 !w-4 !relative" />
                  <img className="absolute w-5 h-5 top-1 left-1 bg-cover bg-[50%_50%]" alt="Search" src={search} style={{ filter: 'grayscale(1)' }} />
                  <div className="relative w-fit mt-1 [font-family:'Roboto-Regular',Helvetica] font-normal text-neutral-500 text-sm tracking-[0.20px] leading-7 whitespace-nowrap">
                    Búsqueda
                  </div>
                </div>
              </div>

              <div className="flex w-[265px] items-center gap-10 relative">
                <div className="flex w-2 items-center gap-2.5 relative" />
                <div className="relative w-[120px] h-6">
                  <a href="#" >
                    <img className="absolute w-6 h-6 top-0 left-0 bg-cover bg-[50%_50%]" alt="Profile" src={avatar} />
                  </a>
                  <div className="absolute top-[3px] left-[31px] [font-family:'Roboto-Regular',Helvetica] font-normal text-white text-sm text-center tracking-[0] leading-[normal] whitespace-nowrap">
                    <a href="#" >
                      Martin Costa
                      {/*  <p>{user?.name} {user?.surname}</p> */}
                    </a>
                  </div>
                </div>

              </div>

              <Buttons
                className="bg-accent text-white font-bold py-2 px-4 rounded  transition duration-300"
                label={<IoLogOutOutline size={30} aria-label="Cerrar sesión" />}
                onClick={logout}
                type="button"
              />

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

/* NavBarBuyer.propTypes = {
  property1: PropTypes.oneOf(["vendedor"]),
}; */

