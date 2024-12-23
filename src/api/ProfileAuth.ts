import { isAxiosError } from "axios";
import { api } from "../lib/axios";
import { Avatar, avatarFrom, User, UserFormData } from "../schema/auth";
export async function getUser() {
  try {
    const { data } = await api<User>("/user");
    return data;
  } catch (error) {
    if (isAxiosError(error) && error.response) {
      throw new Error(error.response.data.message);
    }
  }
}

export async function getUserAvatar() {
  try {
    const { data } = await api<Avatar>("/avatar");
    return data.url;
  } catch (error) {
    if (isAxiosError(error) && error.response) {
      throw new Error(error.response.data.message);
    }
  }
}

export const upLoadAvatar = async (formData: avatarFrom) => {
  console.log("🚀 ~ upLoadAvatar ~ formData:", formData);
  try {
    const { data } = await api.post("/new-avatar", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    return data.message;
  } catch (error) {
    if (isAxiosError(error) && error.response) {
      throw new Error(error.response.data.message);
    } else {
      console.error("🚀 ~ upLoadAvatar ~ error desconocido:", error);
      throw new Error("Ocurrió un error inesperado al subir la imagen");
    }
  }
};

export const updateUser = async (formData: UserFormData) => {
  try {
    const { data } = await api.put("/edit-user", formData);
    console.log("🚀 ~ updateUser ~ data:", data);
    return data.message;
  } catch (error) {
    if (isAxiosError(error) && error.response) {
      throw new Error("Error al editar el usuario");
    }
  }
};

//perfiles para el cliente

export async function getUserClient() {
  try {
    const { data } = await api("/profile");
    return data;
  } catch (error) {
    if (isAxiosError(error) && error.response) {
      throw new Error(error.response.data.message);
    }
  }
}

export const getUserClientByid = async (id: User["_id"]) => {
  try {
    const { data } = await api(`/profile/${id}`);
    return data;
  } catch (error) {
    if (isAxiosError(error) && error.response) {
      throw new Error(error.response.data.message);
    }
  }
};
