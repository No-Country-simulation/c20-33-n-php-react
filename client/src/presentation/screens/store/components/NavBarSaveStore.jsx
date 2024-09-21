import PropTypes from "prop-types";
import React from "react";
import { ArrowDown } from "./ArrowDown";
import { LogoTipoNegro } from "../../../components/LogoTipoNegro";
import { Notification } from "./Notification";
import { Search } from "./Search";

export const NavBarBuyer = ({
  property1,
  className,
  arrowDownArrowDown,
  searchSearch,
  notificationNotification,
}) => {
  return (
    <div
      className={`${property1 === "tienda" ? "w-[1391px]" : "w-[933px]"} ${
        property1 === "tienda" ? "h-16" : "h-[49px]"
      } ${className}`}
    >
      <div
        className={`flex items-center relative ${property1 === "tienda" ? "w-[1391px]" : "w-[901px]"} ${
          property1 === "sinlogin" ? "left-[11px]" : ""
        } ${property1 === "sinlogin" ? "top-[-5px]" : ""} ${property1 === "sinlogin" ? "gap-[68.91px]" : ""} ${
          property1 === "sinlogin" ? "h-[49px]" : ""
        } ${property1 === "tienda" ? "justify-between" : ""}`}
      >
        <LogoTipoNegro
          className={property1 === "sinlogin" ? "!h-[49px] !w-[74.27px] !relative" : "!h-16 !w-[97px] !relative"}
        />
        {property1 === "tienda" && (
          <div className="relative w-[73px] h-4">
            <div className="relative w-[69px] h-[19px] -top-px">
              <div className="absolute w-[62px] top-0 left-0 [font-family:'Raleway-Bold',Helvetica] font-bold text-black text-base tracking-[0] leading-[normal]">
                Meraki
              </div>
              <img className="absolute w-2.5 h-[5px] top-[11px] left-[59px]" alt="Arrow down" />
            </div>
          </div>
        )}

        <div
          className={`inline-flex flex-col items-start flex-[0_0_auto] bg-[#1a3955] relative ${
            property1 === "tienda" ? "gap-2.5" : "gap-[7.66px]"
          } ${property1 === "tienda" ? "px-4 py-[9px]" : "px-[12.25px] py-[6.89px]"} ${
            property1 === "tienda" ? "h-12" : "h-[36.75px]"
          } ${property1 === "tienda" ? "rounded-[10px]" : "rounded-[7.66px]"}`}
        >
          <div
            className={`inline-flex items-center flex-[0_0_auto] relative ${
              property1 === "tienda" ? "gap-[116px]" : "gap-[29.09px]"
            }`}
          >
            <div
              className={`relative ${property1 === "sinlogin" ? "w-[214.86px]" : ""} ${
                property1 === "tienda" ? "inline-flex" : ""
              } ${property1 === "tienda" ? "items-center" : ""} ${property1 === "tienda" ? "gap-[34px]" : ""} ${
                property1 === "tienda" ? "flex-[0_0_auto]" : ""
              } ${property1 === "sinlogin" ? "h-[15.31px]" : ""}`}
            >
              {property1 === "sinlogin" && (
                <div className="inline-flex items-center gap-[26.03px] relative">
                  <div className="relative w-[77.8px] h-[15.31px]">
                    <div className="relative w-[76px] h-[15px]">
                    
                      <div className="absolute w-[76px] top-px left-0 [font-family:'Roboto-Regular',Helvetica] font-normal text-[#faf9f6] text-[11.5px] tracking-[0.38px] leading-[normal]">
                        Categorias
                      </div>
                      <ArrowDown arrowDown={arrowDownArrowDown} className="!h-[15px] !left-[60px] !w-[15px]" />
                    </div>
                  </div>
                  <div className="relative w-fit [font-family:'Roboto-Regular',Helvetica] font-normal text-[#faf9f6] text-[11.5px] tracking-[0.38px] leading-[normal] whitespace-nowrap">
                    Ofertas
                  </div>
                  <div className="relative w-fit [font-family:'Roboto-Regular',Helvetica] font-normal text-[#faf9f6] text-[11.5px] tracking-[0.38px] leading-[normal] whitespace-nowrap">
                    Historial
                  </div>
                </div>
              )}

              {property1 === "tienda" && (
                <>
                  <div className="relative w-fit mt-[-1.00px] [font-family:'Roboto-Regular',Helvetica] font-normal text-[#faf9f6] text-[15px] tracking-[0.50px] leading-[normal] whitespace-nowrap">
                    Ayuda
                  </div>
                  <div className="relative w-fit mt-[-1.00px] [font-family:'Roboto-Regular',Helvetica] font-normal text-[#faf9f6] text-[15px] tracking-[0.50px] leading-[normal] whitespace-nowrap">
                    Ajustes
                  </div>
                </>
              )}
            </div>
            <div
              className={`flex flex-col items-start bg-[#d9d9d9] relative ${
                property1 === "tienda" ? "w-[330px]" : "w-[252.66px]"
              } ${property1 === "tienda" ? "gap-2.5" : "gap-[7.66px]"} ${
                property1 === "tienda" ? "px-6 py-0" : "px-[18.38px] py-0"
              } ${property1 === "tienda" ? "h-[29px]" : "h-[22.2px]"} ${
                property1 === "tienda" ? "rounded-[10px]" : "rounded-[7.66px]"
              }`}
            >
              <div
                className={`inline-flex items-center flex-[0_0_auto] relative ${
                  property1 === "tienda" ? "gap-5" : "gap-[15.31px]"
                }`}
              >
                <Search
                  className={
                    property1 === "tienda"
                      ? "!h-4 !relative !left-[unset] !w-4 !top-[unset]"
                      : "!h-[12.25px] !relative !left-[unset] !w-[12.25px] !top-[unset]"
                  }
                  search={property1 === "sinlogin" ? searchSearch : undefined}
                />
                <div
                  className={`[font-family:'Roboto-Regular',Helvetica] w-fit text-neutral-500 font-normal whitespace-nowrap relative ${
                    property1 === "tienda" ? "mt-[-1.00px]" : "mt-[-0.77px]"
                  } ${property1 === "tienda" ? "tracking-[0.20px]" : "tracking-[0.15px]"} ${
                    property1 === "tienda" ? "text-sm" : "text-[10.7px]"
                  } ${property1 === "tienda" ? "leading-7" : "leading-[21.4px]"}`}
                >
                  {property1 === "sinlogin" && <>Búsqueda</>}

                  {property1 === "tienda" && <>Busca en el editor</>}
                </div>
              </div>
            </div>
            <div
              className={`relative ${property1 === "tienda" ? "w-[313px]" : "w-[198.3px]"} ${
                property1 === "sinlogin" ? "flex" : ""
              } ${property1 === "sinlogin" ? "items-center" : ""} ${property1 === "sinlogin" ? "gap-[26.03px]" : ""} ${
                property1 === "tienda" ? "h-[29px]" : ""
              } ${property1 === "sinlogin" ? "justify-end" : ""}`}
            >
              {property1 === "sinlogin" && (
                <>
                  <div className="relative w-fit ml-[-0.05px] [font-family:'Roboto-Regular',Helvetica] font-normal text-off-white text-[11.5px] text-center tracking-[0] leading-[normal] whitespace-nowrap">
                    Crear cuenta
                  </div>
                  <div className="relative w-fit [font-family:'Roboto-Regular',Helvetica] font-normal text-off-white text-[11.5px] text-center tracking-[0] leading-[normal] whitespace-nowrap">
                    Ingresar
                  </div>
                  <div className="inline-flex items-center justify-end gap-[7.66px] relative flex-[0_0_auto]">
                    <Notification
                      className="!h-[15.31px] !relative !left-[unset] !w-[15.31px] !top-[unset]"
                      notification={notificationNotification}
                    />
                    <div className="relative w-[15.31px] h-[15.31px]">
                      <div className="relative w-3.5 h-3.5 top-px left-px">
                        <img className="absolute w-[9px] h-[7px] top-[3px] left-1" alt="Vector" />
                        <img className="absolute w-[11px] h-px top-[3px] left-[3px]" alt="Vector" />
                        <img className="absolute w-1 h-1 top-2.5 left-px" alt="Vector" />
                        <img className="absolute w-1 h-1 top-2.5 left-2" alt="Vector" />
                        <img className="absolute w-[5px] h-px top-[11px] left-1" alt="Vector" />
                        <img className="absolute w-[5px] h-[11px] top-0 left-0" alt="Vector" />
                      </div>
                    </div>
                  </div>
                </>
              )}

              {property1 === "tienda" && (
                <div className="flex w-[313px] h-[29px] items-center gap-[34px] relative">
                  <div className="relative w-fit [font-family:'Roboto-Regular',Helvetica] font-normal text-[#faf9f6] text-[15px] tracking-[0.50px] leading-[normal] whitespace-nowrap">
                    Guardar
                  </div>
                  <div className="relative w-fit [font-family:'Roboto-Regular',Helvetica] font-normal text-yellow-400 text-[15px] tracking-[0.50px] leading-[normal] whitespace-nowrap">
                    Vista previa
                  </div>
                  <div className="w-[104px] h-8 items-start mt-[-1.50px] mb-[-1.50px] flex flex-col relative">
                    <div className="items-center justify-center gap-2 flex-1 self-stretch w-full grow bg-acento rounded-lg overflow-hidden flex flex-col relative">
                      <div className="flex items-center justify-center gap-2 px-6 py-2.5 relative flex-1 self-stretch w-full grow">
                        <div className="relative w-fit mt-[-5.00px] mb-[-3.00px] [font-family:'Roboto-Regular',Helvetica] font-normal text-black text-[13px] text-center tracking-[0.10px] leading-5 whitespace-nowrap">
                          Publicar
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

NavBarBuyer.propTypes = {
  property1: PropTypes.oneOf(["tienda", "sinlogin"]),
  arrowDownArrowDown: PropTypes.string,
  searchSearch: PropTypes.string,
  notificationNotification: PropTypes.string,
};