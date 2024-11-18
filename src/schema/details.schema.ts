import { z } from "zod";

export const detailSchema = z.object({
  serviceid: z.string(),
  name: z.string(),
  price: z.number(),
  duration: z.string(),
  citaId: z.string(),
  date: z.string(),
  startTime: z.string(),
  delay: z.string(),
});

export type Details = z.infer<typeof detailSchema>;
