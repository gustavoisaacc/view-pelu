import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { getUserClientByid } from "../api/ProfileAuth";

import CardProfile from "../components/profile/CardProfile";
import CardContainer from "../components/CardContainer";
import Tabs from "../components/profile/TabLIst";
function PeluqueroDetailView() {
  const { id } = useParams();

  const { data, isLoading, isError } = useQuery({
    queryKey: ["peluquero", id],
    queryFn: () => getUserClientByid(id || ""),
    enabled: !!id,
  });
  console.log("🚀 ~ PeluqueroDetailView ~ data:", data);

  if (isLoading) return <p>Cargando...</p>;
  if (isError) return <p>Error al cargar el perfil.</p>;
  return (
    <>
      <div className="">
        <CardProfile data={data} />

        <CardContainer className="mt-5 p-2">
          <Tabs />
        </CardContainer>
      </div>
    </>
  );
}

export default PeluqueroDetailView;
