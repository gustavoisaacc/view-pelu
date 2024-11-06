import { FieldErrors, UseFormRegister } from "react-hook-form";
import ErrorMessage from "../ErroMessage";
import { AppointmentFormData } from "../../schema/appointment";

type AppointmentTypeProps = {
  register: UseFormRegister<AppointmentFormData>;
  errors: FieldErrors<AppointmentFormData>;
};

export default function AppointmentForm({
  register,
  errors,
}: AppointmentTypeProps) {
  const today = new Date().toISOString().split("T")[0];
  return (
    <>
      {/* Campo de Fecha */}
      <div className="flex flex-col gap-2">
        <label className="font-normal text-md mt-2 lg:text-xl" htmlFor="date">
          Fecha de la cita
        </label>
        <input
          id="date"
          type="date"
          min={today} // Restringe las fechas pasadas
          className="w-full p-3 border-gray-300 border"
          {...register("date", {
            required: "La fecha de la cita es obligatoria",
          })}
        />
        {errors.date && <ErrorMessage>{errors.date.message}</ErrorMessage>}
      </div>

      {/* Campo de Hora de Inicio */}
      <div className="flex flex-col gap-2">
        <label
          className="font-normal text-md mt-2 lg:text-xl"
          htmlFor="startTime"
        >
          Hora de inicio
        </label>
        <input
          id="startTime"
          type="time"
          className="w-full p-3 border-gray-300 border"
          {...register("startTime", {
            required: "La hora de inicio es obligatoria",
          })}
        />
        {errors.startTime && (
          <ErrorMessage>{errors.startTime.message}</ErrorMessage>
        )}
      </div>

      {/* Campo de Retraso */}
      <div className="flex flex-col gap-2">
        <label className="font-normal text-md mt-2 lg:text-xl" htmlFor="delay">
          Retraso permitido (en minutos)
        </label>
        <input
          id="delay"
          type="number"
          className="w-full p-3 border-gray-300 border"
          {...register("delay", {
            required: "El tiempo de retraso es obligatorio",
          })}
        />
        {errors.delay && <ErrorMessage>{errors.delay.message}</ErrorMessage>}
      </div>

      {/* Campo de Estado */}
      <div className="flex flex-col gap-2">
        <label className="font-normal text-md mt-2 lg:text-xl" htmlFor="state">
          Estado de la cita
        </label>
        <select
          id="state"
          className="w-full p-3 border-gray-300 border"
          {...register("state", {
            required: "El estado de la cita es obligatorio",
          })}
        >
          <option value="true">Confirmada</option>
          <option value="false">Pendiente</option>
        </select>
        {errors.state && <ErrorMessage>{errors.state.message}</ErrorMessage>}
      </div>
    </>
  );
}
