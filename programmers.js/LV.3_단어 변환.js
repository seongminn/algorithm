function change_word(begin, target, words) {
  const visited = [];
  let answer = 0;

  if (!words.includes(target)) return answer;

  words = words.map((word) => word.split(''));
  search(begin, 0);

  return answer;

  function search(begin, cnt) {
    if (begin === target) answer = cnt;
    if (visited.includes(begin) || answer) return;

    const letters = begin.split('');

    words.forEach((word) => {
      let minus = 0;

      for (let i = 0; i < word.length; i++) {
        if (letters[i] !== word[i]) minus++;
      }

      if (minus === 1) {
        visited.push(begin);
        search(word.join(''), cnt + 1);
      }
    });
  }
}
