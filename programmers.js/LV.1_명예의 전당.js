/**
 * 1. score의 각 요소에 접근하여 process 배열에 삽입한다.
 * 2. process 배열을 내림차순으로 정렬한 뒤 k번째 이후의 값을 잘라낸다.
 * 3. process 배열의 가장 마지막 값을 answer 배열에 삽입한다.
 *
 * @param {number} k
 * @param {number[]} score
 * @returns {number[]} k번째 값들의 순서
 */

function hall(k, score) {
  const answer = [];
  const process = [];

  score.forEach((el) => {
    process.push(el);
    process.sort((a, b) => b - a).splice(k);

    answer.push(process.at(-1));
  });

  return answer;
}
