import { z } from "zod";

export const issueSchema = z.object({
  title: z.string().min(1, "Title must be 1 or more characters long").max(255),
  description: z
    .string()
    .min(1, "Description must be 1 or more characters long"),
});
