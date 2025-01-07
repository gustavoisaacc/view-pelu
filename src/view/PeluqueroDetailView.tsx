import { useState } from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { getUserClientByid } from "../api/ProfileAuth";

import CardProfile from "../components/profile/CardProfile";
import TabList from "../components/profile/TabLIst";
import Button from "../components/Button";
import HairSalonSpinner from "../components/Spinner";
import { TabTrigger } from "../components/profile/TabTrigger";
export type Location = {
  lat: string;
  lon: string;
};
function PeluqueroDetailView() {
  const [selectedTab, setSelectedTab] = useState("appointments");

  const { id } = useParams();

  const { data, isLoading, isError } = useQuery({
    queryKey: ["peluquero", id],
    queryFn: () => getUserClientByid(id || ""),
    enabled: !!id,
    refetchOnWindowFocus: false,
  });

  if (isLoading) return <HairSalonSpinner />;
  if (isError) return <p>Error al cargar el perfil.</p>;

  if (data)
    return (
      <>
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
              <div className="flex justify-between items-center mb-4 p-1 bg-blue-50 rounded-lg shadow">
                <TabTrigger
                  value="appointments"
                  selectedTab={selectedTab}
                  setSelectedTab={setSelectedTab}
                >
                  Citas
                </TabTrigger>
                <TabTrigger
                  value="ubicacion"
                  selectedTab={selectedTab}
                  setSelectedTab={setSelectedTab}
                >
                  Ubicacion
                </TabTrigger>
              </div>
              <TabList data={data} selectedTab={selectedTab} />
            </div>
          </div>
        </div>
      </>
    );
}

export default PeluqueroDetailView;
