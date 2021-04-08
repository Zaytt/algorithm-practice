/* 
  Can you implement the Map class from scratch? Only two methods are necessary-- get and set. Many programming languages have a built-in hash or dictionary primitive (like Javascript Objects and {} notation), but we don't want to use that for this exercise.
*/

class MyMap {
  constructor() {
    this.map = {};
  }

  set(key, value) {
    this.map[key] = value;
  }

  get(key) {
    return this.map[key];
  }
}

const myMap = new MyMap();

myMap.set('a', 1);
console.log(myMap);
myMap.set('b', 2);
console.log(myMap.get('b'));
myMap.set('b', myMap.get('b') + 1);
console.log(myMap.get('b'));
