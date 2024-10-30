import { isAxiosError } from "axios";
import { api } from "../lib/axios";
import { Service, ServiceFormData } from "../schema/service.schema";
import { Category } from "../schema/categroy.schema";

type ServiceApiType = {
  formData: ServiceFormData;
  categoryId: Category["_id"];
  serviceId: Service["_id"];
};
export async function cerateService({
  formData,
  categoryId,
}: Pick<ServiceApiType, "formData" | "categoryId">) {
  try {
    const { data } = await api.post(
      `/category/${categoryId}/service`,
      formData
    );
    return data.message;
  } catch (error) {
    if (isAxiosError(error) && error.response) {
      console.log("🚀 ~ error:", error.response);
      throw new Error(error.response.data.error);
    }
  }
}

export async function getService(categoryId: Category["_id"]) {
  try {
    const { data } = await api(`/category/${categoryId}/service`);
    return data;
  } catch (error) {
    if (isAxiosError(error) && error.response) {
      throw new Error(error.response.data.error);
    }
  }
}

export async function getServiceById({
  categoryId,
  serviceId,
}: Pick<ServiceApiType, "categoryId" | "serviceId">) {
  try {
    const { data } = await api(`category/${categoryId}/service/${serviceId}`);
    return data;
  } catch (error) {
    if (isAxiosError(error) && error.response) {
      throw new Error(error.response.data.error);
    }
  }
}

export async function updateService({
  categoryId,
  serviceId,
  formData,
}: ServiceApiType) {
  try {
    const { data } = await api.put(
      `category/${categoryId}/service/${serviceId}`,
      formData
    );
    return data.message;
  } catch (error) {
    if (isAxiosError(error) && error.response) {
      console.log("🚀 ~ error:", error.response);
      throw new Error(error.response.data.error);
    }
  }
}

export async function deleteService({
  categoryId,
  serviceId,
}: Pick<ServiceApiType, "categoryId" | "serviceId">) {
  try {
    const { data } = await api.delete(
      `category/${categoryId}/service/${serviceId}`
    );
    return data.message;
  } catch (error) {
    if (isAxiosError(error) && error.response) {
      throw new Error(error.response.data.error);
    }
  }
}
