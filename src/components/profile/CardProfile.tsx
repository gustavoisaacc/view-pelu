import { Badge } from "../Badge";
import { UserClient } from "../../schema/auth";
import CardContainer from "../CardContainer";
import ImageProfile from "./ImageProfile";
import { Instagram, Phone } from "lucide-react";
import { Link } from "react-router-dom";

type CardProfileType = {
  data: UserClient;
};
function CardProfile({ data }: CardProfileType) {
  return (
    <div className="flex justify-center items-center min-h-full">
      <CardContainer className=" bg-purple-50 w-full max-w-screen-lg shadow-lg rounded-3xl p-10 flex flex-col items-center ">
        <div className="relative h-40 w-40 overflow-hidden rounded-full shadow-md">
          <ImageProfile avatarUrl={data.avatarUrl} />
        </div>
        <div className="mt-6 text-center">
          <h1 className="text-4xl font-bold text-black capitalize">
            {`${data.user.name} ${data.user.lastName}`}
          </h1>
          <h3 className="text-lg text-black font-medium mt-1 text-center">
            Profesión: {data.user.service}
          </h3>
          <p className="text-sm text-black mt-2 flex justify-center items-start ">
            <span className="font-semibold text-center mr-1">
              <Phone className="w-5 h-5" />
            </span>
            {"         "}
            {data.user.phone}
          </p>
        </div>
        <div className="mt-5">
          <Link
            to={`${data.user.urlInstagram}`}
            className="flex place-content-center"
          >
            <Instagram className="w-5 h-5" />
            <p className="ml-1">ver mis trabajos</p>
          </Link>
        </div>
        <div className="flex flex-wrap justify-center gap-12 mt-4 text-white">
          {data.user.category.map((items) => (
            <Badge variant="default" className="w-36 h-12 flex justify-center">
              {items}
            </Badge>
          ))}
        </div>
      </CardContainer>
    </div>
  );
}

export default CardProfile;
