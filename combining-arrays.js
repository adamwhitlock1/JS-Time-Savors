const _ = require('lodash');


// pure js
// arrays of numbers or strings (doesn't work for arrays of objects)
function merge(a1, a2) {
  var hash = {};
  var arr = [];
  for (var i = 0; i < a1.length; i++) {
    if (hash[a1[i]] !== true) {
      hash[a1[i]] = true;
      arr[arr.length] = a1[i];
    }
  }
  for (var i = 0; i < a2.length; i++) {
    if (hash[a2[i]] !== true) {
      hash[a2[i]] = true;
      arr[arr.length] = a2[i];
    }
  }
  return arr;
}
console.log(merge(["bill","amy","eric","sam",6],[1,2,3,4,5,"sam"]));
// [ 'bill', 'amy', 'eric', 'sam', 6, 1, 2, 3, 4, 5 ]

// by using the lodash library we can combine arrays as well with _.union
console.log(_.uniq(["bill","amy","eric","sam",6],[1,2,3,4,5,"sam"]));



