import { useForm } from "react-hook-form";
import ErrorMessage from "../../components/ErroMessage";
import { UserLoginForm } from "../../schema/auth";
import { Link, useNavigate } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";
import { AuthtenticateUser } from "../../api/AuthApi";
import { toast } from "react-toastify";
import Button from "../../components/Button";

export default function LoginView() {
  const initialValues: UserLoginForm = {
    email: "",
    password: "",
  };
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ defaultValues: initialValues });

  const navigate = useNavigate();

  const { mutate } = useMutation({
    mutationFn: AuthtenticateUser,
    onError: (error) => {
      toast.error(`${error}`);
    },
    onSuccess: () => {
      navigate("/dashboard");
    },
  });

  const handleLogin = (formData: UserLoginForm) => mutate(formData);

  return (
    <div className="flex justify-center items-center min-h-screen bg-lightpurple px-4">
      <div className="w-full max-w-md space-y-6">
        <div className="flex justify-center">
          <Button
            route="/"
            className="bg-primary hover:bg-secondary md:w-48 text-center px-10"
          >
            Volver
          </Button>
        </div>
        <form
          onSubmit={handleSubmit(handleLogin)}
          className="bg-white shadow-lg rounded-lg w-full"
          noValidate
        >
          <div className="bg-primary h-auto w-full p-5 rounded-t-lg">
            <h1 className="text-4xl text-center font-black text-white">
              Iniciar Sesión
            </h1>
          </div>
          <div className="space-y-8 p-10">
            <div className="flex flex-col gap-5">
              <label className="font-normal text-lg">Email</label>

              <input
                id="email"
                type="email"
                placeholder="Email de Registro"
                className="w-full p-3 border-gray-300 border"
                {...register("email", {
                  required: "El Email es obligatorio",
                  pattern: {
                    value: /\S+@\S+\.\S+/,
                    message: "E-mail no válido",
                  },
                })}
              />
              {errors.email && (
                <ErrorMessage>{errors.email.message}</ErrorMessage>
              )}
            </div>

            <div className="flex flex-col gap-5">
              <label className="font-normal text-lg">Contraseña</label>

              <input
                type="password"
                placeholder="Contraseña de Registro"
                className="w-full p-3 border-gray-300 border"
                {...register("password", {
                  required: "El Password es obligatorio",
                })}
              />
              {errors.password && (
                <ErrorMessage>{errors.password.message}</ErrorMessage>
              )}
            </div>

            <input
              type="submit"
              value="Iniciar Sesión"
              className="bg-primary hover:bg-lightpurple w-full p-3 text-white font-black text-xl cursor-pointer"
            />
          </div>
        </form>
        <nav className="mt-10 flex flex-col space-y-4">
          <Link
            to={"/auth/register"}
            className="text-center text-white font-normal"
          >
            ¿No tienes cuentas? Crea una
          </Link>
          <Link
            to={"/auth/forgot-password"}
            className="text-center text-white font-normal"
          >
            ¿Olvidaste tu contraseña? Restablecer
          </Link>
        </nav>
      </div>
    </div>
  );
}
