// var age = 19;
// if (age > 18) {
//     console.log("U CAN VOTE");
// }
// else {
//     console.log("NOT ELIGIBLE")
// }

// var num = 0;
// if (num > 0) {
//     console.log("Possitive");
// }
// else if (num < 0) {
//     console.log("Negative");
// }
// else {
//     console.log("Number is zero")
// }
// var num = 20;
// if (num % 2 == 0) {
//     console.log("ODD");
// }
// else {
//     console.log("EVEN")
// }
// var num1 = 20;
// var num2 = 30
// if (num1 > num2) {
//     console.log("Highest is " + num1);
// }
// else {
//     console.log("Highest is " + num2)
// }

// var num1 = 20;
// var num2 = 10;
// var num3 = 15;
// if (num1 > num2 & num1 > num3) {

//     if (num2 > num3) {
//         console.log("Second largest is " + num2);
//     }
//     else {
//         console.log("Second largest is " + num3);
//     }
// }
// else if (num2 > num1 & num2 > num3) {
//     if (num1 > num3) {
//         console.log("Second largest is" + num1);
//     }
//     else {
//         console.log("Second largest is " + num3);
//     }
// }

// else {
//     if (num2 > num1) {
//         console.log("Second largest is" + num2);
//     }
//     else {
//         console.log("Second largest is " + num1);
//     }

// }

var num1 = 10;
var num2 = 20;
var num3 = 30;
var sum = num1 + num2 + num3;
var largest;
var slargest;
var small;
if (num1 > num2 & num1 > num3)
{
    largest = num1;
    if (num2 > num3) {
        slargest = num2;
    }

    else 
    {
        slargest= num3;
    }
}
else if (num2 > num3 & num2 > num1)
{
    largest = num2;

    if (num1 > num3) {
        slargest= num1;
    }

    else {
        slargest= num3;
    }
}
else if (num3 > num2 & num3 > num1)
{
    largest = num3;

    if (num2 > num1) {
        slargest= num2;
    }

    else {
        slargest= num1;
    }
}
small= sum - (largest + slargest);
console.log(largest);
console.log(slargest);
console.log(small);
console.log("Sorted list");
console.log("smallest is " + small);
console.log("second largest is " + slargest);
console.log("largest is " + largest);
