
function sum(fromN, toN) {
  // Sum all the values from fromN up to toN
  // base case is when number === toN
  if (fromN === toN) {
    return fromN;
  }
  //recursive case
  return fromN + sum(fromN + 1, toN);
  //
}
console.log(sum(3,7));

sum(1,1);
sum(0,0);
sum(5,5);
sum(0,1);
sum(1,2);



module.exports = sum;

