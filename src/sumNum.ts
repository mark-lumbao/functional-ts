type sumNumType = (param: number[]) => number;
const sumNum: sumNumType = (param) => {
  if (param.length <= 0) return 0;
  return param[0] + sumNum(param.slice(1));
};

export default sumNum;
