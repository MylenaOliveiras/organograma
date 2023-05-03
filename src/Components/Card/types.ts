import { z } from "zod";

export const cardSchema = z.object({
  id: z.number().optional(),
  name: z.string(),
  position: z.string(),
  image: z.string(),
  team: z.string(),
  primaryColor: z.string().optional(),
});

export type Cards = z.infer<typeof cardSchema>;
