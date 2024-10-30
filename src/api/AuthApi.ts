import { isAxiosError } from "axios";
import { api } from "../lib/axios";
import { UserRegistrationForm } from "../schema/auth";

export async function createAccount(formData: UserRegistrationForm) {
  try {
    const { data } = await api.post("/auth/create-account", formData);
    return data.message;
  } catch (error) {
    if (isAxiosError(error) && error.response) {
      throw new Error(error.response.data.message);
    }
  }
}
