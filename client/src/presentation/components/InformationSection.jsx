
import logo3 from '../../assets/img/logotipo-negro.svg'

export default function InformationSection() {
    return (
      <section className="bg-white py-12 px-4 sm:px-6 lg:px-8 ">
        <div className="max-w-7xl mx-auto grid grid-cols-5  gap-8">
          <div>
            <img src={logo3} alt="Descripción de la imagen" className=" h-28" />
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Sobre nosotros</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-600 hover:text-gray-900">Contacto</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-900">FAQs</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-900">Compras</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-900">Devoluciones</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-900">Términos</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Privacidad</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-600 hover:text-gray-900">Blog</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-900">Empleo</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-900">Prensa</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-900">Afiliados</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-900">Partners</a></li>
            </ul>
          </div>
          <div className='col-span-2'>
            <h3 className="text-lg font-semibold mb-4">Suscríbete</h3>
            <p className="text-sm text-gray-600 mb-4">Únete a nuestra lista de correo para recibir actualizaciones y ofertas exclusivas.</p>
            <form className="space-y-2">
              <input 
                type="email" 
                placeholder="Ingresa tu correo electrónico" 
                className="w-full p-2 border border-gray-300 rounded"
              />
              <button type="submit" className="w-full bg-white hover:bg-gray-100 text-black font-bold py-2 px-4 border border-black rounded">
                Suscríbete
              </button>
            </form>
            <p className="text-xs text-gray-500 mt-2">
              Al suscribirte, aceptas nuestra Política de privacidad y das tu consentimiento para recibir actualizaciones.
            </p>
          </div>
        </div>
      </section>
    )
  }
  