const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const [, ...arr] = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n');

console.log(
  Array.from(new Set(arr))
    .sort((a, b) =>
      a.length === b.length ? a.localeCompare(b) : a.length - b.length
    )
    .join('\n')
);
