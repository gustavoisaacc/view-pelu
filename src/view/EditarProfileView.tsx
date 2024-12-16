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
import HairSalonSpinner from "../components/Spinner";
import { getCoordinatesLocationIQ } from "../lib/Location";
import Map from "../components/Map";
export type Location = {
  lat: string;
  lon: string;
};
export type Address = {
  street: string;
  locality: string;
  province: string;
  house_number: string;
};
function EditarProfileView() {
  const { data, isLoading } = useAuth();
  console.log("🚀 ~ EditarProfileView ~ data:", data);
  const [location, setLocation] = useState<Location | null>(null);
  const [newAddress, setNewAddress] = useState<Address>({
    street: "",
    locality: "",
    province: "",
    house_number: "",
  });
  console.log("🚀 ~ EditarProfileView ~ newAddress:", newAddress);

  const initalState: UserFormData = {
    name: data?.name || "",
    lastName: data?.lastName || "",
    phone: data?.phone || "",
    state: data?.state || "",
    localities: data?.localities || "",
    direction: data?.direction || "",
    service: data?.service || "",
  };

  const {
    register,
    handleSubmit,
    watch,
    setValue,
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
      toast.success(data);
    },
  });
  useEffect(() => {
    if (newAddress) {
      setValue("state", newAddress.province); // Actualiza el campo de provincia
      setValue("localities", newAddress.locality); // Actualiza el campo de localidad
      setValue("direction", `${newAddress.street} ${newAddress.house_number}`); // Actualiza dirección con calle y número
    }
  }, [newAddress, setValue]);
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
  const address = `${data?.country} ${data?.state} ${data?.localities} ${data?.direction} `;

  useEffect(() => {
    if (!address.trim()) return;

    const getLocation = async () => {
      try {
        const res = await getCoordinatesLocationIQ(address);
        setLocation(res);
      } catch (error) {
        console.error("Error al obtener coordenadas:", error);
      }
    };
    getLocation();
  }, [address]);

  if (isLoading) return <HairSalonSpinner />;
  if (data)
    return (
      <>
        <div className=" w-[90%] m-auto">
          <div className="">
            <Button
              route="/dashboard"
              className="flex justify-center mb-10 bg-primary w-52  md:w-1/5 "
            >
              Volver
            </Button>
          </div>
          <div className=" m-auto p-4 md:p-16 bg-purple-50">
            <h1 className="text-3xl md:text-2xl text-slate-500 capitalize font-semibold flex justify-center mb-5">
              Editar Perfil
            </h1>
            <div className="mb-5 bg-lightpurple shadow-md shadow-purple-500 rounded-lg w-full ">
              <AvatarProfile data={data} />
            </div>
            <form onSubmit={onSubmit}>
              <EditUser register={register} errors={errors} />
              <div>
                {location && (
                  <Map location={location} setNewAddress={setNewAddress} />
                )}{" "}
              </div>

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
        </div>
      </>
    );
}

export default EditarProfileView;
