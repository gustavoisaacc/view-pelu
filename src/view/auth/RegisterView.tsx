import { useForm } from "react-hook-form";
import { UserRegistrationForm } from "../../schema/auth";
import ErrorMessage from "../../components/ErroMessage";
import { Link, useNavigate } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";
import { createAccount } from "../../api/AuthApi";
import { toast } from "react-toastify";

export default function RegisterView() {
  const initialValues: UserRegistrationForm = {
    name: "",
    lastName: "",
    phone: "",
    direction: "",
    email: "",
    password: "",
    confirmation_password: "",
    service: "",
  };

  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm<UserRegistrationForm>({ defaultValues: initialValues });

  const password = watch("password");
  const navigate = useNavigate();
  const { mutate } = useMutation({
    mutationFn: createAccount,
    onError: (error) => {
      toast.error(`${error}`);
    },
    onSuccess: (data) => {
      console.log("🚀 ~ RegisterView ~ data:", data);
      toast.success(data);
      reset();
    },
  });

  const handleRegister = (formData: UserRegistrationForm) => {
    console.log("🚀 ~ handleRegister ~ formData:", formData);
    mutate(formData);
  };

  return (
    <>
    <div className="flex justify-center items-center">
    <div className="w-full max-w-4xl">
      <form
        onSubmit={handleSubmit(handleRegister)}
        className=" bg-white mt-10"
        noValidate
      >
        <div className="bg-lightpurple h-auto w-full p-5 ">
          <h1 className="text-4xl font-black text-white">Crear Cuenta</h1>
          <p className="text-2xl font-light  text-white mt-5">
            Llena el formulario para {""}
            <span className=" text-gray-800 font-bold"> crear tu cuenta</span>
          </p>
        </div>
        <div className="p-10 space-y-8">
          <div className="flex flex-col gap-5">
            <label className="font-normal text-lg" htmlFor="email">
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
            {errors.email && (
              <ErrorMessage>{errors.email.message}</ErrorMessage>
            )}
          </div>

          <div className="flex flex-col gap-5">
            <label className="font-normal text-lg">Nombre</label>
            <input
              type="name"
              placeholder="Nombre de Registro"
              className="w-full p-3  border-primary border"
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
              placeholder="Apellido de Registro"
              className="w-full p-3  border-primary border"
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
              placeholder="Celular de Registro"
              className="w-full p-3  border-primary border"
              {...register("phone", {
                required: "El Celular de usuario es obligatorio",
              })}
            />
            {errors.phone && (
              <ErrorMessage>{errors.phone.message}</ErrorMessage>
            )}
          </div>
          <div className="flex flex-col gap-5">
            <label className="font-normal text-lg">Dirección</label>
            <input
              type="direction"
              placeholder="Dirección de Registro"
              className="w-full p-3  border-primary border"
              {...register("direction", {
                required: "El Direccion de usuario es obligatorio",
              })}
            />
            {errors.direction && (
              <ErrorMessage>{errors.direction.message}</ErrorMessage>
            )}
          </div>
          <div className="flex flex-col gap-5">
            <label className="font-normal text-lg">Profesión</label>
            <input
              type="service"
              placeholder="Profesión de Registro"
              className="w-full p-3  border-primary border"
              {...register("service", {
                required: "El Servicio de usuario es obligatorio",
              })}
            />
            {errors.service && (
              <ErrorMessage>{errors.service.message}</ErrorMessage>
            )}
          </div>
          <div className="flex flex-col gap-5">
            <label className="font-normal text-lg">Contraseña</label>

            <input
              type="password"
              placeholder="Contraseña de Registro"
              className="w-full p-3  border-primary border"
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
            <label className="font-normal text-lg">Repetir Contraseña</label>

            <input
              id=" confirmation_password"
              type="password"
              placeholder="Repite contraseña de Registro"
              className="w-full p-3  border-primary border"
              {...register("confirmation_password", {
                required: "Repetir Password es obligatorio",
                validate: (value) =>
                  value === password || "Los Passwords no son iguales",
              })}
            />

            {errors.confirmation_password && (
              <ErrorMessage>
                {errors.confirmation_password.message}
              </ErrorMessage>
            )}
          </div>
          <input
            type="submit"
            value="Registrarme"
            className=" bg-primary hover:bg-lightpurple w-full p-3  text-white font-black  text-xl cursor-pointer mt-10"
          />
        </div>
      </form>
      <nav className="mt-10 flex flex-col space-y-4 mb-8">
        <Link
          to={"/auth/login"}
          className="text-center text-white font-normal"
        >
          ¿Ys tienes cuentas? Iniciar Sesiòn
        </Link>
      </nav>
      </div>
      </div>
    </>
  );
}
