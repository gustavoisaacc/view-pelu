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
        error.response.data
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
      throw new Error(error.response.data.message);
    }
  }
};
