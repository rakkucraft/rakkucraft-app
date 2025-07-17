"use server";

import { createClient } from "@/lib/supabase/server";
import { baseUrl } from "@/lib/utils";
import {
  forgotPasswordFormSchema,
  loginFormSchema,
  resetPasswordFormSchema,
  signUpFormSchema,
} from "@/lib/validation/schemas";
import { redirect } from "next/navigation";
import { z } from "zod";

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
        errors: [
          `error:supabase_${String(error.code ?? "unknown")}`,
          error.message,
        ],
      },
    };
  }
}

export async function signUpAction(formData: FormData) {
  const raw = {
    email: formData.get("email"),
    password: formData.get("password"),
  };

  const result = signUpFormSchema.safeParse(raw, { reportInput: true });

  if (!result.success) {
    return { isSuccess: false, treeifyError: z.treeifyError(result.error) };
  }

  const { email, password } = result.data;
  const supabase = await createClient();

  const { error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      emailRedirectTo: `${baseUrl}/auth/callback`,
    },
  });
  if (!error) {
    redirect("/sign-up/completed");
  } else {
    return {
      isSuccess: false,
      treeifyError: {
        errors: [
          `error:supabase_${String(error.code ?? "unknown")}`,
          error.message,
        ],
      },
    };
  }
}

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
        errors: [
          `error:supabase_${String(error.code ?? "unknown")}`,
          error.message,
        ],
      },
    };
  }
}

export async function resetPasswordAction(formData: FormData) {
  const raw = {
    password: formData.get("password"),
    confirmPassword: formData.get("confirm-password"),
  };

  const result = resetPasswordFormSchema.safeParse(raw, { reportInput: true });

  if (!result.success) {
    return { isSuccess: false, treeifyError: z.treeifyError(result.error) };
  }

  const { password } = result.data;
  const supabase = await createClient();

  const { error } = await supabase.auth.updateUser({
    password,
  });

  if (!error) {
    redirect("/reset-password/completed");
  } else {
    return {
      isSuccess: false,
      treeifyError: {
        errors: [
          `error:supabase_${String(error.code ?? "unknown")}`,
          error.message,
        ],
      },
    };
  }
}
