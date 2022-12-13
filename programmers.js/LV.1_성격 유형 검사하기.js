/**
 * 1. 각 성격 유형 별 점수를 0으로 초기화 한다.
 * 2. 주어진 파라미터를 보고 point 객체에 점수를 부여한다.
 * 3. MBTI 배열을 mapping하여 각 유형 별 점수를 point 객체에서 꺼내온다.
 * 4. 이를 비교하며 더 큰 값을 배열에 넣고, join() 하여 하나의 문자열로 만들어준다.
 *
 * @param {string[]} survey
 * @param {number[]} choices
 * @returns {string}
 */
function kakao_MBTI(survey, choices) {
  const point = {};
  const MBTI = ['RT', 'CF', 'JM', 'AN'];

  MBTI.forEach((char) => {
    char.split('').forEach((letter) => (point[letter] = 0));
  });

  survey.forEach((char, idx) => {
    const [disagree, agree] = char;

    point[choices[idx] > 4 ? agree : disagree] += Math.abs(choices[idx] - 4);
  });

  return MBTI.map(([a, b]) => (point[a] < point[b] ? b : a)).join('');
}

function worse_MBTI(survey, choices) {
  const caracters = [
    ['T', 0],
    ['R', 0],
    ['C', 0],
    ['F', 0],
    ['J', 0],
    ['M', 0],
    ['A', 0],
    ['N', 0],
  ];
  const pointMap = new Map(caracters);
  let answer = '';

  for (let i = 0; i < survey.length; i++) {
    const question = survey[i];
    const point = choices[i] - 4;

    if (point < 0)
      pointMap.set(question[0], pointMap.get(question[0]) + Math.abs(point));
    else pointMap.set(question[1], pointMap.get(question[1]) + Math.abs(point));
  }

  const entry = pointMap.entries();

  for (let i = 0; i < 4; i++) {
    const a = entry.next().value;
    const b = entry.next().value;
    const arr = [a, b];

    arr.sort();

    if (a[1] === b[1]) answer += arr[0][0];
    else answer += a[1] < b[1] ? b[0] : a[0];
  }

  return answer;
}
