/**
 * 1. Map 자료형을 생성하고, 반복문을 돌려 문자열의 각 문자에 접근한다.
 * 2. 현재 문자가 처음 등장했다면 Map 자료형에 현재 인덱스를 넣고 answer에 -1을 넣는다.
 * 3. 등장한 적 있다면 answer에 현재 idx - Map 자료형에서 현재 문자가 갖고 있던 값을 넣는다.
 * 4. 그리고 Map 자료형에서 현재 문자의 값을 현재 idx로 초기화해준다.
 * 5. 문자열에 대해 반복이 끝나면 answer를 반환한다.
 *
 * @param {string} s
 * @returns {number[]}
 */
function closure_letter(s) {
  const alphas = new Map();
  const answer = [];

  [...s].forEach((string, idx) => {
    if (!alphas.has(string)) {
      answer.push(-1);
    } else {
      answer.push(idx - alphas.get(string));
    }

    alphas.set(string, idx);
  });

  return answer;
}
