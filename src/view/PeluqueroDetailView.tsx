import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { getUserClientByid } from "../api/ProfileAuth";

import CardProfile from "../components/profile/CardProfile";
import CardContainer from "../components/CardContainer";
import TabList from "../components/profile/TabLIst";
import TabTrigger from "../components/profile/TabTrigger";
import { useState } from "react";
import Button from "../components/Button";

function PeluqueroDetailView() {
  const [selectedTab, setSelectedTab] = useState("images");

  const { id } = useParams();

  const { data, isLoading, isError } = useQuery({
    queryKey: ["peluquero", id],
    queryFn: () => getUserClientByid(id || ""),
    enabled: !!id,
  });

  if (isLoading) return <p>Cargando...</p>;
  if (isError) return <p>Error al cargar el perfil.</p>;

  if (data)
    return (
      <div className="flex justify-center min-h-screen bg-lightpurple">
        <div className="w-full max-w-screen-lg">
        <Button
      route="/profile"
      className="flex justify-center text-white bg-primary w-52 ml-20 md:w-1/5 md:h-10 p-2 rounded-md hover:bg-secondary transition duration-300">
      Volver
    </Button>
          <CardProfile data={data} />
          <CardContainer>
            <div className="grid w-full grid-col p-2 text-center rounded-lg font-black text-white">
              {/* <TabTrigger
                selectedTab={selectedTab}
                setSelectedTab={setSelectedTab}
                value="images"
              >
                Imagen
              </TabTrigger> */}
              <TabTrigger
                selectedTab={selectedTab}
                setSelectedTab={setSelectedTab}
                value="appointments"
              >
                TURNOS
              </TabTrigger>
            </div>
          </CardContainer>
          <CardContainer className="mt-6 p-5 gap-5">
            <TabList data={data} selectedTab={selectedTab} />
          </CardContainer>
        </div>
      </div>
    );
}

export default PeluqueroDetailView;