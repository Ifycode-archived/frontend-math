/*

Random num is usually between 0 & 1
Never up to 1: 

Math.random() => r
0 ≤ r < 1

Roll function:

roll(min, max) => n
min ≤ n < max

*/



/*

Generate any number between 1 & 7:
---------------------------------

min ≤ n < max

1 ≤ n < 7

Subtract 1 so the min can be 0 (max will also be less than 7)

1-1 ≤ n-1 < 7-1

0 ≤ n-1 < 6

Get max to be equal to 1:

0/6 ≤ (n-1)/6 < 6/6

0 ≤ (n-1)/6 < 1 


Compare lines 7 & 37, that's how we arrive at this:

(n-1)/6 = r

Multiply both sides by 6:

n - 1 = r * 6

n = (r * 6) + 1

Code:

function roll() {
    return Math.floor((Math.random() * 6) + 1);
}

console.log(roll());

*/


/*

Generate any number between any min and any max:
------------------------------------------------

min ≤ n < max

Subtract 1 so the min can be 0 (max will also be less than 7)

min - min ≤ n - min < max - min

0/(max - min) ≤ (n - min)/(max - min) < (max - min)/(max - min)

0 ≤ (n - min)/(max - min) < (max - min)/(max - min)

0 ≤ (n - min)/(max - min) < 1

(n - min)/(max - min) = r

Multiply both sides by (max - min):

(n - min) = r * (max - min)

Add min to both sides:

n = r * (max - min) + min

*/

//without floatFlag
/*function roll(min, max) {
    let r = Math.random();
    r *= (max - min);
    r += min;

    return r;
}

console.log(roll(1, 5));

//with floatFlag
function roll(min, max, floatFlag) {
    let r = Math.random();
    r *= (max - min);
    r += min;

    return floatFlag? r : Math.floor(r);
}

console.log(roll(1, 5, 1));
console.log(roll(1, 5));

//Short version:
function roll(min, max, floatFlag) {
    let r = Math.random() * (max - min) + min;
    return floatFlag? r : Math.floor(r);
}

console.log(roll(1, 5, 1));
console.log(roll(1, 5));

*/