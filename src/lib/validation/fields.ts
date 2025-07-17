import { z } from "zod";

export const emailField = z
  .email({
    error: (issue) =>
      issue.input === undefined || issue.input === ""
        ? "error:required_email"
        : "error:invalid_email",
  })
  .max(100, { error: "error:limit_length_email" });

export const passwordField = z
  .string({
    error: (issue) =>
      issue.input === undefined || issue.input === ""
        ? "error:required_password"
        : "error:invalid_password",
  })
  .max(100, { error: "error:limit_length_password" });

export const confirmPasswordField = z
  .string({
    error: (issue) =>
      issue.input === undefined || issue.input === ""
        ? "error:required_confirm_password"
        : "error:invalid_confirm_password",
  })
  .max(100, { error: "error:limit_length_confirm_password" });
