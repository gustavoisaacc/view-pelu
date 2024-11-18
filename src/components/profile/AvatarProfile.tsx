import { getUserAvatar } from "../../api/ProfileAuth";
import { useQuery } from "@tanstack/react-query";
import { User } from "../../schema/auth";
import EditPhotoProfile from "./EditPhotoProfile";

type AvatarProfileType = {
  data: User;
};

function AvatarProfile({ data }: AvatarProfileType) {
  //get user avatar
  const { data: dataAvatar } = useQuery({
    queryKey: ["avatar", data?._id],
    queryFn: getUserAvatar,
    retry: false,
    refetchOnWindowFocus: false,
  });

  return (
    <div className="flex items-center mt-10 space-x-8 bg-white p-6 shadow-md rounded-lg w-full mx-auto justify-between">
      <div className="flex items-center gap-5">
        <div className="relative overflow-hidden rounded-full shadow-lg">
          <img
            src={dataAvatar || "https://via.placeholder.com/150"}
            alt="Foto de perfil"
            className="h-full w-full object-cover object-top"
          />
        </div>
        <p className="absolute p-4 flex items-center justify-center text-white bg-primary/50 text-sm font-semibold rounded-full">
          {data?.name} {data?.lastName}
        </p>
      </div>
      <EditPhotoProfile />
    </div>
  );
}

export default AvatarProfile;
