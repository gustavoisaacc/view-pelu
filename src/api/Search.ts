import { isAxiosError } from "axios";
import { api } from "../lib/axios";

export const filterUsers = async ({ search }) => {
  try {
    const { data } = await api.post(`/filter?search=${search}`);
    return data;
  } catch (error) {
    if (isAxiosError(error) && error.response) {
      throw Error(error.response.data.message);
    }
  }
};
