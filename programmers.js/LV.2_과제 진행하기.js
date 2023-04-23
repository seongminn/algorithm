function solution(plans) {
  const answer = [];
  const rest = [];

  plans = plans
    .map(([name, start, playtime]) => {
      let [h, m] = start.split(':').map(Number);
      let startTime = h * 60 + m;

      return [name, startTime, Number(playtime)];
    })
    .sort((a, b) => a[1] - b[1]);

  plans.forEach(([name, start, playtime]) => {
    if (rest.length) {
      let [pn, ps, ppt] = rest.pop();
      let extra = start - ps;

      if (extra < ppt) {
        rest.push([pn, ps, ppt - extra]);
      } else {
        answer.push(pn);
        extra -= ppt;

        while (extra > 0 && rest.length) {
          console.log(rest);
          let [rn, rs, rpt] = [...rest.pop()];

          if (extra < rpt) {
            rest.push([rn, rs, rpt - extra]);
            break;
          } else {
            answer.push(rn);
            extra -= rpt;
          }
        }
      }
    }

    rest.push([name, start, playtime]);
  });

  return answer.concat(rest.reverse().map(([name]) => name));

  //     for (let i = 0; i < plans.length - 1; i++) {
  //         let [name, start, playtime] = plans[i]
  //         let available = plans[i + 1][1] - start

  //         if (playtime === available) answer.push(name)
  //         else if (playtime > available) {
  //             rest.push([name, start, playtime - available])
  //         } else {
  //             answer.push(name)

  //             while (rest.length > 0) {
  //                 let item = rest.pop()

  //                 if (available > item[2]) {
  //                     answer.push(item[0])
  //                 } else if (available === item[2]) {
  //                     answer.push(item[0])
  //                     break
  //                 } else {
  //                     rest.push([item[0], item[1], item[2] - available])
  //                     break
  //                 }
  //             }
  //         }
  //     }

  //     const res = [...answer, plans.at(-1)[0]]
  //     for (let i = rest.length - 1; i >= 0; i--) {
  //         res.push(rest[i][0])
  //     }
  //     return res
}
