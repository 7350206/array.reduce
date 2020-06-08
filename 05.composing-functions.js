const increment = (input) => input + 1;
const decrement = (input) => input - 1;
const double = (input) => input * 2;
const halve = (input) => input / 2;

const init = 1;
// --------- 1st way to know
const result1 = (input) => {
  let total = input + 1;
  total = total * 2;
  total = total - 1;
  total = total / 2;
  return total;
};

// ----------------- 2nd way ---------

// ! can be programmatically generated ))
// reduceRight - also useful
const pipeline = [increment, double, decrement, halve];
const result2 = pipeline.reduce((acc, fn) => {
  // acc - last returned, so pipe done here
  console.log('acc', acc);
  return fn(acc);
}, init);

console.log('result 1:', result1(1));
console.log('result 2:', result2);
