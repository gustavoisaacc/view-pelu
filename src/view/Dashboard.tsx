import { useQuery } from "@tanstack/react-query";
import { getUserAvatar } from "../api/ProfileAuth";
import Button from "../components/Button";
import { useAuth } from "../hooks/useAuth";
import HairSalonSpinner from "../components/Spinner";

function Dashboard() {
  const { data, isError, isLoading } = useAuth();
  const { data: avatarURL } = useQuery({
    queryKey: ["avatar", data?._id],
    queryFn: getUserAvatar,
    retry: false,
    refetchOnWindowFocus: false,
  });
  if (isLoading) return <HairSalonSpinner />;
  return (
    <>
      <div className="grid place-content-center w-full max-w-full bg-lightpurple">
        <h1 className="text-center py-4 text-4xl font-semibold text-white">
          Panel de Administracion
        </h1>
        <section className="flex flex-col lg:flex-row gap-5">
          <Button route="/cita" colorType="primary">
            Crear cita
          </Button>
          <Button route="/category" colorType="primary">
            Crear categoría
          </Button>
          <Button route="/Detail" colorType="primary">
            Turnos reservados
          </Button>
          <Button route="/edit-profile/" colorType="primary">
            Editar perfil
          </Button>
        </section>
        <section className="flex items-center mt-10 space-x-8 bg-primary p-6 shadow-md rounded-lg w-full mx-auto">
          <div className="rrelative h-40 w-40 overflow-hidden rounded-full shadow-lg">
            <img
              src={avatarURL || "https://via.placeholder.com/150"}
              alt="Foto de perfil"
              className="h-full w-full object-cover object-top"
            />
          </div>

          <div className="flex flex-col">
            <h1 className="text-2xl font-bold text-white capitalize">
              {`${data?.name} ${data?.lastName}`}
            </h1>
            <h3 className="text-lg text-white font-medium mt-1">
              profesion: {data?.service}
            </h3>
            <p className="text-sm text-white mt-2">
              <span className="font-semibold">Contacto:</span> {data?.phone}
            </p>
          </div>
        </section>
        <div className="flex justify-center items-center border-b border-secondary bg-primary text-black mt-10">
          <p className="text-center py-4 text-lg font-semibold text-white">
            IMAGENES
          </p>
        </div>
      </div>
    </>
  );
}

export default Dashboard;
