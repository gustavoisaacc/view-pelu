import { isAxiosError } from "axios";
import { Appointment } from "../schema/appointment";
import { api } from "../lib/axios";

export const createAppointment = async (formData: Appointment) => {
  console.log("🚀 ~ createAppointment ~ formData:", formData);
  try {
    const { data } = await api.post("/appointment", formData);
    console.log("🚀 ~ createAppointment ~ data:", data);
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
