import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { getUserClientByid } from "../api/ProfileAuth";

import CardProfile from "../components/profile/CardProfile";
import CardContainer from "../components/CardContainer";
import TabList from "../components/profile/TabLIst";
import TabTrigger from "../components/profile/TabTrigger";
import { useState } from "react";
function PeluqueroDetailView() {
  const [selectedTab, setSelectedTab] = useState("appointments");

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
        <div className="w-[90%] m-auto pb-10">
          <CardProfile data={data} />

          <CardContainer className="mt-5 p-5 gap-5 bg-purple-50">
            <TabList data={data} selectedTab={selectedTab} />
          </CardContainer>
        </div>
      </>
    );
}

export default PeluqueroDetailView;
