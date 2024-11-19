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
    <CardContainer className="flex flex-col w-full p-5">
      <div className="relative h-40 w-40 overflow-hidden rounded-full shadow-lg">
        <img
          src={data.avatarUrl || "https://via.placeholder.com/150"}
          alt="Foto de perfil"
          className="h-full w-full object-cover object-top"
        />
      </div>

      <div className="flex flex-col">
        <h1 className="text-2xl font-bold text-gray-800 capitalize">
          {`${data.name} ${data.lastName}`}
        </h1>
        <h3 className="text-lg text-gray-500 font-medium mt-1">
          profecion: {data?.service}
        </h3>
        <p className="text-sm text-gray-600 mt-2">
          <span className="font-semibold">Contacto:</span> {data?.phone}
        </p>
      </div>
      <div className="flex justify-between gap-5 mt-5">
        <Badge variant="default">Cortes Modernos</Badge>
        <Badge variant="default">Cortes Modernos</Badge>
        <Badge variant="default">Cortes Modernos</Badge>
      </div>
      <Button variant="outline" className="mt-5 border-blue-500 text-blue-500">
        <Calendar className="h-4 w-4" />
        Element
      </Button>
    </CardContainer>
  );
}

export default CardProfile;

