import { z } from "zod";

export const authSchema = z.object({
  name: z.string(),
  lastName: z.string(),
  phone: z.string(),
  direction: z.string(),
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
  | "email"
  | "password"
  | "confirmation_password"
  | "service"
>;
export type ConfirmToken = Pick<Auth, "token">;

export type RequestConfirmationCodeForm = Pick<Auth, "email">;
export type ForgotPasswordForm = Pick<Auth, "email">;
export type NewPasswordForm = Pick<Auth, "password" | "confirmation_password">;
