/*For two strings to be isomorphic, all occurrences of a character in string A can be replaced with another character
to get string B. The order of the characters must be preserved. There must be one-to-one mapping for ever char of
string A to every char of string B.

`paper` and `title` would return true.
`egg` and `sad` would return false.
`dgg` and `add` would return true.*/


console.log(isIsomorphic("egg", 'add')); // true
console.log(isIsomorphic("paper", 'title')); // true
console.log(isIsomorphic("kick", 'side')); // false

function isIsomorphic(firstString, secondString) {
  let map = new Map();

  if(firstString.length !== secondString.length) return false;

  for (let i = 0; i<firstString.length; i++) {
    if (!map.has(firstString[i])) {
      map.set(firstString[i], secondString[i]);
    } else {
      if (map.get(firstString[i]) !== secondString[i]) {
        return false;
      }
    }
  }
  return true;
}