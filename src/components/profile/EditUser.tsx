import { useForm } from "react-hook-form";
import { useAuth } from "../../hooks/useAuth";
import ErrorMessage from "../ErroMessage";
import { useQuery } from "@tanstack/react-query";
import { getUserAvatar } from "../../api/ProfileAuth";
import EditPhotoProfile from "./EditPhotoProfile";

function EditUser() {
  const { data, isError, isLoading } = useAuth();

  const {
    register,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: data?.name,
      lastName: data?.lastName,
      phone: data?.phone,
      direction: data?.direction,
      service: data?.service,
    },
  });

  const { data: dataAvatar } = useQuery({
    queryKey: ["avatar", data?._id],
    queryFn: getUserAvatar,
    retry: false,
    refetchOnWindowFocus: false,
  });

  return (
    <div className=" space-y-4">
      <div className="flex items-center mt-10 space-x-8 bg-white p-6 shadow-md rounded-lg w-full mx-auto justify-between">
        <div className="flex items-center gap-5">
          <div className="relative h-40 w-40 overflow-hidden rounded-full shadow-lg">
            <img
              src={dataAvatar || "https://via.placeholder.com/150"}
              alt="Foto de perfil"
              className="h-full w-full object-cover object-top"
            />
          </div>
          <p>
            {data?.name} {data?.lastName}
          </p>
        </div>
        <EditPhotoProfile />
      </div>
      <div className="flex flex-col gap-5">
        <label className="font-normal text-lg">Nombre</label>
        <input
          type="name"
          className="w-full p-3  border-gray-300 border"
          {...register("name", {
            required: "El Nombre de usuario es obligatorio",
          })}
        />
        {errors.name && <ErrorMessage>{errors.name.message}</ErrorMessage>}
      </div>
      <div className="flex flex-col gap-5">
        <label className="font-normal text-lg">Apellido</label>
        <input
          type="lastName"
          className="w-full p-3  border-gray-300 border"
          {...register("lastName", {
            required: "El Apellido de usuario es obligatorio",
          })}
        />
        {errors.lastName && (
          <ErrorMessage>{errors.lastName.message}</ErrorMessage>
        )}
      </div>
      <div className="flex flex-col gap-5">
        <label className="font-normal text-lg">Celular</label>
        <input
          type="phone"
          className="w-full p-3  border-gray-300 border"
          {...register("phone", {
            required: "El Celular de usuario es obligatorio",
          })}
        />
        {errors.phone && <ErrorMessage>{errors.phone.message}</ErrorMessage>}
      </div>
      <div className="flex flex-col gap-5">
        <label className="font-normal text-lg">ireccion</label>
        <input
          type="direction"
          className="w-full p-3  border-gray-300 border"
          {...register("direction", {
            required: "La Direccion de usuario es obligatorio",
          })}
        />
        {errors.direction && (
          <ErrorMessage>{errors.direction.message}</ErrorMessage>
        )}
      </div>
      <div className="flex flex-col gap-5">
        <label className="font-normal text-lg">Profecion</label>
        <input
          type="service"
          className="w-full p-3  border-gray-300 border"
          {...register("service", {
            required: "La Profecion de usuario es obligatorio",
          })}
        />
        {errors.service && (
          <ErrorMessage>{errors.service.message}</ErrorMessage>
        )}
      </div>
    </div>
  );
}

export default EditUser;
