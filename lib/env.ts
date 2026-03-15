function readPublicEnv(name: string) {
  const value = process.env[name];
  return typeof value === "string" ? value.trim() : "";
}

const resolvedUrl = readPublicEnv("NEXT_PUBLIC_SUPABASE_URL");
const resolvedAnonKey = readPublicEnv("NEXT_PUBLIC_SUPABASE_ANON_KEY");
const resolvedPublishableKey = readPublicEnv("NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY");
const resolvedPublicKey = resolvedPublishableKey || resolvedAnonKey;

export function getMissingPublicEnvKeys() {
  const missing: string[] = [];

  if (!resolvedUrl) {
    missing.push("NEXT_PUBLIC_SUPABASE_URL");
  }

  if (!resolvedPublicKey) {
    missing.push("NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY or NEXT_PUBLIC_SUPABASE_ANON_KEY");
  }

  return missing;
}

export function getSupabaseBrowserConfig() {
  return {
    url: resolvedUrl,
    anonKey: resolvedAnonKey,
    publishableKey: resolvedPublishableKey,
    publicKey: resolvedPublicKey,
    projectRef: getSupabaseProjectRefFromUrl(resolvedUrl)
  };
}

export function getSupabaseProjectRefFromUrl(url: string) {
  try {
    return new URL(url).hostname.split(".")[0] ?? "";
  } catch {
    return "";
  }
}

export function getAdminEmail() {
  return readPublicEnv("NEXT_PUBLIC_ADMIN_EMAIL").toLowerCase();
}

export function hasServerAnthropicKey() {
  return Boolean(readPublicEnv("ANTHROPIC_API_KEY"));
}
