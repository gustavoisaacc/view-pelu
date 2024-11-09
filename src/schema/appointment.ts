import { z } from "zod";

export const appointmenSchema = z.object({
  date: z.string(),
  startTime: z.string(),
  delay: z.number(),
});
export type Appointment = z.infer<typeof appointmenSchema>;
export type AppointmentFormData = Pick<
  Appointment,
  "date" | "delay" | "startTime"
>;
