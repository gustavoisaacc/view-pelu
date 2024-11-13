import { useForm } from "react-hook-form";
import AppointmentForm from "../components/citas/AppointmentFrom";
import Button from "../components/Button";
import { AppointmentFormData } from "../schema/appointment";
import { useMutation, useQuery } from "@tanstack/react-query";
import { createAppointment, getAppointment } from "../api/Appointmentpi";
import { toast } from "react-toastify";
import ListAppointement from "../components/citas/ListAppointement";

function NewCiteView() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm<AppointmentFormData>();

  const { data } = useQuery({
    queryKey: ["appointment"],
    queryFn: getAppointment,
    retry: 1,
    refetchOnWindowFocus: false,
  });

  const { mutate } = useMutation({
    mutationFn: createAppointment,
    onError: (error) => {
      toast.error(`${error}`);
    },
    onSuccess: (data) => {
      toast.success(data);
    },
  });

  const handleAppointment = (formData: AppointmentFormData) => mutate(formData);

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
            />
            <button
              type="submit"
              className="block w-full bg-lightpurple hover:bg-darkpurple mt-5 text-center text-white font-bold py-2 px-4 rounded shadow focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-opacity-75 transition  duration-300 ease-in-outs"
            >
              Guardar
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
