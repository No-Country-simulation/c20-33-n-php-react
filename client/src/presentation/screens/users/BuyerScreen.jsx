export const BuyerScreen = () => {
  // Obtén el objeto de usuario desde localStorage y parsea el JSON
  const user = JSON.parse(localStorage.getItem("user"));

  // Asegúrate de que el objeto de usuario no sea null y tenga la propiedad `name`
  const userName = user && user.user ? user.user.name : "Invitado";

  return (
    <>
      <div className="flex min-h-screen items-center justify-center text-3xl font-semibold text-center text-white">
        <h2>
          Bienvenido {userName} {/* Muestra el nombre del usuario */}
        </h2>
      </div>
    </>
  );
};
