/**
 * String 객체의 repeat 메서드를 활용한 접근
 *
 * 정수를 인자로 받아서 그 횟수만큼 문자열을 반복한다.
 *
 * @param {number[]} food
 * @returns {string}
 */
function food_fight(food) {
  let res = '';

  for (let i = 1; i <= food.length; i++) {
    res += String(i).repeat(~~(food[i] / 2));
  }

  return res + 0 + [...res].reverse().join('');
}

/**
 * 음식을 배치하는 순서는 물을 기준으로 좌우 대칭이다.
 *
 * 따라서 먼저 좌측 음식을 배치하는 순서를 구한다.
 *
 * 이 때, 음식을 배치하는 개수는 준비한 음식 개수를 2로 나눈 몫이다.
 *
 * 다음으로 음식 배치 순서에 물(0)을 더해주고 역순으로 이어붙이면 된다.
 *
 * @param {number[]} food
 * @returns {string}
 */
function worse_food_fight(food) {
  let answer = [];

  for (let i = 1; i <= food.length; i++) {
    const cnt = Math.floor(food[i] / 2);

    for (let j = 0; j < cnt; j++) {
      answer.push(i);
    }
  }

  const reversed = answer.concat().reverse();

  answer.push(0);
  answer = [...answer, ...reversed];

  return answer.join('');
}
