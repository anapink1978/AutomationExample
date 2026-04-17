export function generateUniqueEmail(prefix: string = 'test.user'): string {
  const timestamp = Date.now();
  return `${prefix}.${timestamp}@example.com`;
}

export function maskEmail(email: string): string {
  const [localPart, domain] = email.split('@');
  if (!localPart || !domain) return email;

  const visible = localPart.slice(0, 2);
  return `${visible}***@${domain}`;
}
