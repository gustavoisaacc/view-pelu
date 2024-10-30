import Button from "../components/Button";

function Dashboard() {
  return (
    <>
      <div className="grid place-content-center">
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
          <Button route="/cita">Editar perfil</Button>
        </section>
      </div>
    </>
  );
}

export default Dashboard;
