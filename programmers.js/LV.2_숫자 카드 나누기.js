/**
 * 배열의 모든 수를 나눌 수 있는 수는 곧, 배열의 가장 작은 수의 약수이다.
 *
 * 따라서 각 배열의 가장 작은 수의 약수를 구한 뒤 해당 약수의 각 요소에 대해 조건을 만족하는지 판별한다.
 *
 * @param {number[]} arrayA 철수의 카드 목록
 * @param {number[]} arrayB 영희의 카드 목록
 * @returns {number} 조건을 만족하는 수, 없다면 0을 반환한다.
 */
function divide_card(arrayA, arrayB) {
  const measureA = getGCD(arrayA[0]);
  const measureB = getGCD(arrayB[0]);
  let answer = 0;

  measureA.forEach((num) => {
    if (isDivide(num, arrayA) && isNotDivide(num, arrayB)) {
      answer = Math.max(num, answer);
    }
  });

  measureB.forEach((num) => {
    if (isDivide(num, arrayB) && isNotDivide(num, arrayA)) {
      answer = Math.max(num, answer);
    }
  });

  return answer;
}

/**
 * @param {number} num
 * @returns {number[]} 입력받은 수의 약수를 반환한다.
 */
function getGCD(num) {
  const arr = [];

  for (let i = 1; i * i <= num; i++) {
    if (i * i === num) arr.push(i);
    else if (num % i === 0) {
      arr.push(i);
      arr.push(Math.floor(num / i));
    }
  }

  return arr.sort((a, b) => b - a);
}

/**
 * @param {number} num
 * @param {number[]} arr
 * @returns {boolean} 배열의 모든 수가 num으로 나누어 떨어지는지 반환한다.
 */
function isDivide(num, arr) {
  return arr.every((item) => item % num === 0);
}

/**
 *
 * @param {number} num
 * @param {number[]} arr
 * @returns {boolean} 배열의 모든 수가 num으로 나누어 떨어지지 않는지 반환한다.
 */
function isNotDivide(num, arr) {
  return arr.every((item) => item % num !== 0);
}
