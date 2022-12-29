/**
 * 문자열에 대해 순회를 돌며 비교한다.
 *
 * 이 때, `answer` 배열의 길이가 1 이상이고, 배열의 마지막 요소와 현재 문자가 같을 경우 배열의 가장 마지막 요소를 제거한다.
 * 그게 아니라면 배열에 현재 문자를 추가한다.
 *
 * 순회가 끝난 뒤 배열의 길이가 1 이상이면 0, 0이면 1을 반환한다.
 *
 * @param {string} s
 * @returns {number}
 */
function delete_pair(s) {
  const answer = [];

  for (let i = 0; i < s.length; i++) {
    if (answer.length > 0 && answer.at(-1) === s[i]) answer.pop();
    else answer.push(s[i]);
  }

  return answer.length ? 0 : 1;
}
