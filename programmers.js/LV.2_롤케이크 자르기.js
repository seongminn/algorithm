/**
 * Map 자료형을 사용
 *
 * 1. 각 토핑의 개수를 Map 자료형에 담는다.
 * 2. topping 배열을 순회하면서 토핑 번호를 Set 자료형에 넣고 총 개수를 1 감소시킨다.
 * 3. 남은 토핑 개수가 0개가 되면 Map 자료형에서 지운다.
 * 4. Map 자료형과 Set 자료형의 크기를 비교하여 같을 시 answer + 1
 *
 * @param {number[]} topping
 * @returns {number}
 */
function roll_cake(topping) {
  const older = new Map();
  const younger = new Set();
  let answer = 0;

  topping.forEach((el) => {
    older.set(el, older.has(el) ? older.get(el) + 1 : 1);
  });

  topping.forEach((el) => {
    const count = older.get(el);

    younger.add(el);

    if (count === 1) older.delete(el);
    else older.set(el, older.get(el) - 1);

    if (younger.size === older.size) answer++;
  });

  return answer;
}

/**
 * 처음 작성한 코드
 *
 * if-else문이 과도하게 사용되고 불필요한 코드가 포함되어 있다.
 * 때문에 가독성이 매우 좋지 못하기 때문에 리팩토링 하였음
 *
 * @param {number[]} topping
 * @returns {number}
 */
function solution(topping) {
  const toppingMap = new Map();
  const answerMap = new Set();
  let answer = 0;

  topping.forEach((el) => {
    if (toppingMap.has(el)) {
      let cnt = toppingMap.get(el);

      toppingMap.set(el, cnt + 1);
    } else {
      toppingMap.set(el, 1);
    }
  });

  topping.forEach((el) => {
    let cnt = toppingMap.get(el);

    answerMap.add(el);

    if (cnt === 1) {
      toppingMap.delete(el);
    } else {
      toppingMap.set(el, cnt - 1);
    }

    left = answerMap.size;
    right = toppingMap.size;

    if (left === right) answer++;
  });

  return answer;
}
