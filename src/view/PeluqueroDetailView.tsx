import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { getUserClientByid } from "../api/ProfileAuth";

import CardProfile from "../components/profile/CardProfile";
import TabList from "../components/profile/TabLIst";
import TabTrigger from "../components/profile/TabTrigger";
import { useState } from "react";
import Button from "../components/Button";
import HairSalonSpinner from "../components/Spinner";

function PeluqueroDetailView() {
  const [selectedTab, setSelectedTab] = useState("appointments");

  const { id } = useParams();

  const { data, isLoading, isError } = useQuery({
    queryKey: ["peluquero", id],
    queryFn: () => getUserClientByid(id || ""),
    enabled: !!id,
  });
  console.log("🚀 ~ PeluqueroDetailView ~ data:", data);

  if (isLoading) return <HairSalonSpinner />;
  if (isError) return <p>Error al cargar el perfil.</p>;

  if (data)
    return (
      <div className="flex justify-center bg-lightpurple">
        <div className="">
          <Button
            route="/profile"
            className="flex justify-center text-white bg-primary w-52  md:w-1/5 md:h-10 p-2 rounded-md hover:bg-secondary transition duration-300"
          >
            Volver
          </Button>
          <div className="my-5">
            <CardProfile data={data} />
            <TabList data={data} id={id} selectedTab={selectedTab} />
          </div>
        </div>
      </div>
    );
}

export default PeluqueroDetailView;
