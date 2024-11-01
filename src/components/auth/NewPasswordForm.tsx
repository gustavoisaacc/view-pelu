import { ConfirmToken, NewPasswordForm } from "../../schema/auth";

import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import ErrorMessage from "../../components/ErroMessage";

export default function NewPasswordForms({ token }: ConfirmToken) {
  const navigate = useNavigate();
  const initialValues: NewPasswordForm = {
    password: "",
    confirmation_password: "",
  };
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm({ defaultValues: initialValues });

  const handleNewPassword = (formData: NewPasswordForm) => {};

  const password = watch("password");

  return (
    <>
      <form
        onSubmit={handleSubmit(handleNewPassword)}
        className="space-y-8 p-10  bg-white mt-10"
        noValidate
      >
        <div className="flex flex-col gap-5">
          <label className="font-normal text-2xl">Password</label>

          <input
            type="password"
            placeholder="Password de Registro"
            className="w-full p-3  border-gray-300 border"
            {...register("password", {
              required: "El Password es obligatorio",
              minLength: {
                value: 8,
                message: "El Password debe ser mínimo de 8 caracteres",
              },
            })}
          />
          {errors.password && (
            <ErrorMessage>{errors.password.message}</ErrorMessage>
          )}
        </div>

        <div className="flex flex-col gap-5">
          <label className="font-normal text-2xl">Repetir Password</label>

          <input
            id="confirmation_password"
            type="password"
            placeholder="Repite Password de Registro"
            className="w-full p-3  border-gray-300 border"
            {...register("confirmation_password", {
              required: "Repetir Password es obligatorio",
              validate: (value) =>
                value === password || "Los Passwords no son iguales",
            })}
          />

          {errors.confirmation_password && (
            <ErrorMessage>{errors.confirmation_password.message}</ErrorMessage>
          )}
        </div>

        <input
          type="submit"
          value="Establecer Password"
          className="bg-lightpurple hover:bg-fuchsia-700 w-full p-3  text-white font-black  text-xl cursor-pointer"
        />
      </form>
    </>
  );
}
