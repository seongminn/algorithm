/**
 * 1. 입력 받은 문자열을 공백을 기준으로 분할한다.
 * 2. 나눠진 문자열을 다시 한 번 문자를 기준으로 분할하여 이중 배열화 한다.
 * 3. 각 문자에 대해 짝수번째 문자는 대문자, 홀수번째 문자는 소문자로 변환한다.
 * 4. 결과로 얻은 배열을 공백을 기준으로 합쳐준다.
 *
 * @param {string} s
 * @returns {string}
 */
function weird_string(s) {
  const arr = s.split(' ');

  return arr
    .map((word) => {
      return [...word]
        .map((letter, idx) => {
          return !(idx % 2) ? letter.toUpperCase() : letter.toLowerCase();
        })
        .join('');
    })
    .join(' ');
}
