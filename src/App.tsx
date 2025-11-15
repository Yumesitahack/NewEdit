import React, { useState } from "react";
import Header from "./components/Header";
import SobreMi from "./components/SobreMi";
import Aprendizaje from "./components/Aprendizaje";
import GithubOrg from "./components/GithubOrg";
import Footer from "./components/Footer";
import Contacto from "./components/Contacto";
import BlogModal from "./components/BlogModal";

const App: React.FC = () => {
  const [showBlog, setShowBlog] = useState(false);

  return (
    <div className="min-h-screen animated-bg text-white relative overflow-hidden">
      {/* Ilustraciones decorativas */}
      <img
        src="/decoracion-laptop-izquierda.png"
        className="absolute left-4 bottom-4 w-24 opacity-30"
        alt="Decoración izquierda"
      />
      <img
        src="/decoracion-laptop-derecha.png"
        className="absolute right-4 bottom-4 w-24 opacity-30"
        alt="Decoración derecha"
      />

      {/* Contenido */}
      <Header onOpenBlog={() => setShowBlog(true)} />
      <main>
        <SobreMi />
        <Aprendizaje />
        <GithubOrg />
        <Contacto />
      </main>
      <Footer />

      {/* Hobbie/creaciones */}
      <BlogModal show={showBlog} onClose={() => setShowBlog(false)} />
    </div>
  );
};

export default App;
