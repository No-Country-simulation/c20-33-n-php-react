import { Link, NavLink } from "react-router-dom";
import { Buttons } from "./Buttons";
import { FaShoppingCart } from "react-icons/fa";
import { useAuth } from "../hooks/useAuth";
import logo from "../../assets/img/logo3.png";
import {
  IoLogOutOutline,
  IoBagOutline,
  IoMenu,
  IoPersonCircleOutline,
  IoStarOutline,
} from "react-icons/io5";
import { useState } from "react";

export const Header = () => {
  const { isAuthenticated, logout, user } = useAuth();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-transparent h-20 w-full flex justify-between items-center px-4 border-b border-gray-300 relative">
      {/* Logo */}
      <section>
        <Link to="/" className="font-logo text-2xl font-extrabold text-white">
          <img
            className="w-32 hover:border border-white rounded-lg hover:cursor-pointer hover:scale-105 transition-all duration-300 hover:p-3 hover:shadow-lg"
            src={logo}
            alt="Logo"
          />
        </Link>
      </section>

      {/* Search bar and navigation */}
      {isAuthenticated ? (
        <section
          id="search-and-nav"
          className="flex-2 flex justify-between items-center space-x-1 !bg-secondary rounded-lg p-2 text-white"
        >
          <nav className="hidden md:flex space-x-1">
            <NavLink to="/categorias">
              <Buttons
                className="bg-accent text-black font-bold py-2 px-4 rounded hover:bg-accent transition duration-300"
                label="Categorías"
                type="button"
              />
            </NavLink>
            <NavLink to="/ofertas">
              <Buttons
                className="bg-accent text-black font-bold py-2 px-4 rounded hover:bg-accent transition duration-300"
                label="Ofertas"
                type="button"
              />
            </NavLink>
            <NavLink to="/historial">
              <Buttons
                className="bg-accent text-black font-bold py-2 px-4 rounded hover:bg-accent transition duration-300"
                label="Historial"
                type="button"
              />
            </NavLink>
          </nav>

          {/* Search bar */}
          <div className="flex-1 flex items-center space-x-2">
            <div className="w-full flex">
              <input
                className="w-full p-3 pl-10 rounded-l-lg border caret-border focus:outline-none focus:ring-2 focus:caret-primary focus:border-transparent"
                type="search"
                placeholder="Buscar productos o contenido..."
              />
              <Buttons
                onClick={() => console.log("Buscando...")}
                label="Buscar"
                type="button"
                className="bg-accent text-black font-bold py-2 px-4 rounded-r-lg hover:bg-accent800 transition duration-300"
              />
            </div>
          </div>

          {/* Navigation buttons */}
          <Buttons
            className="bg-accent text-black font-bold py-2 px-4 rounded hover:bg-accent transition duration-300"
            label={<IoBagOutline size={30} />}
            onClick={() => console.log("Ir a la tienda...")}
            type="button"
          />
          <Buttons
            className="bg-accent text-black font-bold py-2 px-4 rounded hover:bg-accent transition duration-300"
            label={<IoStarOutline size={30} />}
            onClick={() => console.log("Ir a favoritos")}
            type="button"
          />
          <Link to="/cart">
            <Buttons
              className="bg-accent text-black font-bold py-2 px-4 rounded hover:bg-accent transition duration-300"
              label={
                <FaShoppingCart size={30} aria-label="Carrito de compras" />
              }
              type="button"
            />
          </Link>
        </section>
      ) : (
        <section
          id="search"
          className="flex-1 flex justify-center items-center max-w-lg mx-4"
        >
          <div className="relative w-full flex">
            <input
              className="w-full p-3 pl-10 rounded-l-lg border caret-border focus:outline-none focus:ring-2 focus:caret-primary focus:border-transparent"
              type="search"
              placeholder="Buscar productos o contenido..."
              aria-label="Buscar"
            />
            <Buttons
              onClick={() => console.log("Buscando...")}
              label="Buscar"
              type="button"
              className="!bg-accent text-black font-bold py-2 px-4 rounded-r-lg hover:bg-accent800 transition duration-300"
            />
          </div>
        </section>
      )}

      {/* Mobile menu */}
      <div className="md:hidden flex items-center">
        <button onClick={() => setMenuOpen(!menuOpen)} className="text-white">
          <IoMenu size={30} />
        </button>
        {menuOpen && (
          <div className="absolute top-16 right-0 w-full bg-white shadow-lg z-50 flex flex-col items-start p-4 space-y-2">
            <Link to="/" onClick={() => setMenuOpen(false)}>
              <Buttons
                className="w-full text-left !bg-accent text-black font-bold py-2 px-4 rounded hover:bg-accent800 transition duration-300"
                label="Inicio"
                type="button"
              />
            </Link>
            {isAuthenticated ? (
              <>
                <Link to="/profile" onClick={() => setMenuOpen(false)}>
                  <Buttons
                    className="w-full text-left !bg-accent text-black font-bold py-2 px-4 rounded hover:bg-accent transition duration-300"
                    label={`${user.name} ${user.surname}`}
                    type="button"
                  />
                </Link>
                <Buttons
                  className="w-full text-left !bg-accent text-black font-bold py-2 px-4 rounded hover:bg-accent transition duration-300"
                  label="Logout"
                  onClick={logout}
                  type="button"
                />
              </>
            ) : (
              <>
                <Link to="/login" onClick={() => setMenuOpen(false)}>
                  <Buttons
                    className="w-full text-left !bg-accent text-black font-bold py-2 px-4 rounded hover:bg-accent800 transition duration-300"
                    label="Inicia sesión"
                    type="button"
                  />
                </Link>
                <Link to="/register" onClick={() => setMenuOpen(false)}>
                  <Buttons
                    className="w-full text-left !bg-accent text-black font-bold py-2 px-4 rounded hover:bg-accent800 transition duration-300"
                    label="Crea tu cuenta"
                    type="button"
                  />
                </Link>
              </>
            )}
          </div>
        )}
      </div>

      {/* Desktop navigation */}
      <nav className="hidden md:flex space-x-2 items-center">
        {!isAuthenticated ? (
          <>
            <Link to="/login">
              <Buttons
                className="!bg-accent text-black font-bold py-2 px-4 rounded hover:bg-accent800 transition duration-300"
                label="Inicia sesión"
                type="button"
              />
            </Link>
            <Link to="/register">
              <Buttons
                className="!bg-accent text-black font-bold py-2 px-4 rounded hover:bg-accent800 transition duration-300"
                label="Crea tu cuenta"
                type="button"
              />
            </Link>
            {/* Carrito */}
            <Link to="/cart">
              <Buttons
                className="bg-accent text-black font-bold py-2 px-4 rounded hover:bg-accent transition duration-300"
                label={
                  <FaShoppingCart size={30} aria-label="Carrito de compras" />
                }
                type="button"
              />
            </Link>
          </>
        ) : (
          <>
            <Link to="/profile">
              <Buttons
                className="!bg-accent text-black font-bold py-2 px-4 rounded hover:bg-accent transition duration-300"
                label={
                  <IoPersonCircleOutline size={30} aria-label="Mi perfil" />
                }
                type="button"
              />
            </Link>
            {/* Logout replaces Carrito */}
            <Buttons
              className="bg-accent text-black font-bold py-2 px-4 rounded hover:bg-accent transition duration-300"
              label={<IoLogOutOutline size={30} aria-label="Cerrar sesión" />}
              onClick={logout}
              type="button"
            />
          </>
        )}
      </nav>
    </header>
  );
};
