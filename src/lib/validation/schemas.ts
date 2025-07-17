import { z } from "zod";
import { confirmPasswordField, emailField, passwordField } from "./fields";

export const loginFormSchema = z.strictObject({
  email: emailField,
  password: passwordField,
});

export const signUpFormSchema = z.strictObject({
  email: emailField,
  password: passwordField,
});

export const forgotPasswordFormSchema = z.strictObject({
  email: emailField,
});

export const resetPasswordFormSchema = z
  .strictObject({
    password: passwordField,
    confirmPassword: confirmPasswordField,
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "error:password_mismatch",
    path: ["confirmPassword"],
  });
