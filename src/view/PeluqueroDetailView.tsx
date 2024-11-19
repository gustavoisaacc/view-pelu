import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { getUserClientByid } from "../api/ProfileAuth";

import CardProfile from "../components/profile/CardProfile";
import CardContainer from "../components/CardContainer";
import TabList from "../components/profile/TabLIst";
import TabTrigger from "../components/profile/TabTrigger";
import { useState } from "react";
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
      <>
        <div className="bg-white">
          <CardProfile data={data} />
          <CardContainer className="mt-5">
            <div className="grid w-full grid-cols-2">
              <TabTrigger
                selectedTab={selectedTab}
                setSelectedTab={setSelectedTab}
                value="images"
              >
                Imagen
              </TabTrigger>
              <TabTrigger
                selectedTab={selectedTab}
                setSelectedTab={setSelectedTab}
                value="appointments"
              >
                Turnos
              </TabTrigger>
            </div>
          </CardContainer>
          <CardContainer className="mt-5 p-5 gap-5">
            <TabList data={data} selectedTab={selectedTab} />
          </CardContainer>
        </div>
      </>
    );
}

export default PeluqueroDetailView;
