const data = [1, 2, 3, 3, 3, 5, 6, 3, 4, 2];

// @index - index of item processed
// @array - array itself
const res = data.reduce((acc, item, index, array) => {
  intermediateValue = acc + item;

  // in order to do one-shot transform inside
  if (index === array.length - 1) {
    // last iteration - do something useful (mean)
    return intermediateValue / array.length;
  }
  return intermediateValue;
}, 0);

// console.log(res / data.length);
console.log('res:', res);
