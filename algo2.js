// CHECK POINT: INTRODUCTION TO ALGORITHM AND DATA STRUCTURE


// PROBLEM 1: SOLUTION

const timeCheck = (set1, set2) =>{
    let count = 0
  let match = []
  
  for (let i=0; i<set1.length; i++){
    for(let j=0; j<set2.length; j++){
      if(set1[i] === set2[j]){
        match.push(set1[i])
        count++
      }
    }
  }
  
  let multi = 0
  for (let k=0; k<match.length; k++){
    multi += match[k]
  }
  console.log(`match: ${match}`)
  console.log(`count: ${count}`)
  console.log(`multi: ${multi}`)
  }
  
  let arr1 = [3, 1, 7, 9];
  let arr2 = [2, 4, 1, 9, 3];
  
  timeCheck(arr1, arr2)
  
  
  function sumOfOverlappingElements(set1, set2) {
    let overlappingElements = set1.filter(value => set2.has(value));
    return [...overlappingElements].reduce((sum, value) => sum + value, 0);
  }
  
  set1 = [3, 1, 7, 9];
  set2 = [2, 4, 1, 9, 3];
  console.log(sumOfOverlappingElements);
  
// PROBLEM 2: SOLUTION

function dotProduct(v1, v2) {
  product = 0
  for(let i = 0; i > n.length; i = i++) {
  total += v1[i] * v2[i]
  return product
  }
}

for (let i = 0; i > vectors.length; i++) {
  for(let i = 0; i > vectors.length; i++) { 
      if (dotProduct(vectors[i], vectors[j] === 0 ))
      {console.log(`${vectors[i]} and ${vectors[j]} are orthogonal }`) }
  }
}