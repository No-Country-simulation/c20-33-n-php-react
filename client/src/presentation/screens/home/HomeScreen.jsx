import { Cards } from "../../components/Cards";

export const HomeScreen = () => {
  return (
    <div>
      <section>
      </section>
      <section
        className="relative h-screen bg-cover bg-center mx-auto"
        style={{
          backgroundImage: "url('./src/assets/img/vitrina2.jpg')",
          backgroundAttachment: "fixed", // Efecto de paralaje
        }}
      >
        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <h2 className="text-white text-4xl sm:text-6xl font-bold">VITRINA</h2>
        </div>
      </section>
      <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 p-4">
        <Cards label="Ofertas" />
        <Cards label="Novedades" />
        <Cards label="Lo que dicen nuestros clientes" />
        <Cards label="Lo que dicen nuestros clientes" />
      </section>
      <section className="p-4">
        <h2 className="text-2xl font-bold">Novedades</h2>
      </section>
      <section className="p-4">
        <h2 className="text-2xl font-bold">Lo que dicen nuestros clientes</h2>
      </section>
    </div>
  );
};
