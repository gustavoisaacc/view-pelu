import { isAxiosError } from "axios";
import { api } from "../lib/axios";

export const paymerCreate = async (formData) => {
  try {
    const { data } = await api.post("/create-payment", formData);
    return data.url;
  } catch (error) {
    if (isAxiosError(error) && error.response) {
      console.log("🚀 ~ paymerCreate ~ error.response:", error.response.data);
    }
  }
};
