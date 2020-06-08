// 1- need reducer fn
// 2 - need an initial value (acc)

const data = [1, 2, 3];
// returns prev returned acc + current item
const reducer = (acc, item) => {
  return acc + item;
};

// need an init
const init = 10;

/**
 * Calls the specified callback function for all the elements in an array. The return value of the callback function is the accumulated result, and is provided as an argument in the next call to the callback function.
 */
const total = data.reduce(reducer, init);

// when arr is empty - never fires
console.log('sum is: ', total);
