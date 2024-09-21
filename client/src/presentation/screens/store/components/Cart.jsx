import PropTypes from "prop-types";
import React from "react";

export const Cart = ({
  product,
  className,
  cartClassName,
  overlapGroupClassName,
  frameClassName,
  fillHeartClassName,
  heartSmallClassName,
  fillEyeClassName,
  quickViewClassName,
  frameClassNameOverride,
  elementClassName,
  divClassName,
  breedDryDogFoodClassName,
  divClassNameOverride,
  frameClassName1,
  divClassName1,
  frameClassName2,
  threeStarClassName,
  divClassName2,
  overlapGroupClassNameOverride,
  addToCartClassName,
  overlapClassName,
  frameClassName3,
  fillHeartClassNameOverride,
  heartSmallClassNameOverride,
  fillEyeClassNameOverride,
  quickViewClassNameOverride,
  eosWrapperClassName,
  eosClassName,
}) => {
  return (
    <div className={`inline-flex flex-col items-start gap-[12.09px] relative ${className}`}>
      <div
        className={`w-[203.98px] h-[188.87px] overflow-hidden rounded-[3.02px] bg-secondary relative ${cartClassName}`}
      >
        {product === "dslr-camera-no-discount" && (
          <div
            className={`absolute w-[204px] h-[31px] top-[158px] left-0 bg-yellow-400 rounded-[0px_0px_3.02px_3.02px] ${overlapGroupClassNameOverride}`}
          >
            <div
              className={`absolute top-[5px] left-[66px] [font-family:'Roboto-Medium',Helvetica] font-medium text-[#0a0a0b] text-[12.1px] tracking-[0] leading-[18.1px] whitespace-nowrap ${addToCartClassName}`}
            >
              Agregar al carrito
            </div>
          </div>
        )}

        <div
          className={`top-[9px] ${product === "dslr-camera-no-discount" ? "w-[168px]" : "w-[165px]"} ${
            product === "dslr-camera-no-discount" ? "left-[27px]" : "left-[30px]"
          } ${product === "dslr-camera-no-discount" ? "h-[138px]" : "h-[153px]"} ${
            product === "dslr-camera-no-discount" ? "absolute" : "relative"
          } ${
            product === "dslr-camera-no-discount"
              ? overlapClassName
              : ["dog-food-no-discount", "laptop-no-discount"].includes(product)
              ? overlapGroupClassName
              : undefined
          }`}
        >
          <div
            className={`inline-flex flex-col items-start top-0 gap-[6.04px] absolute ${
              product === "dslr-camera-no-discount" ? "left-[142px]" : "left-[139px]"
            } ${
              product === "dslr-camera-no-discount"
                ? frameClassName3
                : ["dog-food-no-discount", "laptop-no-discount"].includes(product)
                ? frameClassName
                : undefined
            }`}
          >
            <div
              className={`w-[25.69px] h-[25.69px] rounded-[12.84px] bg-primary relative ${
                product === "dslr-camera-no-discount"
                  ? fillHeartClassNameOverride
                  : ["dog-food-no-discount", "laptop-no-discount"].includes(product)
                  ? fillHeartClassName
                  : undefined
              }`}
            >
              <img
                className={`w-[18px] top-[-11226px] h-[18px] absolute ${
                  product === "dog-food-no-discount"
                    ? "left-[-4438px]"
                    : product === "laptop-no-discount"
                    ? "left-[-4892px]"
                    : "left-[-4665px]"
                } ${
                  product === "dslr-camera-no-discount"
                    ? heartSmallClassNameOverride
                    : ["dog-food-no-discount", "laptop-no-discount"].includes(product)
                    ? heartSmallClassName
                    : undefined
                }`}
                alt="Heart small"
              />
            </div>
            <div
              className={`w-[25.69px] h-[25.69px] rounded-[12.84px] bg-primary relative ${
                product === "dslr-camera-no-discount"
                  ? fillEyeClassNameOverride
                  : ["dog-food-no-discount", "laptop-no-discount"].includes(product)
                  ? fillEyeClassName
                  : undefined
              }`}
            >
              <img
                className={`w-[18px] top-[-11257px] h-[18px] absolute ${
                  product === "dog-food-no-discount"
                    ? "left-[-4438px]"
                    : product === "laptop-no-discount"
                    ? "left-[-4892px]"
                    : "left-[-4665px]"
                } ${
                  product === "dslr-camera-no-discount"
                    ? quickViewClassNameOverride
                    : ["dog-food-no-discount", "laptop-no-discount"].includes(product)
                    ? quickViewClassName
                    : undefined
                }`}
                alt="Quick view"
              />
            </div>
          </div>
          <div
            className={`w-36 left-0 h-[136px] overflow-hidden absolute ${
              product === "dslr-camera-no-discount" ? "top-0.5" : "top-[17px]"
            } ${
              product === "dslr-camera-no-discount"
                ? eosWrapperClassName
                : ["dog-food-no-discount", "laptop-no-discount"].includes(product)
                ? frameClassNameOverride
                : undefined
            }`}
          >
            <img
              className={`absolute ${
                product === "dog-food-no-discount"
                  ? "w-[87px]"
                  : product === "laptop-no-discount"
                  ? "w-[130px]"
                  : "w-[110px]"
              } ${
                product === "dog-food-no-discount"
                  ? "left-[-4299px]"
                  : product === "laptop-no-discount"
                  ? "left-[-4753px]"
                  : "left-[-4523px]"
              } ${product === "dslr-camera-no-discount" ? "top-[-11228px]" : "top-[-11243px]"} ${
                product === "dslr-camera-no-discount" ? "h-[123px]" : "h-[136px]"
              } ${
                product === "dslr-camera-no-discount"
                  ? eosClassName
                  : ["dog-food-no-discount", "laptop-no-discount"].includes(product)
                  ? elementClassName
                  : undefined
              }`}
              alt="Eos"
            />
          </div>
        </div>
      </div>
      <div className={`inline-flex flex-col items-start gap-[6.04px] flex-[0_0_auto] relative ${divClassName}`}>
        <div
          className={`font-title-16px-medium w-fit mt-[-0.76px] tracking-[var(--title-16px-medium-letter-spacing)] text-[length:var(--title-16px-medium-font-size)] [font-style:var(--title-16px-medium-font-style)] text-[#000000] relative font-[number:var(--title-16px-medium-font-weight)] whitespace-nowrap leading-[var(--title-16px-medium-line-height)] ${breedDryDogFoodClassName}`}
        >
          {product === "dog-food-no-discount" && <>Cuadros bordados</>}

          {product === "dslr-camera-no-discount" && <>Jabones ecológicos</>}

          {product === "laptop-no-discount" && <>Marroquinería</>}
        </div>
        <div className={`inline-flex items-center gap-[6.04px] flex-[0_0_auto] relative ${divClassNameOverride}`}>
          <div className={`inline-flex items-start gap-[9.07px] flex-[0_0_auto] relative ${frameClassName1}`}>
            <div
              className={`font-title-16px-medium w-fit mt-[-0.76px] tracking-[var(--title-16px-medium-letter-spacing)] text-[length:var(--title-16px-medium-font-size)] [font-style:var(--title-16px-medium-font-style)] text-[#17334b] relative font-[number:var(--title-16px-medium-font-weight)] whitespace-nowrap leading-[var(--title-16px-medium-line-height)] ${divClassName1}`}
            >
              {product === "dog-food-no-discount" && <>$100</>}

              {product === "dslr-camera-no-discount" && <>$360</>}

              {product === "laptop-no-discount" && <>$700</>}
            </div>
          </div>
          <div className={`inline-flex items-start gap-[6.04px] flex-[0_0_auto] relative ${frameClassName2}`}>
            <img
              className={`mt-[-11444.58px] flex-[0_0_auto] relative ${
                product === "dslr-camera-no-discount"
                  ? "ml-[-4532.86px]"
                  : product === "laptop-no-discount"
                  ? "ml-[-4759.51px]"
                  : "ml-[-4303.21px]"
              } ${threeStarClassName}`}
              alt="Three star"
            />
            <div
              className={`font-title-14px-semibold mt-[-0.76px] tracking-[var(--title-14px-semibold-letter-spacing)] text-[length:var(--title-14px-semibold-font-size)] opacity-50 [font-style:var(--title-14px-semibold-font-style)] text-text-2 relative h-[15.11px] font-[number:var(--title-14px-semibold-font-weight)] whitespace-nowrap leading-[var(--title-14px-semibold-line-height)] ${
                product === "laptop-no-discount" ? "w-[30.22px]" : "w-[24.18px]"
              } ${divClassName2}`}
            >
              {product === "dog-food-no-discount" && <>(35)</>}

              {product === "dslr-camera-no-discount" && <>(95)</>}

              {product === "laptop-no-discount" && <>(325)</>}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

Cart.propTypes = {
  product: PropTypes.oneOf(["dog-food-no-discount", "laptop-no-discount", "dslr-camera-no-discount"]),
};
