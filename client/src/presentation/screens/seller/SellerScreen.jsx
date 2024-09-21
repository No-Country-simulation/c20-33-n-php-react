//import React from "react";



//import { Button } from "@mui/material";
import { NavBarBuyer } from "../../components/NavBarBuyer";
import { Payment } from "../../components/Payment";
import { Settings } from "../../components/Settings";
import { ProgressScrubber } from "../../components/ProgressScrubber";
import { Buttons } from "../../components/Buttons";
import { Link, NavLink } from "react-router-dom";

import 'tailwindcss/tailwind.css';


import configBlur from "../../../assets/img/config-blur-1.png";
import settings from "../../../assets/img/settings-02.svg";
import home02 from "../../../assets/img/home-02.svg";
import payment01 from "../../../assets/img/payment-01.svg";
import arrowDown01 from "../../../assets/img/arrow-down-01.svg";
import packageImg from "../../../assets/img/package.svg";
import inbox from "../../../assets/img/inbox.svg";
import analytics01 from "../../../assets/img/analytics-01.svg";
import div from "../../../assets/img/div.svg";
import moreHorizontal from "../../../assets/img/more-horizontal.svg";
import catalogue from "../../../assets/img/catalogue.svg";
import agreement02 from "../../../assets/img/agreement-02.svg";

