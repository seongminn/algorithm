function solution(operations) {
  const queue = [];

  operations.forEach((opcode) => {
    const [inst, data] = opcode.split(' ');

    if (inst === 'I') insertor(data);
    else if (queue.length >= 1) deletor(data);
  });

  function insertor(data) {
    queue.push(Number(data));
    queue.sort((a, b) => a - b);
  }

  function deletor(data) {
    if (data === '1') queue.pop();
    else queue.shift();
  }

  return queue.length ? [queue.at(-1), queue[0]] : [0, 0];
}
