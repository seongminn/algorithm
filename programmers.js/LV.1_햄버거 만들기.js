/**
 * stack 자료형을 활용한 방법
 *
 * 1. ingredient의 요소를 앞에서부터 stack에 넣는다.
 * 2. stack의 마지막 숫자 4개가 차례로 1, 2, 3, 1이면 배열에서 꺼낸 뒤 answer에 1을 더한다.
 *
 * @param {number[]} ingredient
 * @returns {number}
 */
function hamberger(ingredient) {
  const stack = [];
  let answer = 0;

  ingredient.forEach((string) => {
    stack.push(string);

    if (stack.slice(-4).join('') === '1231') {
      stack.splice(-4);
      answer++;
    }
  });

  return answer;
}

/**
 * 정규식으로 비교한 뒤 '1231'에 해당하는 문자열이 있을 시 replace로 지워주는 방법
 *
 * replace하는 과정의 시간복잡도가 O(n)으로 예상되어 시간 초과가 발생했나보다.
 *
 * @param {number[]} ingredient
 * @returns {number}
 */
function worse_hamberger(ingredient) {
  const regex = /1231/;
  let string = ingredient.join('');
  let answer = 0;

  while (regex.test(string)) {
    string = string.replace(regex, '');
    answer++;
  }

  return answer;
}
