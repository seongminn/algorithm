function solution(topping) {
  const toppingMap = new Map();
  const answerMap = new Map();
  let left = answerMap.size;
  let right = toppingMap.size;
  let answer = 0;

  topping.forEach((el) => {
    if (toppingMap.has(el)) {
      let cnt = toppingMap.get(el);

      toppingMap.set(el, cnt + 1);
    } else {
      toppingMap.set(el, 1);
    }
  });

  topping.forEach((el) => {
    let cnt = toppingMap.get(el);

    if (answerMap.has(el)) {
      answerMap.set(el, answerMap.get(el));
    } else {
      answerMap.set(el, 1);
    }

    if (cnt === 1) {
      toppingMap.delete(el);
    } else {
      toppingMap.set(el, cnt - 1);
    }

    left = answerMap.size;
    right = toppingMap.size;

    if (left === right) answer++;
  });

  return answer;
}
