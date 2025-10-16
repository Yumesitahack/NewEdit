import React from "react";

const Header: React.FC = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="py-16 px-8 relative">
      <div className="flex flex-col md:flex-row items-end justify-between gap-8">
       
        <div className="flex flex-col items-start md:w-1/2 mt-12">
          <div className="w-28 h-28 mb-4 rounded-full overflow-hidden border-4 border-white shadow-lg">
            <img
              src="/imagen.jpg"
              alt="Foto de perfil"
              className="w-full h-full object-cover"
            />
          </div>
          <h1 className="text-4xl font-bold text-white mb-2">
            Yume Monasterio
          </h1>
          <p className="text-lg text-white">Ing de sistemas ✨</p>
        </div>

        
        <div className="flex flex-col items-center md:w-1/2">
          <div className="flex justify-center items-center gap-8 mb-6">
            <img
              src="/decoracion-laptop-izquierda.png"
              alt="Decoración izquierda"
              className="w-24"
            />
            <img
              src="/decoracion-laptop-derecha.png"
              alt="Decoración derecha"
              className="w-24"
            />
          </div>

         
          <div className="flex flex-col md:flex-row gap-4 justify-center md:justify-end">
            <button
              onClick={() => scrollToSection("sobre-mi")}
              className="bg-pink-300 hover:bg-pink-400 text-white py-2 px-4 rounded-full"
            >
              Sobre mí
            </button>
            <button
              onClick={() => scrollToSection("Aprendizaje")}
              className="bg-pink-300 hover:bg-pink-400 text-white py-2 px-4 rounded-full"
            >
              Aprendizaje
            </button>
            <button
              onClick={() => scrollToSection("github")}
              className="bg-pink-300 hover:bg-pink-400 text-white py-2 px-4 rounded-full"
            >
              GitHub Org
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
