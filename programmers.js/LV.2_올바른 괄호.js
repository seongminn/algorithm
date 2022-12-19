/**
 * 문자열을 순회하면서 '('를 만날 경우 cnt + 1, ')'를 만날 경우 cnt - 1을 한다.
 *
 * cnt가 0 미만으로 내려가는 경우 순회를 멈추고 false를 반환한다.
 *
 * 순회를 끝까지 마친 뒤, cnt의 값이 0이라면 true를 반환하고 그렇지 않다면 false를 반환한다.
 *
 * @param {string} s
 * @returns {boolean}
 */
function right_paren(s) {
  let cnt = 0;

  s.split('').forEach((str) => {
    if (cnt < 0) return;

    cnt += str === '(' ? 1 : -1;
  });

  return cnt ? false : true;
}

/**
 * stack으로 접근한 방법
 *
 * 문자열을 split하고 join하는 등의 과정 때문에 시간 초과 오류가 발생하는 듯 하다.
 *
 * @param {string} s
 * @returns {boolean}
 */
function first_paren(s) {
  const queue = [];

  if (s.length % 2 === 1 || s[0] === ')') return false;

  s.split('').forEach((str) => {
    if (queue.at(-1) + str === '()') return queue.pop();
    else queue.push(str);
  });

  return !queue[0];
}

/**
 * 문자열 자체로 처리한 방법
 *
 * 이건 사실 왜 안되는지 모르겠다. 문자열을 더하고 빼는 과정, 그리고 slice하는 과정에도 시간이 많이 드나..?
 *
 * @param {string} s
 * @returns {boolean}
 */
function second_paren(s) {
  let queue = '';

  s.split('').forEach((str) => {
    queue += str;

    while (queue.slice(-2) === '()') {
      queue = queue.slice(0, -2);
    }
  });

  return !queue;
}
