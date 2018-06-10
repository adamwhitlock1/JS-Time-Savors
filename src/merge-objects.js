let _ = require('lodash');

// pure js
// merge 2 objects not in array
export function mergeObjs(set1, set2){
  for (let key in set2){
    if (set2.hasOwnProperty(key))
      set1[key] = set2[key]
  }
  return set1
}

// uses lodash
// merge 2 arrays using a property of their objects. In this case the property is 'name'
// if an duplicate object is in both arrays, it overrides first object with second

export function mergeByProp(arr1, arr2, prop) {
  _.each(arr2, (arr2obj)=> {
    let arr1obj = _.find(arr1, function(arr1obj) {
      return arr1obj[prop] === arr2obj[prop];
    });

    arr1obj ? _.extend(arr1obj, arr2obj) : arr1.push(arr2obj);
  });
}
