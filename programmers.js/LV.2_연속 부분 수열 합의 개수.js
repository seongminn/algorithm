/**
 * 1. 동일한 배열을 한 번 이어 붙여 원형 모습을 만들어준다.
 * 2. 기존 수열의 개수만큼 반복문을 돌며 수열을 현재 idx 개수 만큼 분열한다.
 * 3. 분할한 수열 배열의 요소를 모두 합하고 결과를 집합 자료형에 삽입한다.
 * 4. 집합 자료형의 크기를 반환한다.
 *
 * @param {number[]} elements
 * @returns {number}
 */
function circle_sequence(elements) {
  const len = elements.length;
  const circle = [...elements, ...elements];
  const answer = new Set();

  for (let i = 1; i <= len; i++) {
    let idx = 0;

    while (idx < len) {
      const val = circle.slice(idx, idx + i).reduce((acc, cur) => acc + cur, 0);

      answer.add(val);
      idx++;
    }
  }

  return answer.size;
}
