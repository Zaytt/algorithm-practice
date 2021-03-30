// Implement my own version of .map

Array.prototype.map = function(fn) {
  const newArray = new Array(this.length);
  for (let i = 0; i < this.length; i++) {
    newArray[i] = fn(this[i]);
  }
  return newArray;
};

console.log([1, 2, 3].map((element) => element + 1));
