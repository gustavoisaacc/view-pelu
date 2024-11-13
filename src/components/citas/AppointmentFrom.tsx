import { FieldErrors, UseFormRegister, UseFormSetValue } from "react-hook-form";
import ErrorMessage from "../ErroMessage";
import { AppointmentFormData } from "../../schema/appointment";
import { handleDateChange } from "../../lib/handleChange";
import { useLocation } from "react-router-dom";

type AppointmentTypeProps = {
  register: UseFormRegister<AppointmentFormData>;
  errors: FieldErrors<AppointmentFormData>;
  setValue: UseFormSetValue<AppointmentFormData>;
};

export default function AppointmentForm({
  register,
  errors,
  setValue,
}: AppointmentTypeProps) {
  const today = new Date().toISOString().split("T")[0];

  const location = useLocation();
  const paramsQuery = new URLSearchParams(location.search);
  const params = paramsQuery.get("appointmentId");
  console.log("🚀 ~ params:", params);

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
          onChange={(event) => handleDateChange({ event, setValue })}
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
          step="1800"
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
    </>
  );
}
