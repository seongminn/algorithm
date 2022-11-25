/**
 *  arr 배열 요소의 총 합을 반환하는 함수
 * @param {number[]} arr
 * @returns {number}
 */
function getSum(arr) {
  return arr.reduce((acc, cur) => acc + cur, 0);
}

/**
 * 1. 객체 리터럴 생성
 * 2. tangerine 배열의 요소가 각각 몇 번 등장하는지 구한다.
 * 3. tangMap 객체의 value 배열{arr}을 오름차순으로 정렬한다.
 * 4. arr 배열의 가장 마지막 요소를 pop하여 k에서 빼고 answer에 1 더하는 것을 반복한다.
 * 5. k가 0과 같거나 작아지면 answer를 반환한다.
 *
 * @param {number} k
 * @param {number[]} tangerine
 * @returns {number}
 */

function tangerines(k, tangerine) {
  const tangMap = {};

  tangerine.forEach((el) => (tangMap[el] = (tangMap[el] || 0) + 1));

  const arr = Object.values(tangMap).sort((a, b) => a - b);
  let answer = 0;

  while (k > 0) {
    k -= arr.pop();
    answer += 1;
  }

  return answer;
}
