import { FieldErrors, UseFormRegister } from "react-hook-form";
import ErrorMessage from "../ErroMessage";
import { ServiceFormData } from "../../schema/service.schema";

type ServiceType = {
  register: UseFormRegister<ServiceFormData>;
  errors: FieldErrors<ServiceFormData>;
};

export default function ServiceForm({ register, errors }: ServiceType) {
  return (
    <>
      <div className="flex flex-col gap-2">
        <label className="font-normal text-md mt-2 lg:text-xl" htmlFor="name">
          Nombre
        </label>
        <input
          id="name"
          type="text"
          placeholder="Nombre del producto"
          className="w-full p-3  border-gray-300 border"
          {...register("name", {
            required: "El nombre es obligatorio",
          })}
        />
        {errors.name && <ErrorMessage>{errors.name.message}</ErrorMessage>}
      </div>
      <div className="flex flex-col gap-2">
        <label className="font-normal text-md mt-2 lg:text-xl" htmlFor="name">
          Descripcion
        </label>
        <textarea
          id="description"
          placeholder="Nombre del producto"
          className="w-full p-3  border-gray-300 border"
          {...register("description", {
            required: "La description es obligatorio",
          })}
        ></textarea>
        {errors.description && (
          <ErrorMessage>{errors.description.message}</ErrorMessage>
        )}
      </div>
      <div className="flex flex-col gap-2">
        <label className="font-normal text-md mt-2 lg:text-xl" htmlFor="name">
          Duracion
        </label>
        <input
          id="duration"
          type="text"
          placeholder="Tiempo que dura el servicio"
          className="w-full p-3  border-gray-300 border"
          {...register("duration", {
            required: "La duracion es obligatorio",
          })}
        />
        {errors.duration && (
          <ErrorMessage>{errors.duration.message}</ErrorMessage>
        )}
      </div>
      <div className="flex flex-col gap-2">
        <label className="font-normal text-md mt-2 lg:text-xl" htmlFor="name">
          Precio
        </label>
        <input
          id="price"
          type="number"
          placeholder="Nombre del producto"
          className="w-full p-3  border-gray-300 border"
          {...register("price", {
            required: "El precio es obligatorio",
          })}
        />
        {errors.price && <ErrorMessage>{errors.price.message}</ErrorMessage>}
      </div>
    </>
  );
}
