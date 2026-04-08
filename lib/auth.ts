// Simple client-side auth for Brain premium content
// Password hash is SHA-256 of the actual password

// SHA-256 hash of "mash-brain-2024"
const PASSWORD_HASH = "a1b2c3"; // placeholder, will be set properly

export async function hashPassword(password: string): Promise<string> {
  const encoder = new TextEncoder();
  const data = encoder.encode(password);
  const hashBuffer = await crypto.subtle.digest("SHA-256", data);
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  return hashArray.map((b) => b.toString(16).padStart(2, "0")).join("");
}

// We'll compute and store the real hash at build time
// For now, verify against stored hash
export async function verifyPassword(password: string): Promise<boolean> {
  const hash = await hashPassword(password);
  return hash === getPasswordHash();
}

function getPasswordHash(): string {
  // SHA-256 of "mash-brain-2024"
  return "956bb1c08a17ed762234548a4d07df8f6b3e9b176675ceda6d9475925f08c742";
}

const AUTH_KEY = "glossary_auth";

export function isAuthenticated(): boolean {
  if (typeof window === "undefined") return false;
  return localStorage.getItem(AUTH_KEY) === "true";
}

export function setAuthenticated(value: boolean): void {
  if (typeof window === "undefined") return;
  if (value) {
    localStorage.setItem(AUTH_KEY, "true");
  } else {
    localStorage.removeItem(AUTH_KEY);
  }
}

export function logout(): void {
  setAuthenticated(false);
}
