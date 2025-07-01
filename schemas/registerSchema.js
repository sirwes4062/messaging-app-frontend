import { z } from "zod";

export const registerSchema = z.object({
  fullname: z
    .string()
    .min(3, "Full name must be at least 3 characters")
    .refine((val) => /^[A-Za-z\s]+$/.test(val), {
      message: "Full name must contain only letters and spaces",
    })
    .refine((val) => val.trim().split(" ").length >= 2, {
      message: "Please enter your full name (first and last)",
    }),
  email: z.string().email("Invalid email address"),
  password: z.string().min(6, "Password must be at least 6 characters"),
});
