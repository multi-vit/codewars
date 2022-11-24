/*
https://www.codewars.com/kata/51e04f6b544cf3f6550000c1

Let's pretend your company just hired your friend from college and paid you a referral bonus. Awesome! To celebrate, you're taking your team out to the terrible dive bar next door and using the referral bonus to buy, and build, the largest three-dimensional beer can pyramid you can. And then probably drink those beers, because let's pretend it's Friday too.

A beer can pyramid will square the number of cans in each level - 1 can in the top level, 4 in the second, 9 in the next, 16, 25...

Complete the beeramid function to return the number of complete levels of a beer can pyramid you can make, given the parameters of:

your referral bonus, and

the price of a beer can

For example:

beeramid(1500, 2); // should === 12
beeramid(5000, 3); // should === 16
*/

// Returns number of complete beeramid levels
var beeramid = function (bonus, price) {
  let count = 0;
  if (bonus <= 0) {
    return count;
  }
  console.log(`Bonus is ${bonus} and price is ${price}`);
  for (let i = 1; count <= bonus; i++) {
    let beer = i ** 2 * price;
    console.log(`This round of beer costs ${beer}`);
    if (count + beer > bonus) {
      return i - 1;
    } else {
      console.log(`Let's add a pyramid layer! i = ${i} and count = ${count}`);
      count += beer;
    }
  }
};

/*
Bonus money
Price of a can of beer
Each added level will square cans in that level (e.g. 1, 4, 9, 16, 25, 36, 49, 64, 81, 100, 121, 144, 169, 196)
Return complete levels, so need to floor it
*/
