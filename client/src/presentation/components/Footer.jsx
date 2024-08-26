import "../../assets/css/footer.css";

export const Footer = () => {
  return (
    <>
      <div className="footer-container">
        <section className="footer-section">
          <h2>Conocenos</h2>
          <ul>
            <li>Quienes somos</li>
            <li>Trabaja con nosotros</li>
            <li>Acerca de nosotros</li>
          </ul>
        </section>

        <section className="footer-section">
          <h2>Servicios</h2>
          <ul>
            <a href="/login">
              <li>Vendedor</li>
            </a>
            <a href="/login">
              <li>Cliente</li>
            </a>
            <li>Preguntas frecuentes</li>
          </ul>
        </section>

        <section className="footer-section">
          <h2>Legal</h2>
          <ul>
            <li>Términos y Condiciones</li>
            <li>Privacidad</li>
            <li>Aviso de privacidad</li>
          </ul>
        </section>
      </div>
    </>
  );
};
