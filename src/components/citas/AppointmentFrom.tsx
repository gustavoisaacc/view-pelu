import { FieldErrors, UseFormRegister, UseFormSetValue } from "react-hook-form";
import ErrorMessage from "../ErroMessage";
import { AppointmentFormData } from "../../schema/appointment";
import { handleDateChange } from "../../lib/handleChange";
import { useQuery } from "@tanstack/react-query";
import { getAppointmentById } from "../../api/Appointmentpi";
import { useEffect } from "react";
import { format } from "@formkit/tempo";

type AppointmentTypeProps = {
  register: UseFormRegister<AppointmentFormData>;
  errors: FieldErrors<AppointmentFormData>;
  setValue: UseFormSetValue<AppointmentFormData>;
  params: string;
};

export default function AppointmentForm({
  register,
  errors,
  setValue,
  params,
}: AppointmentTypeProps) {
  const today = new Date().toISOString().split("T")[0];

  const { data } = useQuery<AppointmentFormData>({
    queryKey: ["appoitmentEdit", params],
    queryFn: () => getAppointmentById(params || ""),
    enabled: !!params,
    retry: false,
  });

  useEffect(() => {
    if (data && params) {
      const formatDate = format({
        date: new Date(data.date),
        format: "YYYY-MM-DD",
        tz: "Pacific/Chatham",
      });
      setValue("date", formatDate);
      setValue("startTime", data.startTime);
      setValue("delay", data.delay);
    }
  }, [data, params, setValue]);

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
