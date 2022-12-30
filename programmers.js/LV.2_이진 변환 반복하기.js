/**
 * `split`과 `join` 대신 `replace`를 활용
 *
 * 0의 개수를 확인하는 과정에서 regex를 이미 사용하기 때문에
 * replace를 활용하는 것이 훨씬 좋아보임
 *
 * @param {string} s
 * @returns {number[]}
 */
function convert_binary(s) {
  const regex = /0/g;
  let zeros = 0;
  let cnt = 0;

  while (s !== '1') {
    zeros += (s.match(regex) || []).length;
    s = s.replace(regex, '').length.toString(2);
    cnt++;
  }

  return [cnt, zeros];
}

/**
 * 1. s가 '1'이 될 때까지 아래 과정을 반복
 * 2. match 메서드를 통해 s에서 0의 개수를 구한다.
 * 3. s에서 0을 없앤 문자열의 길이를 2진수로 변환한다.
 * 4. 0의 개수와 cnt를 각각 갱신한다.
 *
 * @param {string} s
 * @returns {number[]}
 */
function first_convert_binary(s) {
  const regex = /0/g;
  let zeros = 0;
  let cnt = 0;

  while (s !== '1') {
    const reduced = s.match(regex);

    s = s.split('0').join('').length.toString(2);
    zeros += reduced && reduced.length;
    cnt++;
  }

  return [cnt, zeros];
}
