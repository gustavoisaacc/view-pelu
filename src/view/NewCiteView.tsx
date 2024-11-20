import { useForm } from "react-hook-form";
import AppointmentForm from "../components/citas/AppointmentFrom";
import Button from "../components/Button";
import { AppointmentFormData } from "../schema/appointment";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import {
  createAppointment,
  getAppointment,
  updateAppointment,
} from "../api/Appointmentpi";
import { toast } from "react-toastify";
import ListAppointement from "../components/citas/ListAppointement";
import { useLocation, useNavigate } from "react-router-dom";

function NewCiteView() {
  const location = useLocation();
  const paramsQuery = new URLSearchParams(location.search);
  const params = paramsQuery.get("appointmentId");
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    reset,
  } = useForm<AppointmentFormData>();

  const { data } = useQuery({
    queryKey: ["appointment"],
    queryFn: getAppointment,
    retry: 1,
    refetchOnWindowFocus: false,
  });

  const queryClient = useQueryClient();

  const { mutate } = useMutation({
    mutationFn: (args: {
      formData: AppointmentFormData;
      paramsId: string;
    }) => {
      const { formData, paramsId } = args;
      return paramsId
        ? updateAppointment({ id: paramsId, formData })
        : createAppointment(formData);
    },
    onError: (error) => {
      if (error instanceof Error) {
        const messages = error.message.split(", ");
        messages.forEach((msg) => toast.error(msg));
      }
    },
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: ["appointment"] });
      toast.success(data);
      reset();
      navigate(location.pathname);
    },
  });

  const handleAppointment = (formData: AppointmentFormData) => {
    if (params) {
      mutate({ formData, paramsId: params });
    } else {
      mutate({ formData, paramsId: "" });
    }
  };

  return (
    <div className="bg-lightpurple min-h-screen flex justify-center items-center px-4">
      <div className="w-full max-w-screen-lg">
        <Button
          route="/dashboard"
          className="mb-6 flex justify-center bg-primary hover:bg-secondary md:w-48"
        >
          Volver
        </Button>
        <div className="flex flex-col lg:flex-row gap-10 bg-purple-300 shadow-lg rounded-lg p-6">
          {/* Formulario */}
          <form
            onSubmit={handleSubmit(handleAppointment)}
            className="bg-primary shadow-lg rounded-lg lg:w-1/2 w-full flex-grow"
          >
            <div className="bg-primary h-auto w-full p-5 rounded-t-lg">
              <h1 className="text-4xl text-center font-black text-white">
                Crear citas
              </h1>
            </div>
            <div className="p-5">
              <AppointmentForm
                register={register}
                errors={errors}
                setValue={setValue}
              />
              <button
                type="submit"
                className="block w-full bg-lightpurple hover:bg-secondary mt-5 text-center text-white font-bold py-2 px-4 rounded shadow focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-opacity-75 transition duration-300 ease-in-out"
              >
                Guardar
              </button>
            </div>
          </form>
          {/* Lista de citas */}
          <div className="lg:w-1/2 w-full lg:max-h-[500px] lg:overflow-y-auto lg:scroll-m-1">
            {data && data.length > 0 ? (
              <ListAppointement data={data} />
            ) : (
              <h1 className="text-gray-400 font-semibold text-2xl text-center">
                Aún no hay categorías
              </h1>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default NewCiteView;
