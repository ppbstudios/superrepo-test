export function parsePrice(value: number | string | null) {
  if (value === null) return null;
  else if (typeof value === 'string') {
    return Math.round(parseFloat(value));
  } else if (typeof value === 'number') {
    return Math.round(value);
  } else {
    return 420 * 1000 * 1000;
  }
}
