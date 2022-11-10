
// Function for reversing numbers in binary
// 'n' value
let n = 11;   // Result 13
//let n = 13; // Result 11

function reverseBits(n) {
  let rev = 0;

  // traversing bits of 'n'
  // from the right
  while (n > 0) {
    // bitwise left shift
    // 'rev' by 1
    rev <<= 1

    // if current bit is '1'
    if ((n & 1) == 1)
      rev ^= 1;

    // bitwise right shift
    //'n' by 1
    n >>= 1;
  }
  // required number
  return rev;
}

//Print the result
document.getElementById("input").innerHTML = n; //Print input
document.getElementById("output").innerHTML = reverseBits(n); // Print output

console.log(n); //input
console.log(reverseBits(n)); //output



