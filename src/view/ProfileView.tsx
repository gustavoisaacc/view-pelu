import { useQuery } from "@tanstack/react-query";
import { getUserClient } from "../api/ProfileAuth";

function ProfileView() {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["client"],
    queryFn: getUserClient,
    retry: 1,
  });
  console.log("🚀 ~ ProfileView ~ data:", data);

  if (data)
    return (
      <div>
        {data.map((item) => (
          <>
            <p>{item.id}</p>
            <img src={item.avatarUrl} alt="" />
          </>
        ))}
      </div>
    );
}

export default ProfileView;
