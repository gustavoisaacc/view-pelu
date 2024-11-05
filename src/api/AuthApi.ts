import { isAxiosError } from "axios";
import { api } from "../lib/axios";
import {
  ConfirmToken,
  ForgotPasswordForm,
  NewPasswordForm,
  RequestConfirmationCodeForm,
  User,
  UserLoginForm,
  UserRegistrationForm,
} from "../schema/auth";

export async function createAccount(formData: UserRegistrationForm) {
  try {
    const { data } = await api.post("/auth/create-account", formData);
    return data.message;
  } catch (error) {
    if (isAxiosError(error) && error.response) {
      console.log(
        "🚀 ~ AuthtenticateUser ~ error.response.data:",
        error.response.data
      );
      throw new Error(error.response.data.message);
    }
  }
}

export async function ConfirmAccount(token: ConfirmToken) {
  try {
    const { data } = await api.post(`/auth/confirm-account`, token);
    return data.message;
  } catch (error) {
    if (isAxiosError(error) && error.response) {
      console.log(
        "🚀 ~ AuthtenticateUser ~ error.response.data:",
        error.response.data
      );
      throw new Error(error.response.data.message);
    }
  }
}

export async function RequestNewCode(formData: RequestConfirmationCodeForm) {
  try {
    const { data } = await api.post("/auth/request-code", formData);
    return data.message;
  } catch (error) {
    if (isAxiosError(error) && error.response) {
      console.log(
        "🚀 ~ AuthtenticateUser ~ error.response.data:",
        error.response.data
      );
      throw new Error(error.response.data.message);
    }
  }
}

export async function ForgotPasswordReset(formData: ForgotPasswordForm) {
  try {
    const { data } = await api.post("/auth/forgot-password", formData);
    return data.message;
  } catch (error) {
    if (isAxiosError(error) && error.response) {
      console.log(
        "🚀 ~ AuthtenticateUser ~ error.response.data:",
        error.response.data
      );
      throw new Error(error.response.data.message);
    }
  }
}

export async function ValidateToken(formData: ConfirmToken) {
  try {
    const { data } = await api.post("/auth/validate-token", formData);
    return data.message;
  } catch (error) {
    if (isAxiosError(error) && error.response) {
      console.log(
        "🚀 ~ AuthtenticateUser ~ error.response.data:",
        error.response.data
      );
      throw new Error(error.response.data.message);
    }
  }
}

type UpdatePasswordProps = {
  formData: NewPasswordForm;
  token: ConfirmToken;
};

export async function UpdatePassword({ formData, token }: UpdatePasswordProps) {
  try {
    const { data } = await api.post(`/auth/update-password/${token}`, formData);
    return data.message;
  } catch (error) {
    if (isAxiosError(error) && error.response) {
      console.log(
        "🚀 ~ AuthtenticateUser ~ error.response.data:",
        error.response.data
      );
      throw new Error(error.response.data.message);
    }
  }
}

export async function AuthtenticateUser(formData: UserLoginForm) {
  try {
    const { data } = await api.post("/auth/login", formData);
    localStorage.setItem("TOKEN", data.token);
    return data.message;
  } catch (error) {
    if (isAxiosError(error) && error.response) {
      console.log(
        "🚀 ~ AuthtenticateUser ~ error.response.data:",
        error.response.data
      );
      throw new Error(error.response.data.message);
    }
  }
}

export async function getUser() {
  try {
    const { data } = await api<User>("/auth/user");
    return data;
  } catch (error) {
    if (isAxiosError(error) && error.response) {
      console.log(
        "🚀 ~ AuthtenticateUser ~ error.response.data:",
        error.response.data
      );
      throw new Error(error.response.data.message);
    }
  }
}
