import { getAdminEmail } from "./env";

export const ADMIN_EMAIL = getAdminEmail();

export function isAdminEmail(email?: string | null) {
  if (!ADMIN_EMAIL) {
    return false;
  }

  return (email ?? "").toLowerCase() === ADMIN_EMAIL;
}
