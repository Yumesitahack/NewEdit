import React, { useState } from "react";

const Contacto: React.FC = () => {
  const [mostrarFormulario, setMostrarFormulario] = useState(false);

  return (
    <section id="contacto" className="py-20 px-4 text-white text-center">
      <h2 className="text-2xl font-bold mb-4">Contacto</h2>
      <button
        onClick={() => setMostrarFormulario(!mostrarFormulario)}
        className="bg-pink-300 hover:bg-pink-400 text-white py-2 px-4 rounded-full mb-6"
      >
        {mostrarFormulario ? "Cerrar formulario" : "Abrir formulario"}
      </button>

      {mostrarFormulario && (
        <form
          action="https://formsubmit.co/yume19monasterio@gmail.com"
          method="POST"
          className="max-w-md mx-auto bg-white text-black p-6 rounded-lg shadow-lg"
        >
          {/* Campos ocultos */}
          <input type="hidden" name="_captcha" value="false" />
          {/* Redirección a tu página de agradecimiento */}
          <input
            type="hidden"
            name="_next"
            value="https://new-edit-zeta.vercel.app/gracias.html"
          />
          {/* Opcional: asunto del correo */}
          <input type="hidden" name="_subject" value="Nuevo mensaje desde el portafolio" />

          {/* Nombre */}
          <div className="mb-4 text-left">
            <label className="block mb-2 font-semibold">Nombre y Apellido</label>
            <input
              type="text"
              name="name"
              required
              className="w-full px-4 py-2 border rounded"
            />
          </div>

          {/* Correo */}
          <div className="mb-4 text-left">
            <label className="block mb-2 font-semibold">Correo</label>
            <input
              type="email"
              name="email"
              required
              className="w-full px-4 py-2 border rounded"
            />
          </div>

          {/* Mensaje */}
          <div className="mb-4 text-left">
            <label className="block mb-2 font-semibold">Mensaje</label>
            <textarea
              name="message"
              required
              className="w-full px-4 py-2 border rounded"
            ></textarea>
          </div>

          {/* Botón */}
          <button
            type="submit"
            className="bg-purple-600 hover:bg-purple-700 text-white py-2 px-4 rounded-full"
          >
            Enviar
          </button>
        </form>
      )}
    </section>
  );
};

export default Contacto;
