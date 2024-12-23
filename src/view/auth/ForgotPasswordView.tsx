import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

import { ForgotPasswordForm } from "../../schema/auth";
import ErrorMessage from "../../components/ErroMessage";
import { useMutation } from "@tanstack/react-query";
import { ForgotPasswordReset } from "../../api/AuthApi";
import { toast } from "react-toastify";

export default function ForgotPasswordView() {
  const initialValues: ForgotPasswordForm = {
    email: "",
  };
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ defaultValues: initialValues });

  const { mutate } = useMutation({
    mutationFn: ForgotPasswordReset,
    onError: (error) => {
      toast.error(`${error}`);
    },
    onSuccess: (data) => {
      toast.success(data);
      reset();
    },
  });

  const handleForgotPassword = (formData: ForgotPasswordForm) =>
    mutate(formData);

  return (
    <>
      <div className="flex justify-center items-center">
      <div className="w-full max-w-4xl ">
          {" "}
          <h1 className="text-4xl font-black text-white">
            Restablecer tu contraseña
          </h1>
          <p className="text-2xl font-light  text-white mt-5">
            ¿Olvidaste tu contraseña? coloca tu email para {""}
            <span className=" text-black font-bold">RESTABLECERLA</span>
          </p>
          <form
            onSubmit={handleSubmit(handleForgotPassword)}
            className="space-y-8 p-10 mt-10 bg-white "
            noValidate
          >
            <div className="flex flex-col gap-5">
              <label className="font-normal text-2xl" htmlFor="email">
                Email
              </label>
              <input
                id="email"
                type="email"
                placeholder="Email de Registro"
                className="w-full p-3  border-primary border"
                {...register("email", {
                  required: "El Email de registro es obligatorio",
                  pattern: {
                    value: /\S+@\S+\.\S+/,
                    message: "E-mail no válido",
                  },
                })}
              />
              {errors.email && <ErrorMessage>{errors.email.message}</ErrorMessage>}
            </div>

            <input
              type="submit"
              value="Enviar Instrucciones"
              className="bg-primary hover:bg-lightpurple w-full p-3  text-white font-black  text-xl cursor-pointer"
            />
          </form>
          <nav className="mt-10 flex flex-col space-y-4">
            <Link
              to="/auth/login"
              className="text-center text-white font-normal"
            >
              ¿Ya tienes cuenta? Iniciar Sesión
            </Link>

            <Link
              to="/auth/register"
              className="text-center text-white font-normal"
            >
              ¿No tienes cuenta? Crea una
            </Link>
          </nav>
        </div>
      </div>
    </>
  );
}
