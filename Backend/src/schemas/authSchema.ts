import { z } from "zod";

const signUpSchema = z.object({
  email: z.string().email(),
  password: z.string().min(4),
  image: z.string(),
  btc: z.string(),
});

export type signUpTypeSchema = z.infer<typeof signUpSchema>;

export { signUpSchema };
