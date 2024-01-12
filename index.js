function hasTargetSum(array, target) {
  // Write your algorithm here
  const foundNumber = array.filter(number => {
    let result = target - number
    //iterates through array with the result, if any nymber matches with the result it is returned
    if(array.indexOf(result) !== -1) {
      return true;
    }
  })

  if(foundNumber.length > 1){
    return true
  } else {
    return false
  }

}

/* 
  Write the Big O time complexity of your function here
  0(n^2)
*/

/* 
  Add your pseudocode here
  filters off any element whose result after subtracting from the target doesn't match an element from the original array
*/

/*
  Add written explanation of your solution here
  the function iterates through every number in the passed array,
  it subtracts the number from the target,
  it compares the result of the subraction to the individual numbers of the original passed array,
  if the result matches any number, it is returned in a new array
  if the new array has more than 1 element, it means two numbers of the original array could be added to get the target
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([4], 4));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([-7, 10, 4, 8], 3));
}

module.exports = hasTargetSum;
