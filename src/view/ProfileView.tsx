import { useQuery } from "@tanstack/react-query";
import { getUserClient } from "../api/ProfileAuth";
import { Navigate, useNavigate } from "react-router-dom";

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
      <div>
        {data.map((item) => (
          <div
            key={item.id}
            className="flex items-center mt-10 space-x-8 bg-white p-6 shadow-md rounded-lg w-full mx-auto justify-between"
          >
            <div className="flex items-center gap-5">
              <div className="relative h-10 w-10 overflow-hidden rounded-full shadow-lg">
                <img
                  src={item.avatarUrl || "https://via.placeholder.com/150"}
                  alt="Foto de perfil"
                  className="h-full w-full object-cover object-top"
                />
              </div>
              <p>
                {item?.name} {item?.lastName}
              </p>
            </div>
            <button
              onClick={() =>
                navigate(`/pelu/${item.name}-${item.lastName}/${item.id}`)
              }
            >
              Ver
            </button>
          </div>
        ))}
      </div>
    );
}

export default ProfileView;
