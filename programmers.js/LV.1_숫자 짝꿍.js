function mate(X, Y) {
  const _map = {};
  const twins = [];

  for (let item of X) {
    _map[item] = _map[item] + 1 || 1;
  }

  for (let item of Y) {
    if (_map[item]) {
      twins.push(item);
      _map[item]--;
    }
  }

  const answer = twins.length > 0 ? twins.sort((a, b) => b - a).join('') : '-1';

  if (!answer.match(/[^0]+/g)) return '0';
  else return answer;
}

function first_mate(X, Y) {
  let answer = [];

  X = [...X].sort((a, b) => b - a).join('');

  for (let i = 0; i < X.length; i++) {
    const letter = X[i];
    const regex = new RegExp(letter, 'g');
    const Xidx = X.match(regex).length;
    const Yidx = Y.match(regex) ? Y.match(regex).length : 0;
    const cnt = Math.min(Xidx, Yidx);

    answer.push(letter.repeat(cnt));
    i += Xidx - 1;
  }

  return answer.join('') ? Number(answer.join('')) + '' : '-1';
}
