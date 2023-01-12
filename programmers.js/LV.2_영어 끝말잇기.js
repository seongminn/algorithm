function solution(n, words) {
  const used = [words.at(0)];
  let answer = [0, 0];

  for (let i = 1; i < words.length; i++) {
    if (used.includes(words[i]) || words[i].at(0) !== words[i - 1].at(-1)) {
      answer = [(i % n) + 1, Math.ceil((i + 1) / n)];
      break;
    }

    used.push(words[i]);
  }

  return answer;
}
