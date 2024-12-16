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
          type="text"
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
          type="text"
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
        <label className="font-normal text-lg">Profecion</label>
        <input
          type="text"
          className="w-full p-3  border-gray-300 border"
          {...register("service", {
            required: "La Profecion de usuario es obligatorio",
          })}
        />
        {errors.service && (
          <ErrorMessage>{errors.service.message}</ErrorMessage>
        )}
      </div>
      <div className="flex flex-col gap-5">
        <label className="font-normal text-lg">Provincia</label>
        <input
          type="text"
          className="w-full p-3  border-gray-300 border"
          {...register("state", {
            required: "La Direccion de usuario es obligatorio",
          })}
        />
        {errors.direction && (
          <ErrorMessage>{errors.direction.message}</ErrorMessage>
        )}
      </div>
      <div className="flex flex-col gap-5">
        <label className="font-normal text-lg">Localidad</label>
        <input
          type="text"
          className="w-full p-3  border-gray-300 border"
          {...register("localities", {
            required: "La Direccion de usuario es obligatorio",
          })}
        />
        {errors.direction && (
          <ErrorMessage>{errors.direction.message}</ErrorMessage>
        )}
      </div>
      <div className="flex flex-col gap-5">
        <label className="font-normal text-lg">Direccion</label>
        <input
          type="text"
          className="w-full p-3  border-gray-300 border"
          {...register("direction", {
            required: "La Direccion de usuario es obligatorio",
          })}
        />
        {errors.direction && (
          <ErrorMessage>{errors.direction.message}</ErrorMessage>
        )}
      </div>
    </div>
  );
}

export default EditUser;
