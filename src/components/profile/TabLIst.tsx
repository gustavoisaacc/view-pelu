import React, { useState } from "react";

// Componente Tabs
const Tabs = () => {
  const [selectedTab, setSelectedTab] = useState("images");

  return (
    <div className="mt-6">
      <div className="grid w-full grid-cols-3">
        <button
          className={`p-2 text-center ${
            selectedTab === "images"
              ? "bg-purple-600 text-white"
              : "bg-gray-200"
          }`}
          onClick={() => setSelectedTab("images")}
        >
          Imágenes
        </button>
        <button
          className={`p-2 text-center ${
            selectedTab === "appointments"
              ? "bg-purple-600 text-white"
              : "bg-gray-200"
          }`}
          onClick={() => setSelectedTab("appointments")}
        >
          Turnos
        </button>
        <button
          className={`p-2 text-center ${
            selectedTab === "reviews"
              ? "bg-purple-600 text-white"
              : "bg-gray-200"
          }`}
          onClick={() => setSelectedTab("reviews")}
        >
          Reseñas
        </button>
      </div>

      <div className="mt-4">
        {selectedTab === "images" && (
          <div>
            <h3 className="text-lg font-semibold">Galería de Trabajos</h3>
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4">
              {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
                <div
                  key={i}
                  className="aspect-square overflow-hidden rounded-lg bg-purple-100"
                >
                  <img
                    alt={`Trabajo ${i}`}
                    className="h-full w-full object-cover"
                    src={`/placeholder.svg?height=300&width=300`}
                  />
                </div>
              ))}
            </div>
          </div>
        )}

        {selectedTab === "appointments" && (
          <div>
            <h3 className="text-lg font-semibold">Agendar Cita</h3>
            <div className="space-y-4">
              <div className="space-y-2">
                <label className="text-sm font-medium">Fecha</label>
                <input type="date" className="w-full p-2 border rounded" />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium">Hora</label>
                <input type="time" className="w-full p-2 border rounded" />
              </div>

              <button
                className="w-full bg-purple-600 hover:bg-purple-700 text-white py-2 rounded"
                disabled
              >
                Confirmar Cita
              </button>
            </div>
          </div>
        )}

        {selectedTab === "reviews" && (
          <div>
            <h3 className="text-lg font-semibold">Reseñas de Clientes</h3>
            <div className="space-y-4">
              <div className="border-b border-gray-200 pb-4">
                <h4 className="font-semibold">Juan Pérez</h4>
                <p className="text-sm text-gray-600">
                  Excelente servicio, muy puntual.
                </p>
              </div>
              <div className="border-b border-gray-200 pb-4">
                <h4 className="font-semibold">Ana Gómez</h4>
                <p className="text-sm text-gray-600">
                  Muy profesional, los recomiendo.
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Tabs;