export const SellerScreen = () => {
  return (
    <div className="bg-white flex flex-row justify-center w-full">
      <div className="bg-white overflow-hidden [background:linear-gradient(180deg,rgb(238,238,238)_29.25%,rgb(168,200,228)_90.84%)] w-[1440px] h-[1024px] relative">
        <div className="absolute w-[1440px] h-[946px] top-19 left-0 [background:linear-gradient(180deg,rgb(238,238,238)_29.25%,rgb(168,200,228)_90.84%)]">
          <p className="absolute top-[49px] left-[379px] [font-family:'Roboto-Regular',Helvetica] font-normal text-[#000000] text-[32px] tracking-[0] leading-[normal] whitespace-nowrap">
            Te damos la bienvenida a tu panel de control
          </p>
          <div className="absolute w-[1038px] h-64 top-60 left-[378px]">
            <div className="relative h-72 bg-white shadow-[0px_4px_4px_#00000040]">
              <div className="absolute w-[1002px] h-[59px] top-[42px] left-[18px]">
                <div className="absolute w-[453px] h-[129px] top-[71px] left-[517px]">
                  <div className="relative w-[455px] h-[131px] -top-px -left-px border-[0.2px] border-solid border-[#0a0a0b]">
                    <div className="relative w-[453px] h-[129px] bg-white rounded-sm border border-solid border-[#f0f0f0]">
                      <div className="absolute top-[15px] left-3.5 [font-family:'Roboto-Regular',Helvetica] font-normal text-[#000000d9] text-sm tracking-[0] leading-[22.0px] whitespace-nowrap">
                        Ventas totales
                      </div>
                      <div className="absolute w-[449px] h-px top-[59px] left-0.5 bg-[#f0f0f0]">
                        <div className="h-px bg-[#f0f0f0]" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="absolute w-[455px] h-[129px] top-[71px] left-[29px]">
                  <div className="relative w-[457px] h-[131px] -top-px -left-px border-[0.2px] border-solid border-[#0a0a0b]">
                    <div className="relative w-[455px] h-[129px] bg-white rounded-sm border border-solid border-[#f0f0f0]">
                      <div className="absolute top-[15px] left-[15px] [font-family:'Roboto-Regular',Helvetica] font-normal text-[#000000d9] text-sm tracking-[0] leading-[22.0px] whitespace-nowrap">
                        Sesiones del sitio
                      </div>
                      <div className="absolute w-[451px] h-px top-[59px] left-0.5 bg-[#f0f0f0]">
                        <div className="h-px bg-[#f0f0f0]" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col w-[600px] items-start absolute top-[38px] left-[29px] overflow-hidden">
                  <p className="relative self-stretch mt-[-1.00px] [font-family:'Roboto-Regular',Helvetica] font-normal text-[#0a0a0b] text-base tracking-[0] leading-[21.0px]">
                    Tus estadísticas aparecerán aquí una vez que se publique tu sitio
                  </p>
                  <div className="inline-flex items-center gap-[400px] relative flex-[0_0_auto] overflow-hidden">
                    <div className="relative w-px h-px" />
                    <div className="relative w-px h-px" />
                  </div>
                </div>
              </div>
              <div className="absolute w-[210px] h-[58px] top-4 left-[810px]">
                <div className="absolute w-40 top-3.5 left-[25px] [font-family:'Roboto-Regular',Helvetica] font-normal text-[#e1b505] text-[15px] tracking-[0] leading-[25.1px]">
                  <a href="#" style={{ color: '#e1b505' }}>
                    Ver todos los informes
                  </a>
                </div>
              </div>
              <div className="absolute w-[137px] h-[58px] top-[39px] left-[13px]">
                <div className="absolute top-[5px] left-9 [font-family:'Roboto-SemiBold',Helvetica] font-semibold text-[#000000d9] text-xl tracking-[0] leading-[25.1px] whitespace-nowrap">
                  Analíticas
                </div>
              </div>
            </div>
          </div>
          <div className="absolute w-[1038px] h-[238px] top-[560px] left-[378px]">
            <div className="relative h-[475px] bg-white">
              <div className="absolute w-[1001px] h-[145px] top-[42px] left-[18px]">
                <div className="flex flex-col w-[600px] items-start absolute top-[38px] left-[25px] overflow-hidden">
                  <div className="relative self-stretch mt-[-1.00px] [font-family:'Roboto-Regular',Helvetica] font-normal text-[#0a0a0b] text-base tracking-[0] leading-[21.0px]">
                    Tus actualizaciones más recientes
                  </div>
                  <div className="inline-flex items-center gap-[400px] relative flex-[0_0_auto] overflow-hidden">
                    <div className="relative w-px h-px" />
                    <div className="relative w-px h-px" />
                  </div>
                </div>
                <p className="absolute top-[71px] left-[403px] [font-family:'Roboto-SemiBold',Helvetica] font-semibold text-[#000000d9] text-base tracking-[0] leading-[22.0px] whitespace-nowrap">
                  No hay actividad para mostrar
                </p>
                <p className="absolute top-[103px] left-[339px] [font-family:'Roboto-Regular',Helvetica] font-normal text-[#000000d9] text-sm tracking-[0] leading-[22.0px] whitespace-nowrap">
                  Confirgura tu sitio para ver las últimas actualizaciones.
                </p>
              </div>
              <div className="absolute w-[210px] h-[58px] top-2.5 left-[810px]">
                <div className="absolute w-40 top-3.5 left-[25px] [font-family:'Roboto-Regular',Helvetica] font-normal text-[#e1b505] text-[15px] tracking-[0] leading-[25.1px]">
                  <a href="#" style={{ color: '#e1b505' }}>
                    Ver todos los informes
                  </a>
                </div>
              </div>
              <div className="absolute w-32 h-[58px] top-[30px] left-[13px]">
                <div className="absolute top-3.5 left-[31px] [font-family:'Roboto-SemiBold',Helvetica] font-semibold text-[#000000d9] text-xl tracking-[0] leading-[25.1px] whitespace-nowrap">
                  Feed de actividad
                </div>
              </div>
              <img
                className="absolute w-[985px] h-[218px] top-[166px] left-1.5 object-cover"
                alt="Config blur"
                src={configBlur}
              />
              <div className="flex flex-col w-[321px] items-start absolute top-[179px] left-[368px]">
                <Link to="/" onClick={() => setMenuOpen(false)}>
                    <Buttons
                      className="w-full text-left !bg-accent text-black font-bold py-2 px-4 rounded hover:bg-accent800 transition duration-300"
                      label="Ir a configuración"
                      type="button"
                    />
                </Link>
              </div>
            </div>
          </div>
          <div className="flex flex-col w-[1037px] h-20 items-center justify-center gap-2.5 px-[46px] py-[22px] absolute top-32 left-[378px] bg-[#faf9f6] shadow-[0px_4px_4px_#00000040]">
           <div className="inline-flex items-center justify-center gap-12 relative flex-[0_0_auto]">
            <div className="inline-flex items-center justify-center gap-2.5 relative flex-[0_0_auto] rounded-[2px_2px_0px_0px] overflow-hidden">
               <span>Plan gratuito</span>
                <a href="#" style={{ color: '#e1b505' }}>
                 comprar planes
                </a>
            </div>
            <div className="inline-flex items-center justify-center gap-2.5 relative flex-[0_0_auto] rounded-[2px_2px_0px_0px] overflow-hidden">
              <span>Sin dominio</span>
                <a href="#" style={{ color: '#e1b505' }}>
                 conectar
                </a>
           </div>
           <div className="inline-flex items-center justify-center gap-2.5 relative flex-[0_0_auto] rounded-[2px_2px_0px_0px] overflow-hidden">
             <span>Sin email empresarial</span>
               <a href="#" style={{ color: '#e1b505' }}>
                conectar
               </a>
           </div>
           <div className="relative w-[211.7px] h-[26px] mr-[-2.00px]">
            <div className="relative w-[210px] h-[26px]">
              <span>Editar información comercial</span>
                <a href="#" style={{ color: '#e1b505' }}>
                   <img src={settings} alt="Settings" />
                </a>
            </div>
           </div>
           </div>
          </div>
          <div className="absolute w-[212px] h-8 top-[53px] left-[1205px]">
            <div className="w-[212px] items-start flex flex-col relative">

              <Link to="/Store" onClick={() => setMenuOpen(false)}>
                  <Buttons
                    className="w-full text-left !bg-accent text-black font-bold py-2 px-4 rounded hover:bg-accent800 transition duration-300"
                    label="Crear Tienda"
                    type="button"
                  />
              </Link>
            </div>
          </div>
          <div className="absolute w-[330px] h-[853px] top-0 left-[25px] bg-color-primario rounded-[10px] overflow-hidden">
            <div className="relative w-[356px] h-[1403px] left-[-13px]">
              <div className="absolute w-[330px] h-[853px] top-0 left-[13px] bg-[#1a3955]" />
              <div className="flex flex-col w-[356px] h-[1293px] items-center absolute top-[110px] left-0">
                <div className="flex flex-col items-center justify-center gap-[29px] relative self-stretch w-full flex-[0_0_auto]">
                  <div className="flex flex-col items-start relative self-stretch w-full flex-[0_0_auto]">
                    <div className="relative self-stretch w-full h-[47.01px]">
                      <img className="absolute w-6 h-6 top-3 left-[29px]" alt="Home" src={home02}/>
                      <div className="absolute w-60 top-[13px] left-[65px] [font-family:'Roboto-Regular',Helvetica] font-normal text-white text-[16.5px] tracking-[0] leading-[normal]">
                        Home
                      </div>
                    </div>
                    <div className="flex flex-col items-center flex-[0_0_auto] relative self-stretch w-full">
                    <img className="absolute w-6 h-6 top-3 left-[29px]" alt="Catalogue" src={payment01} />
                      <div className="h-[47.01px] relative self-stretch w-full">
                        <Payment className="!h-6 !absolute !left-[29px] !w-6 !top-3" />
                        <div className="absolute w-60 top-[13px] left-[65px] [font-family:'Roboto-Regular',Helvetica] font-normal text-white text-[16.5px] tracking-[0] leading-[normal]">
                          Recibir pagos
                        </div>
                        <img className="absolute w-6 h-6 top-3 left-[306px]" alt="Arrow down" src={arrowDown01}/>
                      </div>
                    </div>
                    <div className="flex flex-col items-center relative self-stretch w-full flex-[0_0_auto]">
                      <div className="relative self-stretch w-full h-[47.01px]">
                        <img className="absolute w-6 h-6 top-3 left-[29px]" alt="Package" src={packageImg} />
                        <div className="absolute w-60 top-[13px] left-[65px] [font-family:'Roboto-Regular',Helvetica] font-normal text-white text-[16.5px] tracking-[0] leading-[normal]">
                          Órdenes
                        </div>
                        <img className="absolute w-6 h-6 top-3 left-[306px]" alt="Arrow down" src={arrowDown01} />
                      </div>
                    </div>
                    <div className="flex flex-col items-center flex-[0_0_auto] relative self-stretch w-full">
                      <div className="h-[47.01px] relative self-stretch w-full">
                        <img className="absolute w-6 h-6 top-3 left-[29px]" alt="Catalogue" src={catalogue} />
                        <div className="absolute w-60 top-[13px] left-[65px] [font-family:'Roboto-Regular',Helvetica] font-normal text-white text-[16.5px] tracking-[0] leading-[normal]">
                          Catálogo de productos
                        </div>
                        <img className="absolute w-6 h-6 top-3 left-[306px]" alt="Arrow down" src={arrowDown01} />
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col items-start relative self-stretch w-full flex-[0_0_auto]">
                    <div className="relative self-stretch w-full h-6">
                      <img className="absolute w-6 h-6 top-0 left-7" alt="Inbox" src={inbox} />
                      <div className="absolute w-[241px] top-px left-[65px] [font-family:'Roboto-Regular',Helvetica] font-normal text-white text-[16.5px] tracking-[0] leading-[normal]">
                        Bandeja de entrada
                      </div>
                    </div>
                    <div className="flex flex-col items-center pt-2.5 pb-0 px-0 flex-[0_0_auto] relative self-stretch w-full">
                      <div className="h-[47.48px] relative self-stretch w-full">
                        <img className="absolute w-6 h-6 top-3 left-[29px]" alt="Agreement" src={agreement02}/>
                        <div className="absolute w-60 top-[13px] left-[65px] [font-family:'Roboto-Regular',Helvetica] font-normal text-white text-[16.5px] tracking-[0] leading-[normal]">
                          Clientes reales y potenciales
                        </div>
                        <img className="absolute w-6 h-6 top-3 left-[306px]" alt="Arrow down" src={arrowDown01} />
                      </div>
                    </div>
                    <div className="flex flex-col items-center relative self-stretch w-full flex-[0_0_auto]">
                      <div className="relative self-stretch w-full h-[47.48px]">
                        <img className="absolute w-6 h-6 top-3 left-[29px]" alt="Analytics" src={analytics01}/>
                        <div className="absolute w-60 top-[13px] left-[65px] [font-family:'Roboto-Regular',Helvetica] font-normal text-white text-[16.5px] tracking-[0] leading-[normal]">
                          Análisis
                        </div>
                        <img className="absolute w-6 h-6 top-3 left-[306px]" alt="Arrow down" src={arrowDown01} />
                      </div>
                    </div>
                    <div className="flex flex-col items-center relative self-stretch w-full flex-[0_0_auto]">
                    <img className="absolute w-6 h-6 top-3 left-[29px]" alt="Setting" src={arrowDown01}  />
                      <div className="relative self-stretch w-full h-[47.48px]">
                        <Settings className="!h-6 !absolute !left-[29px] !w-6 !top-3" />
                        <div className="absolute w-60 top-[13px] left-[65px] [font-family:'Roboto-Regular',Helvetica] font-normal text-white text-[16.5px] tracking-[0] leading-[normal]">
                          Configuración
                        </div>
                      </div>
                    </div>
                  </div>
                  <img className="absolute w-[330px] h-0.5 top-[200px] left-[13px]" alt="Div" src={div} />
                </div>
              </div>
              <div className="flex flex-col w-[228px] items-start pl-9 pr-[39px] py-0 absolute top-[41px] left-[65px] bg-neutral-3 rounded-[100px] overflow-hidden">
                <div className="w-[50px] rounded-[59px] relative h-2">
                  <div className="w-[800px] left-[-800px] bg-primary-6 rounded-[100px] relative h-2" />
                </div>
              </div>
              <div className="absolute top-[69px] left-[65px] [font-family:'Roboto-Regular',Helvetica] font-normal text-white text-[11px] tracking-[0] leading-[normal] whitespace-nowrap">
                1/7 Completados
              </div>
              <div className="absolute top-5 left-[65px] [font-family:'Roboto-Regular',Helvetica] font-normal text-white text-xs tracking-[0] leading-[normal] whitespace-nowrap">
                Configura tu tienda
              </div>

              <ProgressScrubber value={1/7} />
              
            </div>
          </div>
        </div>
{/*         <NavBarBuyer
          avatarClassName="bg-[url(../../../src/assets/img/3d-avatar-2.png)]"
          className="!absolute !left-6 !top-2"
          property1="vendedor"
        />  */}
      {/*   <img className="absolute w-6 h-6 top-[-372px] left-[436px]" alt="More horizontal" src={moreHorizontal} /> */}
      </div>
    </div>
  );
};