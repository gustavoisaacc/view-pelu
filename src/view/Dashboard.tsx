import Button from "../components/Button";

function Dashboard() {
  return (
    <>
      <div className="grid place-content-center w-full max-w-full">
        <h1 className="text-center my-5">Panel de Administracion</h1>
        <section className="flex flex-col lg:flex-row gap-5">
          <Button route="/cita" colorType="warning">
            Crear cita
          </Button>
          <Button route="/category" colorType="warning">
            Crear categoría
          </Button>
          <Button route="/cita" colorType="danger">
            Turnos reservados
          </Button>
          <Button route="/edit-profile/">Editar perfil</Button>
        </section>
        <section className="flex items-center mt-10 space-x-8 bg-white p-6 shadow-md rounded-lg w-full mx-auto">
          <div className="relative h-40 w-40">
            <img
              src="https://via.placeholder.com/150"
              alt="Foto de perfil"
              className="h-full w-full rounded-full object-cover shadow-lg"
            />
          </div>

          <div className="flex flex-col">
            <h1 className="text-2xl font-bold text-gray-800 capitalize">
              Gustavo Chaile
            </h1>
            <h3 className="text-lg text-gray-500 font-medium mt-1">
              profecion
            </h3>
            <p className="text-sm text-gray-600 mt-2">
              <span className="font-semibold">Contacto:</span> 123456789
            </p>
          </div>
        </section>
        <div className="flex justify-center items-center border-b border-gray-300 bg-white text-black mt-10">
          <p className="text-center py-4 text-lg font-semibold text-gray-500">
            IMAGENES
          </p>
        </div>
      </div>
    </>
  );
}

export default Dashboard;
