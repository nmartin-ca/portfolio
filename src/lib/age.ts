export default function AgeFromDate(date: Date) {
  const ageDifMs: number = Date.now() - date.getTime();
  const ageDate: Date = new Date(ageDifMs);
  const age: number = ageDate.getUTCFullYear() - 1970;
  return age
}