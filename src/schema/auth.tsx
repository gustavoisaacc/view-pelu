import { User } from "lucide-react";
import { z } from "zod";
import { appointmenSchema } from "./appointment";

export const authSchema = z.object({
  name: z.string(),
  lastName: z.string(),
  phone: z.string(),
  state: z.string(),
  localities: z.string(),
  direction: z.string(),
  country: z.string(),
  email: z.string().email(),
  confirm: z.boolean(),
  password: z.string(),
  confirmation_password: z.string(),
  roles: z.string(),
  service: z.string(),
  token: z.string(),
});

type Auth = z.infer<typeof authSchema>;
export type UserLoginForm = Pick<Auth, "email" | "password">;
export type UserRegistrationForm = Pick<
  Auth,
  | "name"
  | "lastName"
  | "phone"
  | "direction"
  | "state"
  | "localities"
  | "email"
  | "password"
  | "confirmation_password"
  | "service"
>;
export type ConfirmToken = Pick<Auth, "token">;

export type RequestConfirmationCodeForm = Pick<Auth, "email">;
export type ForgotPasswordForm = Pick<Auth, "email">;
export type NewPasswordForm = Pick<Auth, "password" | "confirmation_password">;

// schema user
export const userSchema = z.object({
  _id: z.string(),
  name: z.string(),
  lastName: z.string(),
  phone: z.string(),
  direction: z.string(),
  email: z.string().email(),
  service: z.string(),
  state: z.string(),
  localities: z.string(),
  country: z.string(),
});

export type User = z.infer<typeof userSchema>;
export type UserFormData = Pick<
  User,
  | "name"
  | "lastName"
  | "direction"
  | "phone"
  | "service"
  | "state"
  | "localities"
>;

export const avatarSchema = z.object({
  _id: z.string(),
  url: z.string(),
  user: z.string(),
});

export type Avatar = z.infer<typeof avatarSchema>;
export type avatarFrom = Pick<Avatar, "url" | "user">;

const userclientSchema = z.object({
  user: userSchema,
  avatarUrl: z.string(),
  appointments: z.array(appointmenSchema),
});
export type UserClient = z.infer<typeof userclientSchema>;
