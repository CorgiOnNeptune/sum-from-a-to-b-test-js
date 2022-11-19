const sum = (fromN, toN) => {
  if (fromN === toN) {
    return toN;
  }

  return fromN + sum(fromN + 1,toN);
};

module.exports = sum;

// sum(3, 7)
// 3, 4, 5, 6, 7 === 25;
// 3 + sum(4, 7)
// etc.?
