/**
 * 택배 상자를 먼저 보조 레일에 올린 뒤 보조 레일에서만 꺼내는 방식
 *
 * 1. 보조 레일(stack)에 가장 마지막으로 올라간 택배 번호와 현재
 * 넣어야 하는 택배 번호가 일치할 시 레일에서 꺼낸 뒤 answer + 1
 * 2. 택배를 보조 레일에서 꺼낸 뒤 순서가 일치하는 택배가 없을 때까지 반복
 * 3. 보조 레일에 택배 상자가 없으면 종료한다.
 * 4. 위 과정을 모든 택배 번호에 대해 반복
 *
 * @param {number[]} order
 * @returns {answer}
 */
function corriage(order) {
  const stack = [];
  let index = 1;
  let answer = 0;

  while (index <= order.length) {
    stack.push(index++);

    while (stack.at(-1) === order[answer]) {
      stack.pop();
      answer++;

      if (stack.length === 0) break;
    }
  }

  return answer;
}
