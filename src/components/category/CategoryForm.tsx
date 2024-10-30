import { FieldErrors, UseFormRegister } from "react-hook-form";
import { CategoryData } from "../../schema/categroy.schema";
import ErrorMessage from "../ErroMessage";

type CategoryType = {
  register: UseFormRegister<CategoryData>;
  errors: FieldErrors<CategoryData>;
};

export default function CategoryForm({ register, errors }: CategoryType) {
  return (
    <>
      <div className="flex flex-col gap-5">
        <label className="font-normal text-lg lg:text-xl" htmlFor="name">
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
    </>
  );
}
