import React from 'react';

const AboutUs = () => {
  return (
    <div className="min-h-screen  text-black flex flex-col items-center justify-center p-6">
      <div className="max-w-4xl">
        <h1 className="text-4xl text-[#2BA84A] font-bold text-center mb-6">Sobre PearTech</h1>
        <p className="text-lg text-center mb-8">
          En <strong>PearTech</strong>, somos apasionados por la tecnología y estamos comprometidos con brindar la mejor experiencia a nuestros clientes.
          Desde nuestros inicios en 2020, trabajamos incansablemente para ofrecer los productos más innovadores del mercado, con un enfoque en calidad,
          seguridad y servicio.
        </p>

        <div className="space-y-10">
          <section>
            <h2 className="text-3xl font-semibold mb-4 text-[#2BA84A]">Nuestra Misión</h2>
            <p className="text-base leading-relaxed">
              Hacer accesible la mejor tecnología, garantizando que cada compra sea una experiencia segura, rápida y confiable. Creemos que la tecnología
              tiene el poder de mejorar vidas, y trabajamos para facilitar el acceso a las últimas innovaciones.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-semibold mb-4 text-[#2BA84A]">Por Qué Elegirnos</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Envíos rápidos y seguros a todo el país con seguimiento en tiempo real.</li>
              <li>Protección extendida de garantía en todos los productos.</li>
              <li>Soporte al cliente 24/7 listo para asistirte en cualquier momento.</li>
              <li>Ofrecemos productos exclusivos de las marcas más reconocidas a nivel mundial.</li>
              <li>Plataforma de compra fácil de usar, con múltiples opciones de pago seguras.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-3xl font-semibold mb-4 text-[#2BA84A]">Nuestros Valores</h2>
            <p className="text-base leading-relaxed">
              En PearTech, valoramos la innovación, la satisfacción del cliente y la confianza. Buscamos siempre mejorar nuestro servicio y asegurarnos de que nuestros clientes tengan acceso a productos tecnológicos fiables y actualizados.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-semibold mb-4 text-[#2BA84A]">Nuestro Equipo</h2>
            <p className="text-base leading-relaxed">
              Contamos con un equipo de expertos en tecnología y atención al cliente que trabajan día a día para brindarte la mejor experiencia posible. 
              Desde ingenieros especializados en hardware hasta asesores de soporte técnico, estamos aquí para ayudarte a sacar el máximo provecho de tus productos.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-semibold mb-4 text-[#2BA84A]">Compromiso Ambiental</h2>
            <p className="text-base leading-relaxed">
              En PearTech, también estamos comprometidos con el cuidado del medio ambiente. Trabajamos con proveedores que comparten nuestros valores de sostenibilidad,
              y ofrecemos productos con certificaciones ecológicas. Además, nos esforzamos por reducir nuestra huella de carbono a través de envíos responsables y
              embalajes reciclables.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-semibold mb-4 text-[#2BA84A]">Lo Que Dicen Nuestros Clientes</h2>
            <p className="text-base leading-relaxed italic">
              &quot;PearTech me sorprendió con la rapidez del envío y la calidad de sus productos. ¡Totalmente recomendado!&quot; – Juan P.
            </p>
            <p className="text-base leading-relaxed italic">
              &quot;El equipo de soporte 24/7 me ayudó en todo momento con mis dudas. Gran atención al cliente.&quot; – María G.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
