type generateNumbersType = (limit: number) => number[];
const generateNumbers: generateNumbersType = (limit) => {
  if (limit < 0) return [];
  return [...generateNumbers(limit - 1), limit];
};

export default generateNumbers;
