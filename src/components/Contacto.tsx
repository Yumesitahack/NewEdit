import React, { useState } from "react";

const Contacto: React.FC = () => {
  const [mostrarFormulario, setMostrarFormulario] = useState(false);
  const [enviado, setEnviado] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.currentTarget;
    const data = new FormData(form);

    await fetch("https://formsubmit.co/yume19monasterio@gmail.com", {
      method: "POST",
      body: data,
      headers: {
        Accept: "application/json",
      },
    });

    setEnviado(true);
    form.reset();
  };

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
          onSubmit={handleSubmit}
          className="max-w-md mx-auto bg-white text-black p-6 rounded-lg shadow-lg"
        >
          <input type="hidden" name="_captcha" value="false" />

          <div className="mb-4 text-left">
            <label className="block mb-2 font-semibold">
              Nombre y Apellido
            </label>
            <input
              type="text"
              name="name"
              required
              className="w-full px-4 py-2 border rounded"
            />
          </div>

          <div className="mb-4 text-left">
            <label className="block mb-2 font-semibold">Correo</label>
            <input
              type="email"
              name="email"
              required
              className="w-full px-4 py-2 border rounded"
            />
          </div>

          <div className="mb-4 text-left">
            <label className="block mb-2 font-semibold">Mensaje</label>
            <textarea
              name="message"
              required
              className="w-full px-4 py-2 border rounded"
            ></textarea>
          </div>

          <button
            type="submit"
            className="bg-purple-600 hover:bg-purple-700 text-white py-2 px-4 rounded-full"
          >
            Enviar
          </button>

          {enviado && (
            <p className="mt-4 text-green-600 font-semibold">
              ¡Mensaje enviado con éxito!
            </p>
          )}
        </form>
      )}
    </section>
  );
};

export default Contacto;
