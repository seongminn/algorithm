function solution(storey) {
  const arr = [0, ...String(storey).split('').map(Number)];

  return arr.reduceRight((acc, cur, idx) => {
    if ((cur === 5 && arr[idx - 1] >= 5) || cur >= 6) {
      arr[idx - 1] += 1;

      return acc + (10 - cur);
    } else return acc + cur;
  }, 0);
}
