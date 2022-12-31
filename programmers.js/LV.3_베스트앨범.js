/**
 * 불필요한 코드를 제거하고 합칠 수 있는 부분을 최대한 합친 코드
 *
 * 1. 장르별 재생 수를 `obj` 객체에 저장한다.
 * 2. 장르와 재생 수, 번호를 `arr` 배열에 담는다.
 * 3. `obj` 객체를 재생 수를 기준으로 내림차순 정렬한다.
 * 4. `obj` 객체를 장르 별로 순회한다. 이 때 `arr` 배열에서 현재 장르를 가진 항목들을 필터링하고, 해당 항목들을 재생 수를 기준으로 정렬하여 번호를 반환한다.
 *
 * 그런데 가독성이 여전히 좋지 않은 것 같아, 새로운 방법을 고민해볼 필요가 있어 보인다.
 *
 * @param {string[]} genres
 * @param {number[]} plays
 * @returns {number[]}
 */
function best_album(genres, plays) {
  let answer = [];
  let obj = {};
  const arr = genres.reduce((acc, cur, idx) => {
    obj[cur] = obj[cur] + plays[idx] || plays[idx];
    acc.push([cur, plays[idx], idx]);

    return acc;
  }, []);

  obj = Object.fromEntries(Object.entries(obj).sort(([, a], [, b]) => b - a));

  for (let item in obj) {
    const a = arr.filter(([genre, ,]) => genre === item);

    answer.push(
      ...a
        .sort((a, b) => b[1] - a[1])
        .slice(0, 2)
        .map((item) => item[2])
    );
  }

  return answer;
}

/**
 * 정답 처리에만 집중한 코드.
 *
 * 불필요한 변수를 추가하여 난잡해 보인다고 생각하여 리팩토링을 진행하였음
 *
 * @param {string[]} genres
 * @param {number[]} plays
 * @returns {number[]}
 */
function first_best_album(genres, plays) {
  const arr = genres.reduce((acc, cur, idx) => {
    acc.push([cur, plays[idx], idx]);

    return acc;
  }, []);
  let answer = [];
  let obj = {};

  genres.forEach((item, idx) => {
    obj[item] = obj[item] + plays[idx] || plays[idx];
  });

  obj = Object.fromEntries(Object.entries(obj).sort(([, a], [, b]) => b - a));

  for (let item in obj) {
    const a = arr.filter(([genre, play, idx]) => genre === item);

    a.sort((a, b) => b[1] - a[1]);
    const next = a.map((item) => item[2]);
    answer = [...answer, ...next.slice(0, 2)];
  }

  return answer;
}
