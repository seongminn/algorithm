/**
 * DFS를 활용한 접근
 *
 * 배열의 길이가 3이 되면 요소들의 총 합을 구한다.
 * 합이 0일 시 cnt에 1을 더하고, 그렇지 않을 시 다음 단계로 넘어간다.
 *
 * @param {number[]} number
 * @returns {number}
 */
function three_musketeers(number) {
  let cnt = 0;

  function search(idx, muske) {
    if (muske.length === 3) {
      const sum = muske.reduce((acc, cur) => acc + cur, 0);

      return sum === 0 ? cnt++ : null;
    }

    for (let i = idx; i < number.length; i++) {
      const num = number[i];

      search(i + 1, [...muske, num]);
    }
  }

  search(0, []);

  return cnt;
}

/**
 * 세상에서 가장 바보같이 푼 DPS
 *
 * @param {number[]} number
 * @returns {number}
 */
function worst_musketeers(number) {
  let cnt = 0;

  function search(idx, muske) {
    if (muske.length === 3) {
      const sum = muske.reduce((acc, cur) => acc + cur, 0);

      if (sum === 0) cnt++;
      else return;
    }

    for (let i = idx + 1; i < number.length; i++) {
      const num = number[i];

      muske.push(num);
      search(i, muske);
      muske.pop();
    }
  }

  for (let i = 0; i < number.length - 2; i++) {
    const muske = [];

    muske.push(number[i]);
    search(i, muske);
    muske.pop();
  }

  return cnt;
}
