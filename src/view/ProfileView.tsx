import { useQuery } from "@tanstack/react-query";
import { getUserClient } from "../api/ProfileAuth";
import { Navigate, useNavigate } from "react-router-dom";
import Button from "../components/Button";
import HairSalonSpinner from "../components/Spinner";
import ImageProfile from "../components/profile/ImageProfile";
import Search from "../components/Search";
import { useEffect, useState } from "react";

type ProfileViewType = {
  id: string;
  name: string;
  lastName: string;
  avatarUrl: string;
};

function ProfileView() {
  const { data, isLoading, isError } = useQuery<ProfileViewType[]>({
    queryKey: ["client"],
    queryFn: getUserClient,
    retry: 1,
    refetchOnWindowFocus: false,
  });
  const [filter, setFilter] = useState(data);
  console.log("🚀 ~ ProfileView ~ filter:", filter);

  useEffect(() => {
    if (data) setFilter(data);
  }, [data]);
  const navigate = useNavigate();

  if (isLoading) return <HairSalonSpinner />;
  if (isError) return <Navigate to={"/404"} />;

  if (filter)
    return (
      <div className="w-[90%] m-auto pb-10">
        <div className="w-full flex gap-5 mb-8">
          <Button
            route="/"
            className="flex justify-center  text-white bg-primary w-52 md:w-1/5 p-2 rounded-md hover:bg-secondary transition duration-300"
          >
            Volver
          </Button>
          <Search setFilter={setFilter}></Search>
        </div>
        <div className="grid gap-6  sm:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 mb-12">
          {filter.length === 0 ? (
            <p className="text-center text-gray-300 text-2xl mt-20">
              No hay usuarios
            </p>
          ) : (
            filter.map((item) => (
              <div
                key={item.id}
                className="flex flex-col items-center bg-primary p-6 shadow-md rounded-lg space-y-4 w-full"
              >
                <div className="relative h-40 w-40 overflow-hidden rounded-full shadow-lg">
                  <ImageProfile avatarUrl={item.avatarUrl} />
                </div>
                <p className="text-lg font-semibold text-center sm:text-left">
                  {item?.name} {item?.lastName}
                </p>
                <button
                  onClick={() =>
                    navigate(`/${item.name}-${item.lastName}/${item.id}`)
                  }
                  className="bg-lightpurple w-1/2 text-white px-4 py-2 rounded-lg shadow-md hover:bg-secondary transition duration-300"
                >
                  Ver
                </button>
              </div>
            ))
          )}
        </div>
      </div>
    );
}

export default ProfileView;
