const data = [1, 2, 3, 4, 5, 6];
// const reducer = (acc, item) => {
//   acc.push(item * 2);
//   return acc;
// };
// const init = [];
// const res = data.reduce(reducer, init);
// console.log(res);

const doubled = data.reduce((acc, item) => {
  acc.push(item * 2);
  return acc;
}, []);

const mapped = data.map((item) => {
  return item * 2;
});

console.log(doubled);
console.log(mapped);

const evens1 = data.reduce((acc, item) => {
  if (item % 2 === 0) {
    acc.push(item);
  }
  return acc;
}, []);

const evens2 = data.filter((item) => {
  return item % 2 === 0;
});

console.log(evens1);
console.log(evens2);

// some compose, but not so fun
const data1 = [];
for (let i; i < 100000000; i++) {
  data1[i] = i;
}

// -------------- by compose ----------------------
console.time('filterMapped');
const res = data1
  .filter((item) => {
    return item % 2 === 0;
  })
  .map((item) => {
    return item * 2;
  });
// console.log(res);
console.timeEnd('filterMapped'); //250ms

// --------------- by reduce  --------------------
console.time('dataReduce');
const res1 = data1.reduce((acc, item) => {
  if (item % 2 === 0) {
    acc.push(item * 2);
  }
  return acc;
}, []);

console.timeEnd('dataReduce'); // 015ms
