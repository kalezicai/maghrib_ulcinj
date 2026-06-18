const csrfTokens = new Map<string, number>();

export function validateCsrf(token: string): boolean {
  const timestamp = csrfTokens.get(token);
  if (!timestamp) return false;
  const valid = Date.now() - timestamp < 3_600_000;
  csrfTokens.delete(token);
  return valid;
}
