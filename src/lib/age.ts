export default function AgeFromDate(date: Date) {
  let ageDifMs: number = Date.now() - date.getTime();
  let ageDate: Date = new Date(ageDifMs);
  let age: number = ageDate.getUTCFullYear() - 1970;
  return age
}