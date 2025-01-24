import { useForm } from "react-hook-form";
import { UserRegistrationForm } from "../../schema/auth";
import ErrorMessage from "../../components/ErroMessage";
import { Link, useNavigate } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";
import { createAccount } from "../../api/AuthApi";
import { toast } from "react-toastify";
import { getLocalities, getState } from "../../lib/apiCountry";
import { useEffect, useState } from "react";
import { Province } from "../../schema/state.schema";
import "../../components/home/style/select.css";
type StateResponse = {
  provincias: Province[];
};
type Municipio = {
  id: string;
  nombre: string;
};
export default function RegisterView() {
  const [state, setState] = useState<StateResponse | null>(null);
  const [provinceId, setProvinceId] = useState("");
  const [localities, setLocalities] = useState<Municipio[]>([]);
  const isBrave = (() => {
    return (
      (navigator as any).brave &&
      typeof (navigator as any).brave.isBrave === "function"
    );
  })();

  const initialValues: UserRegistrationForm = {
    name: "",
    lastName: "",
    phone: "",
    state: "",
    localities: "",
    direction: "",
    email: "",
    password: "",
    confirmation_password: "",
    service: "",
    urlInstagram: "",
  };

  const navigate = useNavigate();
  //provincias
  useEffect(() => {
    const fetchData = async () => {
      const data = await getState();
      const sortRes = data.provincias.sort((a: Province, b: Province) =>
        a.nombre.localeCompare(b.nombre)
      );
      setState({ provincias: sortRes });
    };

    fetchData();
  }, [provinceId]);
  useEffect(() => {
    const fetchData = async () => {
      const data = await getLocalities(provinceId);
      const sortRes = data.municipios.sort((a: Municipio, b: Municipio) =>
        a.nombre.localeCompare(b.nombre)
      );
      setLocalities(sortRes);
    };

    fetchData();
  }, [provinceId]);
  //localidades
  const handelChange = async (e: React.ChangeEvent<HTMLSelectElement>) => {
    const id = e.target.value;
    setProvinceId(id);
  };
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm<UserRegistrationForm>({ defaultValues: initialValues });

  const password = watch("password");
  const { mutate } = useMutation({
    mutationFn: createAccount,
    onError: (error) => {
      toast.error(`${error}`);
    },
    onSuccess: (data) => {
      toast.success(data);
      reset();
      setTimeout(() => {
        navigate("/auth/login");
      }, 3000);
    },
  });

  const handleRegister = (formData: UserRegistrationForm) => {
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
            <div className="space-y-8">
              <div className="bg-primary h-auto w-full p-5 ">
                <h1 className="text-4xl font-black text-white">Crear Cuenta</h1>
                <p className="text-2xl font-light  text-white mt-5">
                  Llena el formulario para {""}
                  <span className=" text-gray-800 font-bold">
                    {" "}
                    crear tu cuenta
                  </span>
                </p>
              </div>
              <div className="p-10">
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
                  {errors.name && (
                    <ErrorMessage>{errors.name.message}</ErrorMessage>
                  )}
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
                <div className="flex flex-col gap-5 relative overflow-visible">
                  <label className="font-normal text-lg">Provincia</label>
                  <select
                    {...register("state")}
                    className={`w-full p-3 border border-primary rounded-md bg-white text-gray-800 shadow-sm focus:ring-2 focus:ring-primary focus:outline-none transition-all overflow-hidden text-ellipsis  ${
                      isBrave ? "custom-brave-fix" : ""
                    }`}
                    onChange={(e) => handelChange(e)}
                  >
                    <option value="">Seleccione una provincia</option>
                    {state?.provincias?.map((item) => (
                      <option key={item.id} value={item.nombre}>
                        {item.nombre}
                      </option>
                    ))}
                  </select>
                  {errors.state && (
                    <ErrorMessage>{errors.state.message}</ErrorMessage>
                  )}
                </div>

                <div className="flex flex-col gap-5">
                  <label className="font-normal text-lg">Localidad</label>
                  <select
                    {...register("localities")}
                    className="w-full p-3  border-primary border outline-none"
                  >
                    <option value="">Seleccione una localidad</option>
                    {localities?.map((item) => (
                      <option key={item.id} value={item.nombre}>
                        {item.nombre}
                      </option>
                    ))}
                  </select>
                  {errors.localities && (
                    <ErrorMessage>{errors.localities.message}</ErrorMessage>
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
                  <label className="font-normal text-lg">Instagram</label>
                  <input
                    type="text"
                    placeholder="Url perfil Instagram"
                    className="w-full p-3  border-primary border"
                    {...register("urlInstagram", {
                      required: "La url de Instagram es obligatorio",
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
                  <label className="font-normal text-lg">
                    Repetir Contraseña
                  </label>

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
              </div>
              <input
                type="submit"
                value="Registrarme"
                className=" bg-primary hover:bg-primary/85 w-full p-3  text-white font-black  text-xl cursor-pointer mt-10"
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
