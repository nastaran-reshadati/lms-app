export function GenerateId(): string {
  return (
    Math.random().toString(36).substring(2, 10) + "" + new Date().getTime()
  );
}
