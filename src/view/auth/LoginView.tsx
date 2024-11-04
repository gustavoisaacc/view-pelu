import { useForm } from "react-hook-form";
import ErrorMessage from "../../components/ErroMessage";
import { UserLoginForm } from "../../schema/auth";
import { Link } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";
import { AuthtenticateUser } from "../../api/AuthApi";
import { toast } from "react-toastify";

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

  const { mutate } = useMutation({
    mutationFn: AuthtenticateUser,
    onError: (error) => {
      toast.error(`${error}`);
    },
    onSuccess: (data) => {
      console.log("🚀 ~ LoginView ~ data:", data);
      toast.success("Iniciando Sesión");
    },
  });

  const handleLogin = (formData: UserLoginForm) => mutate(formData);

  return (
    <>
      <form
        onSubmit={handleSubmit(handleLogin)}
        className="bg-white"
        noValidate
      >
        <div className="bg-lightpurple h-auto w-full p-5 ">
          <h1 className="text-4xl text-center font-black text-white">
            Iniciar Sesiòn
          </h1>
        </div>
        <div className="space-y-8 p-10">
          <div className="flex flex-col gap-5">
            <label className="font-normal text-lg">Email</label>

            <input
              id="email"
              type="email"
              placeholder="Email de Registro"
              className="w-full p-3  border-gray-300 border"
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
            <label className="font-normal text-lg">Password</label>

            <input
              type="password"
              placeholder="Password de Registro"
              className="w-full p-3  border-gray-300 border"
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
            className=" bg-lightpurple hover:bg-fuchsia-700 w-full p-3  text-white font-black  text-xl cursor-pointer"
          />
        </div>
      </form>
      <nav className="mt-10 flex flex-col space-y-4">
        <Link
          to={"/auth/register"}
          className="text-center text-gray-300 font-normal"
        >
          ¿No tienes cuentas? Crea una
        </Link>
        <Link
          to={"/auth/forgot-password"}
          className="text-center text-gray-300 font-normal"
        >
          ¿Olvidaste tu contraseña? Resstablecer
        </Link>
      </nav>
    </>
  );
}
