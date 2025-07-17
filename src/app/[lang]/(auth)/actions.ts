"use server";

import { createClient } from "@/lib/supabase/server";
import { ActionResult } from "@/lib/types";
import { baseUrl } from "@/lib/utils";
import {
  forgotPasswordFormSchema,
  loginFormSchema,
  resetPasswordFormSchema,
  signUpFormSchema,
} from "@/lib/validation/schemas";
import { z } from "zod";

export async function loginAction(formData: FormData): Promise<ActionResult> {
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
    return { isSuccess: true, redirectTo: "/protected" };
  } else {
    return {
      isSuccess: false,
      treeifyError: {
        errors: [`error:supabase_${String(error.code ?? "unknown")}`],
      },
    };
  }
}

export async function signUpAction(formData: FormData): Promise<ActionResult> {
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
    return { isSuccess: true, redirectTo: "/sign-up/completed" };
  } else {
    return {
      isSuccess: false,
      treeifyError: {
        errors: [`error:supabase_${String(error.code ?? "unknown")}`],
      },
    };
  }
}

export async function forgotPasswordAction(
  formData: FormData,
): Promise<ActionResult> {
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
    return { isSuccess: true, redirectTo: "/forgot-password/completed" };
  } else {
    return {
      isSuccess: false,
      treeifyError: {
        errors: [`error:supabase_${String(error.code ?? "unknown")}`],
      },
    };
  }
}

export async function resetPasswordAction(
  formData: FormData,
): Promise<ActionResult> {
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
    return { isSuccess: true, redirectTo: "/reset-password/completed" };
  } else {
    return {
      isSuccess: false,
      treeifyError: {
        errors: [`error:supabase_${String(error.code ?? "unknown")}`],
      },
    };
  }
}

export async function logoutAction(): Promise<ActionResult> {
  const supabase = await createClient();
  const { error } = await supabase.auth.signOut();
  if (!error) {
    return { isSuccess: true, redirectTo: "/login" };
  } else {
    return {
      isSuccess: false,
      treeifyError: {
        errors: [`error:supabase_${String(error.code ?? "unknown")}`],
      },
    };
  }
}
