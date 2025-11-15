import React, { useState, useEffect } from "react";

interface BlogModalProps {
  show: boolean;
  onClose: () => void;
}

const BlogModal: React.FC<BlogModalProps> = ({ show, onClose }) => {
  const [data, setData] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (show) {
      setLoading(true);
      fetch("/data/articulos.json")
        .then((res) => res.json())
        .then((data) => {
          setData(data);
          setLoading(false);
        })
        .catch(() => {
          setError("Error al cargar las creaciones");
          setLoading(false);
        });
    }
  }, [show]);

  if (!show) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-50">
      {/* Contenedor principal con glassmorphism */}
      <div className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-2xl p-6 w-3/4 max-h-[80vh] overflow-y-auto shadow-2xl">
        {/* Encabezado */}
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-purple-400">
            Hobbie/Creaciones
          </h2>
          <button
            onClick={onClose}
            className="bg-red-600 px-3 py-1 rounded hover:bg-red-700"
          >
            Cerrar
          </button>
        </div>

        {loading && <p className="text-gray-200">⏳ Cargando...</p>}
        {error && <p className="text-red-400">{error}</p>}

        {/* Cards con glassmorphism */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {data.map((item) => (
            <div
              key={item.id}
              className="backdrop-blur-md bg-white/10 border border-white/20 rounded-xl p-4 shadow-lg"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-40 object-cover rounded-lg mb-3"
              />
              <h3 className="text-lg font-bold text-white">{item.title}</h3>
              <p className="text-sm text-gray-200">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogModal;
