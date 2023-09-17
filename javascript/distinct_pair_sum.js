function distinctPairSum(arr, k) {
  // type your code here
  let result = [];
  while (arr.length > 0) {
    let diff = k - arr[0];
    let num = arr.shift(1);
    indxDiff = arr.indexOf(diff);
    if (indxDiff !== -1) {
      result.push([num, diff]);

      arr = arr.filter((element) => element !== diff);
      // arr.splice(indxDiff, 1);
    }
    // arr.splice(0, 1);
    // console.log(diff);
    // console.log(arr);
    // console.log(result);
  }
  return result;
}

// distinctPairSum([0, 1, 1, 2, 0, 1, 1], 2);

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: [[1, 1], [2, 0]]");
  console.log("=>", distinctPairSum());

  console.log("");

  console.log("Expecting: [[2, 8]]");
  console.log("=>", distinctPairSum([3, 4, 2, 1, 5, 2, 8, 2], 10));
}

module.exports = distinctPairSum;

// Please add your pseudocode to this file
// And a written explanation of your solution
