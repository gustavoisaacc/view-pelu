import { useForm } from "react-hook-form";
import AppointmentForm from "../components/citas/AppointmentFrom";
import Button from "../components/Button";

function NewCiteView() {
  const {
    register,
    formState: { errors },
  } = useForm();
  return (
    <div className="max-w-xl m-auto w-[90%]">
      <Button route="/dashboard" className=" inline-block  ml-16 mt-10">
        Volver
      </Button>
      <form className=" mt-10 bg-white shadow-lg round-lg max-w-xl">
        <div className="bg-lightpurple h-auto w-full p-5 ">
          <h1 className="text-4xl text-center font-black text-white">
            Crear citas
          </h1>
        </div>
        <div className=" p-5">
          <AppointmentForm register={register} errors={errors} />
          <button
            type="submit"
            className="block w-full bg-lightpurple hover:bg-darkpurple mt-5 text-center text-white font-bold py-2 px-4 rounded shadow focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-opacity-75 transition  duration-300 ease-in-outs"
          >
            Guardar
          </button>
        </div>
      </form>
    </div>
  );
}

export default NewCiteView;
