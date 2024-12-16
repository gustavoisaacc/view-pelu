import { useEffect, useLayoutEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { getUserClientByid } from "../api/ProfileAuth";

import CardProfile from "../components/profile/CardProfile";
import TabList from "../components/profile/TabLIst";
import Button from "../components/Button";
import HairSalonSpinner from "../components/Spinner";

import { MapClient } from "../components/MapClient";
import { getCoordinatesLocationIQ } from "../lib/Location";
export type Location = {
  lat: string;
  lon: string;
};
function PeluqueroDetailView() {
  const [selectedTab, setSelectedTab] = useState("appointments");
  const [location, setLocation] = useState<Location>();
  console.log("🚀 ~ PeluqueroDetailView ~ location:", location);

  const { id } = useParams();

  const { data, isLoading, isError } = useQuery({
    queryKey: ["peluquero", id],
    queryFn: () => getUserClientByid(id || ""),
    enabled: !!id,
    refetchOnWindowFocus: false,
  });
  const { data: dataLocation } = useQuery({
    queryKey: ["address"],
    queryFn: () => getCoordinatesLocationIQ(data || ""),
    refetchOnWindowFocus: false,
  });
  console.log("🚀 ~ PeluqueroDetailView ~ dataLocation:", dataLocation);
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
              <TabList data={data} id={id} selectedTab={selectedTab} />
            </div>
            <div className="bg-red-300 h-auto w-full py-5"></div>
          </div>
        </div>
      </>
    );
}

export default PeluqueroDetailView;
