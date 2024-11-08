import ErrorMessage from "../ErroMessage";
import { FieldErrors, UseFormRegister } from "react-hook-form";
import { UserFormData } from "../../schema/auth";

type EditUserType = {
  register: UseFormRegister<UserFormData>;
  errors: FieldErrors<UserFormData>;
};

function EditUser({ register, errors }: EditUserType) {
  return (
    <div className=" space-y-4">
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
