function solution(a, b, n) {
  let answer = 0;

  while (n >= a) {
    const rest = Math.floor(n / a);

    answer += rest * b;
    n = rest * b + (n % a);
  }

  return answer;
}
