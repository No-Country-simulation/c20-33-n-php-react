import React from "react";
import { FaTruck, FaCreditCard, FaHeadphones } from "react-icons/fa"; 

export default function FeatureSection() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <FeatureCard
          icon={<FaTruck className="w-6 h-6" />}
          title="Envíos Rápidos y Seguros"
          description="Espera tus productos sin preocupaciones."
        />
        <FeatureCard
          icon={<FaCreditCard className="w-6 h-6" />}
          title="Pagos Seguros y Flexibles"
          description="Elige entre múltiples opciones de pago"
        />
        <FeatureCard
          icon={<FaHeadphones className="w-6 h-6" />}
          title="Estamos Aquí para Ayudarte"
          description="Nuestro equipo te asiste en lo que necesites."
        />
      </div>
    </div>
  );
}

function FeatureCard({ icon, title, description }) {
  return (
    <div className="flex flex-col items-center text-center ">
      <div className="bg-black rounded-full p-4 mb-4">
        <div className="text-white">{icon}</div>
      </div>
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}
