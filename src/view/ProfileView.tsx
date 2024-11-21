import { useQuery } from "@tanstack/react-query";
import { getUserClient } from "../api/ProfileAuth";
import { Navigate, useNavigate } from "react-router-dom";
import Button from "../components/Button";

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
  });

  const navigate = useNavigate();

  if (isLoading) return <p>Cargando...</p>;
  if (isError) return <Navigate to={"/404"} />;

  if (data)
    return (
      <div className="w-[90%] m-auto">
        <Button
          route="/"
          className="flex justify-center mb-8 text-white bg-primary w-52 md:w-1/5 md:h-10 p-2 rounded-md hover:bg-secondary transition duration-300"
        >
          Volver
        </Button>
        <div className="grid gap-6  sm:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 mb-12">
          {data.map((item) => (
            <div
              key={item.id}
              className="flex flex-col items-center bg-primary p-6 shadow-md rounded-lg space-y-4 w-full"
            >
              <div className="relative h-auto w-40 overflow-hidden rounded-full shadow-lg">
                <img
                  src={item.avatarUrl || "https://via.placeholder.com/150"}
                  alt="Foto de perfil"
                  className="h-full w-full object-cover object-top"
                />
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
          ))}
        </div>
      </div>
    );
}

export default ProfileView;
