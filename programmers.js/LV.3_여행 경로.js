function solution(tickets) {
  tickets.sort();

  let answer = [];
  const result = [];
  const visited = [];
  const len = tickets.length;

  function search(start, cnt) {
    result.push(start);

    if (len === cnt) {
      answer = result;
      return true;
    }

    for (let i = 0; i < len; i++) {
      if (!visited[i] && tickets[i][0] === start) {
        visited[i] = true;

        if (search(tickets[i][1], cnt + 1)) return true;

        visited[i] = false;
      }
    }

    result.pop();

    return false;
  }

  search('ICN', 0);

  return answer;
}
