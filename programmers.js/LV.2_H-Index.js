/**
 * h번 이상 인용된 논문이 h편 '이상',
 * 나머지 논문이 h번 '이하' 인용된 경우이므로
 * 인용된 횟수를 기준으로 정렬했을 때 배열의 값이 idx보다 커지는 부분의 idx가 정답이다.
 *
 * @param {arr} citations
 * @returns {number}
 */
function h_index(citations) {
  citations = citations.sort(sorting);
  let i = 0;

  while (i + 1 <= citations[i]) {
    console.log(i + 1, citations[i]);
    i++;
  }

  console.log(i + 1, citations[i]);

  return i;

  function sorting(a, b) {
    return b - a;
  }
}

/**
 * 최초 작성 답안
 *
 * --
 *
 * 배열을 정렬하고 0부터 최대 인용 횟수만큼의 길이를 가진 배열을 만든다.
 * 이후 배열에 반복문을 돌면서 h 이상 값의 개수와 h 이하 값의 개수를 찾는다.
 * 이를 배열 idx와 비교하면서 일치하는 것의 idx 번호로 answer 값을 갱신한다.
 *
 * @param {*} citations
 * @returns
 */
function worse_h_index(citations) {
  citations.sort((a, b) => a - b);

  const citationList = Array.from({ length: citations.at(-1) + 1 }, () => 0);
  let answer = 0;

  citationList
    .map((_, idx) => {
      return [
        citations.filter((cita) => cita >= idx).length,
        citations.filter((cita) => cita <= idx).length,
      ];
    })
    .forEach((num, idx) => {
      const [upper, lower] = num;

      if (upper >= idx && lower <= idx) answer = idx;
    });

  return answer;
}
