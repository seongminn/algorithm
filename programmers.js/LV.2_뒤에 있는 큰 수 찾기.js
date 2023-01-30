function solution(numbers) {
  const stack = [numbers.pop()];
  const answer = [-1];

  for (let i = numbers.length - 1; i >= 0; i--) {
    while (stack.length) {
      if (numbers[i] < stack.at(-1)) {
        answer.push(stack.at(-1));
        stack.push(numbers[i]);
        break;
      } else stack.pop();
    }

    if (!stack.length) {
      stack.push(numbers[i]);
      answer.push(-1);
    }
  }

  return answer.reverse();
}
