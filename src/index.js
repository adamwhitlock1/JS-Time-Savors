import {mergeByProp, mergeObjs} from "./merge-objects";

// ---------------------------------------------------
// merge 2 objects not in array

console.log(mergeObjs(
  {
    name: "bill",
    age: 20,
    hobbies: ["running"]
  },
  {
    name: "bill",
    dob: "6/27/1950",
    hobbies: ["fishing", "art"]
  }
  )
);

// result: { name: 'bill', age: 20, dob: '6/27/1950' }
// ---------------------------------------------------


// ---------------------------------------------------
// merge 2 objects not in array

let arr1 = [{name: "lang", value: "Spanish"}, {name: "age", value: "18"}, {name: "childs", value: "5"}];
let arr2 = [{name : "childs", value: "5"}, {name: "lang", value: "German"}];

mergeByProp(arr1, arr2, 'name');

console.log("Merge by props results: /n `arr1`");

// result: { name: 'bill', age: 20, dob: '6/27/1950' }
// ---------------------------------------------------


