const votes = ['yes', 'yes', 'no', 'yes', 'no', 'yes', 'no'];

const init = {}; //set output
const reducer = (acc, vote) => {
  // if acc havent a key with vote name, create it and set value =1
  if (!acc[vote]) {
    acc[vote] = 1;
  } else {
    // if already has a value for this particular vote
    acc[vote] = acc[vote] + 1;
  }
  return acc;
};

const result = votes.reduce(reducer, init);
console.log(result);
