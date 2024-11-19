import { getUserAvatar } from "../../api/ProfileAuth";
import { useQuery } from "@tanstack/react-query";
import { User } from "../../schema/auth";
import EditPhotoProfile from "./EditPhotoProfile";

type AvatarProfileType = {
  data: User;
};

function AvatarProfile({ data }: AvatarProfileType) {
  const { data: dataAvatar } = useQuery({
    queryKey: ["avatar", data?._id],
    queryFn: getUserAvatar,
    retry: false,
    refetchOnWindowFocus: false,
  });

  return (
    <div className="flex flex-col items-center bg-white py-6 shadow-md rounded-lg w-full max-w-md mx-auto space-y-6">
      <div className="h-32 w-32 relative overflow-hidden rounded-full shadow-lg">
        <img
          src={dataAvatar || "https://via.placeholder.com/150"}
          alt="Foto de perfil"
          className="h-full w-full object-cover object-top"
        />
      </div>
      <div className="flex flex-col items-center space-y-4">
        <p className="text-2xl font-semibold text-secondary text-center">
          {data?.name} {data?.lastName}
        </p>
        <EditPhotoProfile />
      </div>
    </div>
  );
}

export default AvatarProfile;


