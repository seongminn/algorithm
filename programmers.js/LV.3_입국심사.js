function immigration(n, times) {
  times.sort((a, b) => b - a);

  let answer = 0;
  n -= times.length;
  const value = times.shift();

  while (n > 0) {
    let i = 1;
    const piv = value * i;
    answer += value;

    times.forEach((num) => {
      if (piv >= num) {
        answer += piv % num;
        n -= Math.ceil(piv / num);
      }
    });

    i++;
  }

  return answer;
}
