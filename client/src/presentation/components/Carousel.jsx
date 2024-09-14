import { Carousel } from "flowbite-react";

import artesania from "../../assets/img/courtney-cook-asBwMNN3AhI-unsplash.jpg";
import artesania2 from "../../assets/img/courtney-cook-jZLozXwxgbo-unsplash.jpg";
import artesania3 from "../../assets/img/junseong-lee-rqIuUELdUiw-unsplash.jpg";
import artesania4 from "../../assets/img/paula-heckathorn-hU74ThCaP4w-unsplash.jpg";

export function CarouselComponent() {
  return (
    <div className="h-56 sm:h-64 xl:h-80 2xl:h-96">
      <Carousel>
        <img src={artesania} alt="artesania de colores" />
        <img src={artesania2} alt="artesania de colores" />
        <img src={artesania3} alt="artesania de colores" />
        <img src={artesania4} alt="artesania de colores" />
      </Carousel>
    </div>
  );
}
