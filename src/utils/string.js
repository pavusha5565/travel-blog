export const parseNumber = (number) => {
  return number > 1000000
    ? (number / 1000000).toFixed(0) + "М"
    : number > 1000
    ? (number / 1000).toFixed(0) + "К"
    : number;
};
