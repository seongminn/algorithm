/**
 * 1. 주어진 수 10진수 n을 k진수로 변환한다.
 * 2. 얻은 값을 0을 기준으로 분할한 뒤 2 이상의 수만 보관한다.
 * 3. 얻은 값이 소수인지 판별하여 소수의 개수를 반환한다.
 *
 * @param {number} n
 * @param {number} k
 * @returns {number}
 */
function getPrime_k(n, k) {
  // parseInt => k진수를 10진수로
  // toString => 10진수를 k진수로
  const num = n.toString(k).split(0);
  const arr = num.map((item) => Number(item)).filter((item) => item >= 2);

  return arr.filter((item) => isPrime(item)).length;
}

/**
 * 소수는 본인과 1을 제외한 수로 나누어 떨어지지 않는다.
 *
 * 따라서 2부터 본인의 제곱근까지 반복문을 돌며 나누어 떨어지는 수가 단 하나라도 있으면 소수가 아님
 *
 * @param {number} num
 * @returns {boolean}
 */
function isPrime(num) {
  for (let i = 2; i <= num ** 0.5; i++) {
    if (num % i === 0) return false;
  }

  return true;
}

/**
 * 처음 작성한 소수 판별 함수
 *
 * 1과 본인을 제외한 수로 나누어 떨어지는지 확인만 하면 되므로
 * 굳이 약수의 개수를 구할 필요가 없음
 *
 * @param {number} num
 * @returns {boolean}
 */
function worse_isPrime(num) {
  let prime = 2;

  for (let i = 2; i <= num ** 0.5; i++) {
    // 2부터 시작하기 때문에 소수라면 여기서 걸리는 i가 단 하나도 없다. 즉, 필요 없는 코드
    if (num % i === 0) {
      num = num % i;
      prime++;

      if (i * i !== num) prime++;
    }
  }

  return prime === 2;
}
