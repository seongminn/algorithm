/**
 * 1. 정규식을 활용하여 문자열의 길이와 문자 포함 여부를 확인한다.
 *
 * @param {string} s
 * @returns {boolean}
 */
function better_string(s) {
  const regex = /^[0-9]$|^[0-9]$/;

  return regex.test(s);
}

// ---
/**
 * 가장 처음 작성한 코드
 *
 * 문자열의 길이 역시 정규식으로 확인할 수 있음을 간과하였음
 *
 * @param {string} s
 * @returns {boolean}
 */
function basic_string(s) {
  const regex = /[a-zA-Z]/;

  return !regex.test(s) && (s.length === 4 || s.length === 6);
}
