export const hasEnvVars =
  process.env.NEXT_PUBLIC_SUPABASE_URL &&
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

export const baseUrl =
  process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";
