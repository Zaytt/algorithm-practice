/*Here's the definition of an anagram: a word, phrase, or name formed by rearranging the letters of another: such as cinema, formed from iceman.

We are given two strings like "cinema" and "iceman" as inputs. Can you write a method isAnagram(str1, str2) that will return true or false depending on whether the strings are anagrams of each other?*/

function isAnagram(string1, string2) {
  // Length check, if different then cant be anagram
  if (string1.length !== string2.length) return false;

  let isAnagram = true;
  // create two maps
  const map1 = new Map();
  const map2 = new Map();
  // add characters of each string to each map
  string1
    .toLowerCase()
    .split('')
    .forEach((element) => {
      if (map1.has(element)) map1.set(element, map1.get(element) + 1);
      else map1.set(element, 1);
    });

  string2
    .toLowerCase()
    .split('')
    .forEach((element) => {
      if (map2.has(element)) map2.set(element, map2.get(element) + 1);
      else map2.set(element, 1);
    });

  // traverse map and check that they have the same values for the same keys
  map1.forEach((value, key) => {
    if (map2.get(key) != value) {
      isAnagram = false;
    }
  });

  return isAnagram;
}

const string1 = 'cinema';
const string2 = 'iceman';

console.log(isAnagram(string1, string2));

/**
 * This solution has a time complexity of O(n) and uses a single hashmap
 * @param {*} string1
 * @param {*} string2
 * @returns a boolean indicating whether the two strings are anagrams of each other
 */

function isAnagram2(string1, string2) {
  // Length check, if different then cant be anagram
  if (string1.length !== string2.length) return false;

  // create map
  const map = new Map();

  // Add all the characters of the first string to the map
  string1
    .toLowerCase()
    .split('')
    .forEach((element) => {
      if (map.has(element)) map.set(element, map.get(element) + 1);
      else map.set(element, 1);
    });

  // iterate the characters of the second string
  for (let i = 0; i < string2.length; i++) {
    const char = string2.charAt(i);

    // if the current character is not found in the map, return false
    if (!map.has(char)) return false;

    // if found, substract one count from the that key
    map.set(char, map.get(char) - 1);
    if (map.get(char) < 0) return false;
  }

  return true;
}

console.log(isAnagram2(string1, string2));
