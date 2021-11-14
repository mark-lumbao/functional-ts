import generateNumbers from './src/generateNumbers';
import sumNum from './src/sumNum';
import { map, map2 } from './src/map';

const arg = Number(process.argv[2]) || 0;
const add = (a: number, b: number) => a + b;
const add1 = (a: number) => a + 1;

console.log(
  'Generated numbers list:',
  generateNumbers(arg),
  'The sum of numbers from 0 to',
  arg,
  'is equal to',
  sumNum(generateNumbers(arg)),
);

console.log(
  'Result of mapping with Array map function: ',
  map(generateNumbers(arg))((a) => add(a, 2)),
);

console.log(
  'Result of mapping with vanilla recursion: ',
  map2(generateNumbers(arg))(add1),
);
