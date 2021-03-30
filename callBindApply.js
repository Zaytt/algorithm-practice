Function.prototype.mybind = function(object) {
  return (...args) => this.apply(object, args);
};

const obj = { name: 'John' };

let greeting = function(a, b) {
  return `${a} ${this.name} ${b}`;
};

let bound = greeting.mybind(obj);

console.log(bound('Hello', 'How are you'));
