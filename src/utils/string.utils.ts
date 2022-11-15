export function addLeadingZeros(num: any, totalLength: number) {
  return String(num).padStart(totalLength, "0");
}
