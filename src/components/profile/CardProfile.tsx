import { Badge } from "../Badge";
import { UserClient } from "../../schema/auth";
import CardContainer from "../CardContainer";
import { Button } from "../ButtonP";
import { Calendar } from "lucide-react";

type CardProfileType = {
  data: UserClient;
};

function CardProfile({ data }: CardProfileType) {
  return (
    <div className="flex justify-center items-center min-h-screen px-4">
      <CardContainer className=" bg-primary w-full max-w-screen-lg shadow-lg rounded-lg p-10 flex flex-col items-center h-[90vh] lg:h-[80vh]">
        <div className="relative h-auto w-56 overflow-hidden rounded-full shadow-md">
          <img
            src={data.avatarUrl || "https://via.placeholder.com/150"}
            alt="Foto de perfil"
            className="h-full w-full object-cover object-top"
          />
        </div>
        <div className="mt-6 text-center">
          <h1 className="text-4xl font-bold text-gray-800 capitalize">
            {`${data.name} ${data.lastName}`}
          </h1>
          <h3 className="text-lg text-gray-500 font-medium mt-1 text-center">
            Profesión: {data?.service}
          </h3>
          <p className="text-sm text-gray-600 mt-2">
            <span className="font-semibold text-center">Contacto:</span> {data?.phone}
          </p>
        </div>
        <div className="flex flex-wrap justify-center gap-2 mt-4">
          <Badge variant="default">Cortes de Mujeres</Badge>
          <Badge variant="default">Cortes de Hombres</Badge>
          <Badge variant="default">Colometria</Badge>
        </div>
        <Button
          variant="outline"
          className="mt-6 flex items-center border-blue-500 text-blue-500 px-4 py-2 rounded-lg hover:bg-blue-50 transition"
        >
          <Calendar className="h-4 w-4 mr-2" />
          Agendar
        </Button>
      </CardContainer>
    </div>
  );
}

export default CardProfile;

