/*
Good morning! Given a positive (or 0) number, return a string of 1's and 0's representing it's binary value:

toBinaryString(6) should return "110" (no leading 0).

Use of the native method number.toString(2);  is disallowed.

console.log(toBinaryString(0));  // <--- 0
console.log(toBinaryString(1));  // <--- 1
console.log(toBinaryString(2));  // <--- 10
console.log(toBinaryString(3));  // <--- 11
console.log(toBinaryString(4));  // <--- 100
console.log(toBinaryString(5));  // <--- 101
console.log(toBinaryString(6));  // <--- 110
console.log(toBinaryString(7));  // <--- 111
console.log(toBinaryString(8));  // <--- 1000
console.log(toBinaryString(9));  // <--- 1001
console.log(toBinaryString(10)); // <--- 1010
console.log(toBinaryString(11)); // <--- 1011
console.log(toBinaryString(12)); // <--- 1100
console.log(toBinaryString(13)); // <--- 1101
console.log(toBinaryString(14)); // <--- 1110
console.log(toBinaryString(15)); // <--- 1111
console.log(toBinaryString(16)); // <--- 10000

Count from 0 to 31 in binary with one hand: https://youtu.be/Bke95oWWZII

Remainder division with the modulo operator %
*/


function toBinaryString(int) {
    // Math.pow(x, y) returns the value of x to the power of y

    // first need to find the largest number q s.t. 2^q < int and 2^(q+1)>int

    findLargestQ = (num) => {
        let q = 0;
        while (num - Math.pow(2,q) >= 0 ) {
            if (num - Math.pow(2, q+1) === 0) {
                return q
            } else if (num - Math.pow(2, q+1) < 0) {
                return q
            } else {
                q++;
            }
        }
    }
    
    findBinarySumPowers = (num) => {
        let current = num;
        let binarySumPowers = [];
        let binarySumArr = [];
        while (current % Math.pow(2,findLargestQ(current)) >= 0) {
            binarySumPowers.push(findLargestQ(current));
            current = current - Math.pow(2,findLargestQ(current));
            if (current === 0) {
                return binarySumPowers
            }
        }
        return binarySumPowers; 
    }

    let smallNumbers = [];
    let largeNumbers = [];
    let z = findBinarySumPowers(int);
    console.log('z: ', z)
    for (let i = 0; i < z.length;i++) {
        if (z[i] <= 1) {
            smallNumbers.push(z[i]);
        } else {
            largeNumbers.push(z[i]);
        }
    }
    console.log('largeNumbers: ', largeNumbers);

    let largeNumbersTotal = 0;
    for (let i = 0; i < largeNumbers.length; i++) {
        largeNumbersTotal += Math.pow(2,largeNumbers[i]);
    }
    console.log('largeNumbersTotal: ', largeNumbersTotal);
    let smallNumber = int - largeNumbersTotal;

    console.log('smallNumber: ', smallNumber);    

    let largeNumber = 0;

    for (let i = 0; i < largeNumbers.length;i++) {
        largeNumber += Math.pow(10,largeNumbers[i])
    }
    console.log('largeNumber: ', largeNumber);

    let numberToBinaryObj = {
        1:'0001',
        2:'0010',
        3:'0011',
        4:'0100',
        5:'0101',
        6:'0110',
        7:'0111',
        8:'1000',
        9:'1001',
        10:'1010',
        11:'1011',
        12:'1100',
        13:'1101',
        14:'1110',
        15:'1111',
    }

    let largeNumberString = String(largeNumber);
    let largeNumberStringsArray = largeNumberString.split();
    // largeNumberString.splice(0,largeNumberStringsArray.length-4);
    largeNumberString = largeNumberString.slice(0,-4);
    console.log('largeNumberString: ' ,largeNumberString);

    let smallNumberString = numberToBinaryObj[smallNumber];
    console.log('smallNumberString: ' ,smallNumberString);

    let binaryString = largeNumberString.concat(smallNumberString);
    console.log('binaryString: ' ,binaryString);
}
toBinaryString(101);





