import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import Button from "../components/Button";
import EditUser from "../components/profile/EditUser";
import { useAuth } from "../hooks/useAuth";
import { UserFormData } from "../schema/auth";
import AvatarProfile from "../components/profile/AvatarProfile";
import { useMutation } from "@tanstack/react-query";
import { updateUser } from "../api/ProfileAuth";
import { toast } from "react-toastify";

function EditarProfileView() {
  const { data, isError, isLoading } = useAuth();

  const initalState: UserFormData = {
    name: data.name,
    lastName: data.lastName,
    phone: data.phone,
    direction: data.direction,
    service: data.service,
  };

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<UserFormData>({
    defaultValues: initalState,
  });

  const [isButtonDisabled, setIsButtonDisabled] = useState(true);

  const { mutate } = useMutation({
    mutationFn: updateUser,
    onError: (error) => {
      console.log("🚀 ~ EditarProfileView ~ error:", error);
    },
    onSuccess: (data) => {
      console.log("🚀 ~ EditarProfileView ~ data:", data);
      toast.success(data);
    },
  });

  // Función para comparar los objetos
  const hasChanged = (original: UserFormData, updated: UserFormData) => {
    return Object.keys(original).some(
      (key) =>
        original[key as keyof UserFormData] !==
        updated[key as keyof UserFormData]
    );
  };
  const watchedValues = watch();

  useEffect(() => {
    setIsButtonDisabled(!hasChanged(initalState, watchedValues));
  }, [watchedValues]);

  const onSubmit = handleSubmit(async (formData: UserFormData) => {
    if (hasChanged(initalState, formData)) {
      mutate(formData);
      setIsButtonDisabled(true);
    }
  });

  if (isLoading) return <p>cargando...</p>;
  if (data)
    return (
      <>
        <Button route="/dashboard" className="inline-block ml-16 mt-10">
          Volver
        </Button>
        <div className="max-w-screen-xl m-auto p-16">
          <h1 className="text-2xl capitalize font-semibold my-5">
            Editar Perfil
          </h1>
        </div>
        <div className="max-w-screen-lg m-auto p-16 w-[90%]">
          <div className="mb-5">
            <AvatarProfile data={data} />
          </div>
          <form onSubmit={onSubmit}>
            <EditUser register={register} errors={errors} />
            <button
              type="submit"
              className={`block w-full mt-5 text-center font-bold py-2 px-4 rounded shadow focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-opacity-75 transition duration-300 ease-in-out 
                ${
                  isButtonDisabled
                    ? "bg-gray-400 cursor-not-allowed text-white"
                    : "bg-lightpurple hover:bg-darkpurple text-white"
                }`}
              disabled={isButtonDisabled}
            >
              Guardar
            </button>
          </form>
        </div>
      </>
    );
}

export default EditarProfileView;
