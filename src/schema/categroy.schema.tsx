import { z } from "zod";

export const categorySchema = z.object({
  _id: z.string(),
  name: z.string(),
});

export const dashboardCayegorySchema = z.array(
  categorySchema.pick({
    _id: true,
    name: true,
  })
);

export type Category = z.infer<typeof categorySchema>;
export type CategoryData = Pick<Category, "name">;
