function furthest_node(n, edge) {
  const graph = Array.from({ length: n + 1 }, () => []);
  const distance = Array.from({ length: n + 1 }, () => 0);

  edge.forEach(([start, end]) => {
    graph[start].push([end, 1]);
    graph[end].push([start, 1]);
  });

  return distance.filter((num) => num === search(graph, 1, distance)).length;

  function search(graph, node, visited) {
    const queue = [];
    visited[node] = 1;
    queue.push(node);

    while (queue.length > 0) {
      const next = queue.shift();

      graph[next].forEach(([val, cost]) => {
        if (!visited[val]) {
          visited[val] = visited[next] + 1;
          queue.push(val);
        }
      });
    }

    return Math.max(...visited);
  }
}

console.log(
  solution(6, [
    [3, 6],
    [4, 3],
    [3, 2],
    [1, 3],
    [1, 2],
    [2, 4],
    [5, 2],
  ])
);
