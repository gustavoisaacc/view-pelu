import { UseFormSetValue } from "react-hook-form";
import { AppointmentFormData } from "../schema/appointment";

// Verificar si el día seleccionado es lunes
type handleDateChangeType = {
  event: React.ChangeEvent<HTMLInputElement>;
  setValue: UseFormSetValue<AppointmentFormData>;
};
export const handleDateChange = ({ event, setValue }: handleDateChangeType) => {
  const selectedDate = new Date(event.target.value);
  const dayOfWeek = selectedDate.getUTCDay();
  console.log("🚀 ~ handleDateChange ~ dayOfWeek:", dayOfWeek);
  if (dayOfWeek === 1) {
    // 1 representa lunes en JavaScript (donde 0 es domingo)
    alert("Los lunes no están disponibles para reservar.");
    event.target.value = ""; // Limpia el valor para forzar al usuario a elegir otra fecha
    setValue("date", ""); // Limpia el campo en el formulario
  }
};
