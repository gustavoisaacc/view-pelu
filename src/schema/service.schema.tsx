import { z } from "zod";

export const serviceSchema = z.object({
  _id: z.string(),
  name: z.string(),
  description: z.string(),
  duration: z.string(),
  price: z.number(),
});

export type Service = z.infer<typeof serviceSchema>;
export type ServiceFormData = Pick<
  Service,
  "name" | "description" | "duration" | "price"
>;
