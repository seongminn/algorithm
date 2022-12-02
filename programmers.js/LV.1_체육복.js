/**
 * 1. 학생 배열을 생성하고 학생 번호가 lost에 있다면 -1, reserve에 있다면 +1 한다.
 * 2. 학생 배열의 요소의 값이 0이고, 인접한 두 요소의 값이 2면 각각 1로 만들어준다.
 * 3. `2`를 실행하고 난 뒤 생성된 배열에서 1 이상인 값의 수를 출력한다.
 *
 * @param {number} n
 * @param {number[]} lost
 * @param {number[]} reserve
 * @returns {number}
 */
function gym_suit(n, lost, reserve) {
  const stud = Array.from({ length: n }, () => 1).map((item, idx) => {
    if (lost.includes(idx + 1)) item -= 1;
    if (reserve.includes(idx + 1)) item += 1;
    return item;
  });

  const arr = stud.map((item, idx) => {
    if (!item && stud[idx - 1] === 2) {
      item++;
      stud[idx - 1] -= 1;
    } else if (!item && stud[idx + 1] === 2) {
      item++;
      stud[idx + 1] -= 1;
    }
    return item;
  });

  return arr.reduce((acc, cur) => (acc += cur && 1), 0);
}
