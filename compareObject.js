//check object empyt

if (JSON.stringify(obj) === "{}"
//or
if (Object.keys(obj)?.length === 0)
//----------------

const obj1 = { key: 'value' };
const obj2 = { key: 'value' };
const obj3 = obj1;

console.log(obj1 === obj2); // false
console.log(obj1 === obj3); // true

//Shallow Equality
const obj1 = { key: 'value' };
const obj2 = { key: 'value' };

function shallowEqual(objA, objB) {
  for (const key in objA) {
    if (objA[key] !== objB[key]) {
      return false;
    }
  }
  return true;
}

console.log(shallowEqual(obj1, obj2)); // true


// Deep Equality
const _ = require('lodash');

const obj1 = { key: 'value', nested: { prop: 'nested value' } };
const obj2 = { key: 'value', nested: { prop: 'nested value' } };

console.log(_.isEqual(obj1, obj2)); // true












// custom
function customObjectComparison(objA, objB) {
  // Define your custom comparison logic here
  // Return true if objects are considered equal, otherwise return false
}

const obj1 = { key: 'value' };
const obj2 = { key: 'value' };

console.log(customObjectComparison(obj1, obj2));
