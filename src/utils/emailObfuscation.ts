const OFFSET = 17;

export const encodeEmailAddress = (email: string): string =>
  Array.from(email)
    .map((character, index) => (character.charCodeAt(0) + OFFSET + index).toString(36))
    .join("-");

export const decodeEmailAddress = (value: string): string =>
  value
    .split("-")
    .map((code, index) => String.fromCharCode(Number.parseInt(code, 36) - OFFSET - index))
    .join("");
