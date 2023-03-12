import { z } from "zod";

const signUpSchema = z.object({
  email: z.string().email(),
  password: z.string().min(4),
  image: z.string(),
  btc: z.string(),
});

const signInSchema = z.object({
  email: z.string().email(),
  password: z.string().min(4),
});

export type signUpTypeSchema = z.infer<typeof signUpSchema>;
export type signInTypeSchema = z.infer<typeof signInSchema>;

export { signUpSchema, signInSchema };
