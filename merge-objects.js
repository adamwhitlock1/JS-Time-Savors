let _ = require('lodash');

// pure js
// merge 2 objects not in array

function mergeObjects(set1, set2){
  for (var key in set2){
    if (set2.hasOwnProperty(key))
      set1[key] = set2[key]
  }
  return set1
}

console.log(mergeObjects(
  {
    name: "bill",
    age: 20
  },
  {
    name: "bill",
    dob: "6/27/1950"
  }
  )
);

// { name: 'bill', age: 20, dob: '6/27/1950' }

// uses lodash
// merge 2 arrays using a property of their objects. In this case the property is 'name'
// if an duplicate object is in both arrays, it overrides first object with second

var arr1 = [{name: "lang", value: "Spanish"}, {name: "age", value: "18"}, {name: "childs", value: "5"}];
var arr2 = [{name : "childs", value: "5"}, {name: "lang", value: "German"}];

function mergeByProperty(arr1, arr2, prop) {
  _.each(arr2, function(arr2obj) {
    var arr1obj = _.find(arr1, function(arr1obj) {
      return arr1obj[prop] === arr2obj[prop];
    });

    arr1obj ? _.extend(arr1obj, arr2obj) : arr1.push(arr2obj);
  });
}

mergeByProperty(arr1, arr2, 'name');

console.log(arr1);
