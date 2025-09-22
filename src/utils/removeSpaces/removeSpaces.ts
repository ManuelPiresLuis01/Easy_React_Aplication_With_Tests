export default function removeSpaces(t: any): string {
  return !t || !(typeof t === "string") ? "" : t.toString().trim();
}
