// merge objects not in array
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
