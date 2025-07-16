"use server";

import { createClient } from "@/lib/supabase/server";
import { baseUrl } from "@/lib/utils";
import { redirect } from "next/navigation";
import { z } from "zod";

const loginFormSchema = z.strictObject({
  email: z
    .email({
      error: (issue) =>
        issue.input === undefined || issue.input === ""
          ? "error:required_email"
          : "error:invalid_email",
    })
    .max(100, { error: "error:limit_length_email" }),
  password: z
    .string({
      error: (issue) =>
        issue.input === undefined || issue.input === ""
          ? "error:required_password"
          : "error:invalid_password",
    })
    .max(100, { error: "error:limit_length_password" }),
});

export async function loginAction(formData: FormData) {
  const raw = {
    email: formData.get("email"),
    password: formData.get("password"),
  };

  const result = loginFormSchema.safeParse(raw, { reportInput: true });

  if (!result.success) {
    return { isSuccess: false, treeifyError: z.treeifyError(result.error) };
  }

  const { email, password } = result.data;
  const supabase = await createClient();

  const { error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });
  if (!error) {
    redirect("/protected");
  } else {
    return {
      isSuccess: false,
      treeifyError: {
        errors: [`error:supabase_${String(error.code)}`, error.message],
      },
    };
  }
}

const forgotPasswordFormSchema = z.strictObject({
  email: z
    .email({
      error: (issue) =>
        issue.input === undefined || issue.input === ""
          ? "error:required_email"
          : "error:invalid_email",
    })
    .max(100, { error: "error:limit_length_email" }),
});

export async function forgotPasswordAction(formData: FormData) {
  const raw = {
    email: formData.get("email"),
  };

  const result = forgotPasswordFormSchema.safeParse(raw, { reportInput: true });

  if (!result.success) {
    return { isSuccess: false, treeifyError: z.treeifyError(result.error) };
  }

  const { email } = result.data;
  const supabase = await createClient();

  const { error } = await supabase.auth.resetPasswordForEmail(email, {
    redirectTo: `${baseUrl}/auth/callback?redirect_to=/reset-password`,
  });
  if (!error) {
    redirect("/forgot-password/completed");
  } else {
    return {
      isSuccess: false,
      treeifyError: {
        errors: [`error:supabase_${String(error.code)}`, error.message],
      },
    };
  }
}
