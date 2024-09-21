import React from "react";
import { useState } from "react";
import { Button } from "@mui/material";
import { Buttons } from "../../components/Buttons";
import { Header } from "../../../presentation/components/Header";
import { AddCircle } from "./components/AddCircle";
import { ArrowMoveUpLeft } from "./components/ArrowMoveUpLeft";
import { ArrowMoveUpRight } from "./components/ArrowMoveUpRight";
import { Cart } from "./components/Cart";
import { NavBarBuyer} from "./components/NavBarSaveStore";
import { LogoTipoNegro } from "../../components/LogoTipoNegro";
import { Pagina } from "./components/Pagina";
import { Search } from "./components/Search";
import { Image } from "./components/Image";
import { Link, NavLink } from "react-router-dom";
import logo from "../../../assets/img/logotipo-negro.svg";

import seccion1 from '../../../assets/img/seccion1.png'
import seccion2 from '../../../assets/img/seccion2.jpg'
import seccion3 from '../../../assets/img/seccion3.jpg'

import arte from '../../../assets/img/h5-baner-3-1.svg'
import indumentaria from '../../../assets/img/h5-baner-1-1.svg'
import decoracion from '../../../assets/img/h5-baner-1-1-2.svg'



export const CreateStore = () => {



  const [currentSlide, setCurrentSlide] = useState(0);

  // Lista de imágenes del fondo para el slider
  const images = [
    seccion1,
    seccion2,
    seccion3,
  ];

  const categories = [
    {
      label: "Arte y Escultura",
      image: arte,
    },
    {
      label: "Indumentaria",
      image: indumentaria,
    },
    {
      label: "Decoración",
      image: decoracion,
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === images.length - 1 ? 0 : prevSlide + 1
    );
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === 0 ? images.length - 1 : prevSlide - 1
    );
  };



  return (
    <div className="bg-white flex flex-row justify-center w-full">
      <div className="bg-white overflow-hidden [background:linear-gradient(180deg,rgb(238,238,238)_29.25%,rgb(168,200,228)_90.84%)] w-[1440px] h-[1024px] relative">
        <div className="absolute w-[1440px] h-[1767px] top-2 left-0">
          <div className="absolute w-[1440px] h-[946px] top-[120px] left-0 [background:linear-gradient(180deg,rgb(238,238,238)_29.25%,rgb(168,200,228)_90.84%)]" />
          <div className="absolute w-[93px] h-[880px] top-[120px] left-[25px] bg-color-primario rounded-[0px_0px_10px_10px] overflow-hidden">
            <div className="relative h-[880px] bg-[#1a3955]">
              <div className="absolute w-10 h-[41px] top-[171px] left-[25px]">

                <img className="absolute w-6 h-6 top-0 left-2 " src="../../../src/assets/img/file-02.svg" />
                <div className="absolute top-6 left-0 [font-family:'Roboto-Regular',Helvetica] font-normal text-white text-[11px] tracking-[0] leading-[16.5px] whitespace-nowrap">
                  Páginas
                </div>
              </div>

              <img className="absolute w-6 h-6 top-5 left-0 !left-[29px] !top-[39px]" src="../../../src/assets/img/colors.svg" />
              <div className="absolute top-[67px] left-6 [font-family:'Roboto-Regular',Helvetica] font-normal text-white text-[11px] tracking-[0] leading-[16.5px] whitespace-nowrap">
                Estilos
              </div>
              
              <img className="!h-6 !absolute !left-[29px] !w-6 !top-[105px] " src="../../../src/assets/img/image-01.svg" />
              <div className="absolute top-[131px] left-[19px] [font-family:'Roboto-Regular',Helvetica] font-normal text-white text-[11px] tracking-[0] leading-[16.5px] whitespace-nowrap">
                Multimedia
              </div>
            
            </div>
          </div>
          <div className="top-[60px] absolute w-[1391px] h-16 left-6">
            <div className="flex w-[1391px] items-center justify-around gap-[84px] relative top-3">
              <div className="flex flex-col w-[1391px] h-12 items-start gap-2.5 px-4 py-2.5 relative bg-off-white">
                <div className="flex w-[1355px] items-center gap-[326px] relative flex-[0_0_auto] mb-[-1.00px]">
                  
                  <div className="relative w-[162.77px] h-[18px]">
                  
                    <div className="inline-flex items-center gap-[34px] relative">
                      Página de inicio
                    </div>
                    
                  </div>
                  <div className="flex flex-col w-[386px] h-[29px] items-start gap-2.5 px-6 py-0 relative bg-[#17334b] rounded-[10px]">
                    <div className="inline-flex items-center gap-5 relative flex-[0_0_auto] mr-[-5.00px]">
                      <p className="relative w-fit mt-[4.00px] [font-family:'Roboto-Regular',Helvetica] font-normal text-transparent text-sm tracking-[0.20px] leading-7 whitespace-nowrap">
                        <span className="text-[#f9f9f9] tracking-[0.03px]">
                          https://www.vitrina.com/mysite&nbsp;&nbsp;&nbsp;&nbsp;
                        </span>
                        <span className="text-yellow-400 tracking-[0.03px]">Conecta tu dominio</span>
                        <span className="text-[#f9f9f9] tracking-[0.03px]">
                          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{" "}
                        </span>
                      </p>
                    </div>
                  </div>

                  <div className="flex w-[148px] items-center gap-10 relative">
                    <div className="inline-flex items-center gap-2.5 relative flex-[0_0_auto]">
                      <img className="!h-5 !relative !left-[unset] !w-5 !top-[unset]"  src="../../../src/assets/img/arrow-move-up-left.svg" />
                      <img className="!relative !left-[unset] !top-[unset] " src="../../../src/assets/img/arrow-move-up-right.svg" />
                    </div>
                    <div className="inline-flex items-center justify-end gap-2.5 relative flex-[0_0_auto]">
                      <img className="!relative !left-[unset] !top-[unset] fill-[#000000]"  src="../../../src/assets/img/add-circle.svg" />
                      <div className="relative w-fit [font-family:'Roboto-Regular',Helvetica] font-normal text-[#111315] text-[15px] tracking-[0] leading-[normal] whitespace-nowrap">
                        50%
                      </div>
                    </div>

                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute w-[1102px] h-[784px] top-[200px] left-[228px] bg-white">

          {   <NavBarBuyer
              arrowDownArrowDown="../../../src/assets/img/arrow-down-01-2.svg"
              className="!absolute !left-20 !top-1.5"
              notificationNotification="../../../src/assets/img/notification-02-2.svg"
              searchSearch="../../../src/assets/img/icono.svg"
              favouriteFavourite="../../../src/assets/img/favourite.svg"
              property1="sinlogin"
            />}
              <Link to="/" className="font-logo text-2xl font-extrabold text-white">
              <img
                className="w-[85px] h-14 hover:border border-white rounded-lg hover:cursor-pointer hover:scale-100 transition-all duration-300 hover:p-2 hover:shadow-lg"
                src={logo}
                alt="Logo"
              />
             </Link>
            <div className="absolute w-[1102px] h-[490px] top-[57px] left-0 bg-white rounded-[3.83px] border-[0.77px] border-solid border-[#dedede]">
              <div className="relative h-[490px]">

              <section
                className="relative h-[50vh] bg-cover bg-center mx-auto"
                style={{
                  backgroundImage: `url(${images[currentSlide]})`,
                  backgroundAttachment: "fixed",
                  backgroundColor: "white", // Asegura el color blanco como respaldo
                }}
              >
                <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
                  <div className="text-center text-white">
                    <h2 className="text-4xl sm:text-6xl font-bold">
                      Aprovecha las mejores ofertas
                    </h2>
                    <p className="mt-4">
                      Descubre la amplia gama de productos con los mejores precios
                    </p>
                    <button className="mt-6 px-6 py-3 bg-yellow-500 text-black font-semibold rounded">
                      Comprar ahora
                    </button>
                  </div>
                </div>
                <div className="absolute inset-0 flex justify-between items-center px-4">
                  <button className="text-white text-3xl" onClick={prevSlide}>
                    {"<"}
                  </button>
                  <button className="text-white text-3xl" onClick={nextSlide}>
                    {">"}
                  </button>
                </div>
              </section>


              {/* Sección de Categorías con Slider */}
              <section className="relative bg-gray-50 mt-[50vh" >
                <h2 className="text-2xl font-bold text-center">Categorías</h2>
                <div className="flex items-center justify-center">
                  <button onClick={prevSlide} className="px-8 py-4 text-2xl font-bold text-blck-500 hover:text-black-700 transition duration-300 ease-in-out">
                    {"<"}
                  </button>
                  <div className="overflow-hidden w-[80vw]">
                    <div
                      className="flex transition-transform duration-500"
                      style={{ transform: `translateX(-${currentSlide * (100 / 3)}%)` }}
                    >
                      {categories.map((category, index) => (
                        <div
                          key={index}
                          className="w-1/3 flex-shrink-0 text-center p-4"
                        >
                          <img
                            src={category.image}
                            alt={category.label}
                            className="h-48 w-full object-cover mb-4"
                          />
                          <h3 className="text-lg font-semibold">{category.label}</h3>
                          <button className="mt-8 px-4 py-2 bg-yellow-500 text-black rounded mb-6">
                            Explorar productos
                          </button>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-center justify-center">
                    <button
                       onClick={nextSlide}
                       className="px-8 py-4 text-2xl font-bold text-blck-500 hover:text-black-700 transition duration-300 ease-in-out" >
                       {">"}
                   </button>
                  </div>
                  
                </div>
              </section>










 {/*                <div className="absolute w-[786px] h-[5px] top-[466px] left-40 overflow-hidden">
                  <div className="absolute w-[47px] h-2 -top-0.5 left-[337px] bg-light-background-color" />
                  <div className="absolute w-12 h-2 -top-0.5 left-[385px] bg-light-background-color opacity-50" />
                </div>

                <img
                  className="left-[1057px] absolute w-[18px] h-[34px] top-[307px]"
                  alt="Carousel control"
                  src="carousel-control-next-2.svg"
                />
                <img
                  className="left-[31px] absolute w-[18px] h-[34px] top-[307px]"
                  alt="Carousel control"
                  src="../../../src/assets/img/carousel-control-prev.svg"
                /> */}

       </div>
     </div>
{/* 
            <div className="flex w-[795px] items-start gap-[15.31px] absolute top-[600px] left-[155px] shadow-[0px_3.06px_3.06px_#0000004c,0px_6.12px_9.19px_4.59px_#00000026]">
              <div className="relative w-[254.19px] h-[177.62px]">
                <div className="relative w-[254px] h-[178px] -top-px -left-px bg-white border-[0.77px] border-solid border-[#ebebeb]">
                  <div className="relative w-[253px] h-[177px]">
                    <div className="absolute w-[253px] h-[177px] top-0 left-0">
                      <img
                        className="absolute w-[169px] h-[177px] top-0 left-[83px]"
                        alt="Baner"
                        src="../../../src/assets/img/h5-baner-3-1.svg"
                      />
                    </div>
                    <div className="absolute w-[253px] h-[177px] top-0 left-0">
                      <div className="absolute top-16 left-[7px] [font-family:'Roboto-Bold',Helvetica] font-bold text-[#000000] text-[18.4px] tracking-[0.08px] leading-[24.5px]">
                        Arte y <br />
                        Escultura
                      </div>
                      <Button>Explorar productos</Button>
                    </div>
                  </div>
                </div>
              </div>

              <div className="w-[254.95px] relative h-[177.62px]">
                <div className="relative w-[255px] h-[179px] -top-px left-px bg-white border-[0.77px] border-solid border-[#ebebeb]">
                  <div className="relative w-[253px] h-[180px]">

                    <div className="absolute w-[253px] h-[178px] top-0 left-0">
                      <img
                        className="absolute w-[170px] h-[178px] top-0 left-[83px]"
                        alt="Baner"
                        src="../../../src/assets/img/h5-baner-1-1.svg"
                      />
                    </div>

                    <div className="absolute w-[253px] h-[180px] top-0 left-0">
                      <div className="absolute top-[77px] left-2.5 [font-family:'Roboto-Bold',Helvetica] font-bold text-[#000000] text-[18.4px] tracking-[0.08px] leading-[24.5px] whitespace-nowrap">
                        Indumentaria
                      </div>
                      <Button>Explorar productos</Button>
                    </div>

                  </div>
                </div>
              </div>
              
              <div className="w-[248.06px] relative h-[177.62px]">
                <div className="relative w-[255px] h-[179px] -top-px left-px bg-white border-[0.77px] border-solid border-[#ebebeb]">
                  <div className="relative w-[253px] h-[180px]">
                    <div className="absolute w-[253px] h-[178px] top-0 left-0" />
                    <img
                        className="absolute w-[253px] h-[178px] top-0 left-0"
                        alt="Baner"
                        src="../../../src/assets/img/h5-baner-1-1-2.svg"
                      />
                    <div className="absolute w-[253px] h-[180px] top-0 left-0">
                      <div className="absolute top-[76px] left-7 [font-family:'Roboto-Bold',Helvetica] font-bold text-[#111315] text-[18.4px] tracking-[0.08px] leading-[24.5px] whitespace-nowrap">
                        Decoración
                      </div>
                      <Button>Explorar productos</Button>
                    </div>

                  </div>
                </div>
              </div>
              
            </div> */}
            


         {/*   <div className="absolute top-[560px] left-[132px] [font-family:'Roboto-Bold',Helvetica] font-bold text-[#000000] text-[24.5px] tracking-[0] leading-[31.9px] whitespace-nowrap">
              Categorías
            </div>
            
            <img
              className="absolute w-[15px] h-[34px] top-[689px] left-[966px]"
              alt="Carousel control"
              src="../../../src/assets/img/carousel-control-next.svg"
            />
            <img
              className="absolute w-[18px] h-[34px] top-[689px] left-[124px]"
              alt="Carousel control"
              src="../../../src/assets/img/carousel-control-prev.svg"
            /> */}
    </div>
{/* 
            <div className="absolute w-[1101px] h-[783px] top-[984px] left-[230px] bg-white">
              <div className="absolute w-[587px] h-[148px] top-[109px] left-[252px]">
               <div className="flex flex-col w-[587px] items-center gap-[12.23px] relative">
                <div className="flex flex-col items-center gap-[18.35px] relative self-stretch w-full flex-[0_0_auto]">
                  <p className="relative self-stretch mt-[-0.76px] [font-family:'Roboto-Bold',Helvetica] font-bold text-[#000000] text-[36.7px] text-center tracking-[0] leading-[44.0px]">
                    Encuentra tus productos preferidos en Vitrina
                  </p>
                  <p className="self-stretch [font-family:'Roboto-Regular',Helvetica] font-normal text-[13.8px] text-center leading-[20.6px] relative text-[#000000] tracking-[0]">
                    Explora nuestra colección de productos destacados, seleccionados por su calidad y estilo. Desde moda
                    hasta decoración del hogar.
                  </p>
                 </div>
                </div>
              </div>
             </div> */}

             <div className="top-0 absolute w-[1391px] h-16 left-6">
             <div className="w-[1391px] justify-between flex items-center relative">
             
             <Link to="/" className="font-logo text-2xl font-extrabold text-white">
  {/*             <img
                className="w-[97px] h-16 hover:border border-white rounded-lg hover:cursor-pointer hover:scale-105 transition-all duration-300 hover:p-3 hover:shadow-lg"
                src={logo}
                alt="Logo"
              /> */}
             </Link>
             
             {/* Menú Publicar */}
                 <div className="inline-flex flex-col h-12 items-start gap-2.5 px-4 py-[9px] relative flex-[0_0_auto] bg-[#1a3955] rounded-[10px]">
                   <div className="gap-[116px] inline-flex items-center relative flex-[0_0_auto]">

 {/*                       <div className="inline-flex items-center gap-[34px] relative flex-[0_0_auto]">
                           <div className="relative w-fit mt-[-1.00px] [font-family:'Roboto-Regular',Helvetica] font-normal text-[#faf9f6] text-[15px] tracking-[0.50px] leading-[normal] whitespace-nowrap">
                            Ayuda
                           </div>

                           <div className="relative w-fit mt-[-1.00px] [font-family:'Roboto-Regular',Helvetica] font-normal text-[#faf9f6] text-[15px] tracking-[0.50px] leading-[normal] whitespace-nowrap">
                             Ajustes
                           </div>
                       </div> */}

     {/*                   <div className="w-[330px] h-[29px] gap-2.5 px-6 py-0 rounded-[10px] flex flex-col items-start relative bg-[#d9d9d9]">
                        <div className="inline-flex items-center gap-5 relative flex-[0_0_auto]">
                          <img className="absolute w-5 h-5 top-1 left-1 bg-cover bg-[50%_50%] !h-4 !relative !left-[unset] !w-4 !top-[unset]" alt="Search" src="../../../src/assets/img/search-01.svg" style={{ filter: 'grayscale(1)' }} />
                           Busca en el editor
                        </div>
                       </div> */}

                         <div className="relative w-[313px] h-[29px]">
                           <div className="flex w-[313px] h-[29px] items-center gap-[34px] relative">
                               <div className="relative w-fit [font-family:'Roboto-Regular',Helvetica] font-normal text-[#faf9f6] text-[15px] tracking-[0.50px] leading-[normal] whitespace-nowrap">
                                 Guardar
                               </div>
                               <div className="relative w-fit [font-family:'Roboto-Regular',Helvetica] font-normal text-yellow-400 text-[15px] tracking-[0.50px] leading-[normal] whitespace-nowrap">
                                Vista previa
                               </div>
                               <Link to="/" onClick={() => setMenuOpen(false)}>
                                <Buttons
                                  className="w-full text-left !bg-accent text-black font-bold py-2 px-4 rounded hover:bg-accent800 transition duration-300"
                                   label="Publicar"
                                   type="button"
                                 />
                               </Link>
                          </div>
                        </div>

                      </div>
                     </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

