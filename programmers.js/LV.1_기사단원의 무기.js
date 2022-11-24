/**
 * @param {Number} number
 * @param {Number} limit
 * @param {Number} power
 * @returns {number} 각 수의 소수의 개수 (개수가 limit 이상을 넘어가면 power로 대체)
 */
function solution(number, limit, power) {
  return Array.from({ length: number }, (_, idx) => idx + 1)
    .map((item) => (getPrime(item) > limit ? power : getPrime(item)))
    .reduce((acc, cur) => acc + cur, 0);
}

function getPrime(num) {
  let measure = 0;

  for (let i = 1; i <= Math.sqrt(num); i++) {
    if (i * i === num) measure++;
    else if (num % i === 0) measure += 2;
  }

  return measure;
}
