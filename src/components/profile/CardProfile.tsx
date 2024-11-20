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
      <CardContainer className=" bg-purple-300 w-full max-w-screen-lg shadow-lg rounded-3xl p-10 flex flex-col items-center h-[90vh] lg:h-[70vh]">
        <div className="relative h-auto w-56 overflow-hidden rounded-full shadow-md">
          <img
            src={data.avatarUrl || "https://via.placeholder.com/150"}
            alt="Foto de perfil"
            className="h-full w-full object-cover object-top"
          />
        </div>
        <div className="mt-6 text-center">
          <h1 className="text-4xl font-bold text-black capitalize">
            {`${data.name} ${data.lastName}`}
          </h1>
          <h3 className="text-lg text-black font-medium mt-1 text-center">
            Profesión: {data?.service}
          </h3>
          <p className="text-sm text-black mt-2">
            <span className="font-semibold text-center">Contacto:</span> {data?.phone}
          </p>
        </div>
        <div className="flex flex-wrap justify-center gap-12 mt-4 text-white">
          <Badge variant="default" className="w-36 h-12 flex justify-center">Cortes de Mujeres</Badge>
          <Badge variant="default" className="w-36 h-12 flex justify-center">Cortes de Hombres</Badge>
          <Badge variant="default" className="w-36 h-12 flex justify-center">Colometria</Badge>
        </div>
      </CardContainer>
    </div>
  );
}

export default CardProfile;

