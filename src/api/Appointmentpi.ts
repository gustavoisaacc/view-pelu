import { isAxiosError } from "axios";
import { AppointmentFormData, Appointment } from "../schema/appointment";
import { api } from "../lib/axios";

export const createAppointment = async (formData: AppointmentFormData) => {
  try {
    const { data } = await api.post("/appointment", formData);
    return data.message;
  } catch (error) {
    if (isAxiosError(error) && error.response) {
      console.log(
        "🚀 ~ createAppointment ~ error.response.data:",
        error.response
      );
      throw new Error(error.response.data.message);
    }
  }
};

export const getAppointment = async () => {
  try {
    const { data } = await api("/appointment");
    return data;
  } catch (error) {
    if (isAxiosError(error) && error.response) {
      throw new Error(error.response.data.message);
    }
  }
};

export const getAppointmentById = async (id: Appointment["_id"]) => {
  try {
    const { data } = await api(`/appointment/${id}`);
    return data;
  } catch (error) {
    if (isAxiosError(error) && error.response) {
      console.log("🚀 ~ getAppointmentById ~ error.response:", error.response);
      throw new Error(error.response.data.message);
    }
  }
};

export const deleteAppointment = async (id: Appointment["_id"]) => {
  try {
    const { data } = await api.delete(`/appointment/${id}`);
    return data.message;
  } catch (error) {
    if (isAxiosError(error) && error.response) {
      console.log("🚀 ~ deleteAppointment ~ error.response:", error.response);
      throw new Error(error.response.data.message);
    }
  }
};

type AppointmentApiType = {
  formData: AppointmentFormData;
  id: Appointment["_id"];
};

export const updateAppointment = async ({
  formData,
  id,
}: AppointmentApiType) => {
  try {
    const { data } = await api.put(`/appointment/${id}`, formData);
    console.log("🚀 ~ data:", data);
    return data.message;
  } catch (error) {
    if (isAxiosError(error) && error.response) {
      console.log("🚀 ~ error.response):", error.response.data.errors);
      if (isAxiosError(error) && error.response) {
        // Procesa los errores del servidor
        const errorMessages = error.response.data.errors
          .map((err: { msg: string }) => err.msg) // Extrae el mensaje de cada error
          .join(", "); // Combina todos los mensajes en una cadena

        throw new Error(errorMessages); // Lanza el error como una cadena de texto
      }
    }
  }
};
