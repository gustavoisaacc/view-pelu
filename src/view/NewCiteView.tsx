import { useForm } from "react-hook-form";
import AppointmentForm from "../components/citas/AppointmentFrom";
import Button from "../components/Button";
import { AppointmentFormData } from "../schema/appointment";
import { useMutation } from "@tanstack/react-query";
import { createAppointment } from "../api/Appointmentpi";
import { toast } from "react-toastify";

function NewCiteView() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm<AppointmentFormData>();

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
    <div className="max-w-xl m-auto w-[90%]">
      <Button route="/dashboard" className=" inline-block  ml-16 mt-10 bg-primary">
        Volver
      </Button>
      <form
        onSubmit={handleSubmit(handleAppointment)}
        className=" mt-10 bg-primary shadow-lg round-lg max-w-xl"
      >
        <div className="bg-primary h-auto w-full p-5 ">
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
            className="block w-full bg-secondary hover:bg-darkpurple mt-5 text-center text-white font-bold py-2 px-4 rounded shadow focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-opacity-75 transition  duration-300 ease-in-outs"
          >
            Guardar
          </button>
        </div>
      </form>
    </div>
  );
}

export default NewCiteView;
