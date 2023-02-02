const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const [num, ...input] = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\r\n');

function getSum(item) {
  const digits = item.match(/\d/g);

  return digits?.reduce((acc, cur) => acc + +cur, 0) || 0;
}

input.sort((a, b) => {
  if (a.length !== b.length) return a.length - b.length;
  else if (getSum(a) !== getSum(b)) return getSum(a) - getSum(b);
  else return a.localeCompare(b);
});

console.log(input.join('\n'));
