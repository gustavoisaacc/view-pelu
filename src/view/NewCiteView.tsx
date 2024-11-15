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
    mutationFn: ({
      formData,
      paramsId,
    }: {
      formData: AppointmentFormData;
      paramsId: string;
    }) => {
      // Si paramsId está presente, realiza la actualización; de lo contrario, crea un nuevo turno
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
      // Si hay un ID de turno, intenta actualizar
      mutate({ formData, paramsId: params });
    } else {
      // De lo contrario, crea uno nuevo
      mutate({ formData, paramsId: "" });
    }
  };

  return (
    <div className="max-w-full m-auto w-[90%]">
      <Button route="/dashboard" className=" inline-block mt-10">
        Volver
      </Button>
      <div className="flex justify-between gap-5 mt-10">
        <form
          onSubmit={handleSubmit(handleAppointment)}
          className="bg-white shadow-lg round-lg max-w-xl w-full"
        >
          <div className="bg-lightpurple h-auto w-full p-5 ">
            <h1 className="text-4xl text-center font-black text-white">
              Crear citas
            </h1>
          </div>
          <div className=" p-5">
            <AppointmentForm
              register={register}
              errors={errors}
              setValue={setValue}
              params={params || ""}
            />
            <button
              type="submit"
              className="block w-full bg-lightpurple hover:bg-darkpurple mt-5 text-center text-white font-bold py-2 px-4 rounded shadow focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-opacity-75 transition  duration-300 ease-in-outs"
            >
              {params ? "Editar" : "Guardar"}
            </button>
          </div>
        </form>
        <div className="w-full max-h-[500px] overflow-y-auto scroll-m-1 mt-0">
          {data && data.length > 0 ? (
            <ListAppointement data={data} />
          ) : (
            <h1 className="text-gray-400 font-semibold text-4xl text-center  ">
              Aun no hay categorias
            </h1>
          )}
        </div>
      </div>
    </div>
  );
}

export default NewCiteView;
