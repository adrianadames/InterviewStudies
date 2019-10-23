/*
Given a sum and a product, find two integers x and y, 
where x + y === sum, and x * y === product. You will 
return this in an array.

For example, calling sumAndProduct(6, 9) should return 
[3, 3] because 3 + 3 === 6, and 3 * 3 === 9.

Please make sure to return your array such that x <= y
in the format [x, y].

If there is no valid x/y combination to solve for given
(sum, product) values, your function should return null.
*/

function sumAndProduct(sum, product) {
    let allProductPairs = [];
    let p1 =1;

    for (let i = 1; i <= Math.ceil(Math.sqrt(product)); i++) {
        // console.log('i: ', i)
        if (product % p1 === 0) {
            // console.log('product % p1: ', product % p1)
            allProductPairs.push([p1, product/p1]);
        }
        p1++;
    }
    // console.log('allProductPairs: ', allProductPairs);
    for (let i = 0; i < allProductPairs.length;i++) {
        // console.log('allProductPairs[i]: ', allProductPairs[i]);
        if (allProductPairs[i][0] + allProductPairs[i][1] === sum) {
            return (allProductPairs[i]);
        }
    }
    return null;
}

console.log(sumAndProduct(6,9));
console.log(sumAndProduct(11,30));
console.log(sumAndProduct(40,300));