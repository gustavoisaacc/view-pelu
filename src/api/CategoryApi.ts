import { isAxiosError } from "axios";
import { api } from "../lib/axios";
import {
  Category,
  CategoryData,
  dashboardCayegorySchema,
} from "../schema/categroy.schema";

export async function createCategory(formData: CategoryData) {
  try {
    const { data } = await api.post("/category", formData);
    return data.message;
  } catch (error) {
    if (isAxiosError(error) && error.response) {
      throw new Error(error.response.data.error);
    }
  }
}

export async function getCategory() {
  try {
    const { data } = await api("/category");
    const response = dashboardCayegorySchema.safeParse(data);
    if (response.success) {
      return response.data;
    }
  } catch (error) {
    if (isAxiosError(error) && error.response) {
      throw new Error(error.response.data.error);
    }
  }
}

export async function getCategoryById(id: Category["_id"]) {
  try {
    const { data } = await api(`/category/${id}`);
    return data;
  } catch (error) {
    if (isAxiosError(error) && error.response) {
      throw new Error(error.response.data.error);
    }
  }
}

type CategoryApiType = {
  formData: CategoryData;
  categoryId?: Category["_id"];
};

export async function updateCategoru({
  formData,
  categoryId,
}: CategoryApiType) {
  try {
    const { data } = await api.put(`/category/${categoryId}`, formData);
    return data.message;
  } catch (error) {
    if (isAxiosError(error) && error.response) {
      throw new Error(error.response.data.error);
    }
  }
}

export async function deleteCategory(id: Category["_id"]) {
  try {
    const { data } = await api.delete(`/category/${id}`);
    return data.message;
  } catch (error) {
    if (isAxiosError(error) && error.response) {
      throw new Error(error.response.data.error);
    }
  }
}
