/**
 * 정규식 사용과 더불어 자바스크립트 내장 메서드 reduce를 활용한 방식
 *
 * 현재 로직에서 내장 메서드를 사용할 수 있을지 끊임없이 고민하지만 여전히 부족하다. **더욱 더 노력할 것 !**
 *
 * @param {string[]} babbling
 * @returns {number}
 */
function best_babbling(babbling) {
  const regex1 = /(aya|ye|woo|ma)\1/;
  const regex2 = /^(aya|ye|woo|ma)+$/;

  return babbling.reduce(
    (acc, cur) => (regex1.exec(cur) || !regex2.exec(cur) ? acc : ++acc),
    0
  );
}

/**
 * 정규식을 사용한 방식
 *
 * 사실 처음에 문제를 보자마자 정규식을 떠올렸지만 어떻게 식을 작성하는지 감이 오지 않아 아래 방법으로 노선을 틀었다.
 * 풀 수 있는 문제였던 건데.. 너무 아쉽다.
 *
 * @param {string[]} babbling
 * @returns {number}
 */
function good_babbling(babbling) {
  const regex1 = /(aya|ye|woo|ma)\1/;
  const regex2 = /^(aya|ye|woo|ma)+$/;

  babbling.forEach((word) => {
    if (regex1.exec(word) || !regex2.exec(word)) return;

    answer++;
  });

  return answer;
}

/**
 * 문자열을 단어별로 나눈 뒤 반복문을 돌면서 발음할 수 있는 단어일 경우 지워주는 방식
 *
 * 연속하지 않으면서 중복하는 단어를 처리하지 못하였다.
 *
 * @param {string[]} babbling
 * @returns {number}
 */
function bad_babbling(babbling) {
  const answer = babbling.map((word) => {
    const words = ['aya', 'ye', 'woo', 'ma'];
    let comb = '';

    [...word].forEach((lett) => {
      comb = comb + lett;

      const idx = words.findIndex((el) => el === comb);

      if (idx >= 0) {
        words.splice(idx, 1);
        comb = '';
      }
    });

    return comb;
  });

  return answer.filter((el) => el === '').length;
}
