import { isAxiosError } from "axios";
import { api } from "../lib/axios";
import { Details } from "../schema/details.schema";

export const createReservation = async (formData: Details) => {
  console.log("🚀 ~ createReservation ~ formData:", formData);
  try {
    const { data } = await api.post("/detail ", formData);
    return data.message;
  } catch (error) {
    if (isAxiosError(error) && error.response) {
      console.log(error.response.data);
      return error.response.data;
    }
  }
};
