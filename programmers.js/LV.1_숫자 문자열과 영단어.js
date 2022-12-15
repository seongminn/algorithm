/**
 * 영단어 배열과 인덱스를 활용하는 방법
 *
 * 1. 영단어 개수만큼 반복문을 돌린다.
 * 2. 각 영단어를 기준으로 s 문자열을 분할한다.
 * 3. 분할한 문자열 사이에 현재 영단어의 idx 값을 넣고 합친다.
 * 4. 결과 값을 Number 자료형으로 변환한 뒤 반환한다.
 *
 * @param {string} s
 * @returns {number}
 */
function number_words(s) {
  const alpha = [
    'zero',
    'one',
    'two',
    'three',
    'four',
    'five',
    'six',
    'seven',
    'eight',
    'nine',
  ];
  let answer = s;

  for (let i = 0; i < alpha.length; i++) {
    const arr = answer.split(alpha[i]);

    answer = arr.join(i);
  }

  return Number(answer);
}

/**
 * 처음 시도한 방법으로, 객체와 정규식을 활용하였다.
 *
 * 1. s 문자열을 한 글자 단위로 분할한다.
 * 2. 분할한 문자열 배열에 반복문을 돌린다.
 * 3. 만약 숫자일 경우 answer에 그대로 추가한다.
 * 4. 문자일 경우 string 문자열에 추가한다.
 * 5. alpha 객체에 string이라는 key가 존재할 경우 해당 key의 value를 answer에 추가하고 string을 초기화한다.
 * 6. 반복이 끝나면 answer를 정수로 변환한 뒤 반환한다.
 *
 * @param {string} s
 * @returns {number}
 */
function first_number_words(s) {
  const alpha = {
    zero: 0,
    one: 1,
    two: 2,
    three: 3,
    four: 4,
    five: 5,
    six: 6,
    seven: 7,
    eight: 8,
    nine: 9,
  };
  const isNumber = /^[0-9]/;
  let string = '';
  let answer = '';

  s.split('').forEach((el) => {
    if (isNumber.test(el)) return (answer += el);
    else string += el;

    if (alpha.hasOwnProperty(string)) {
      answer += alpha[string];
      string = '';
    }
  });

  return Number(answer);
}
