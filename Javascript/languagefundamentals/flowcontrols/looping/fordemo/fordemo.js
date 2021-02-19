//for(initialization;condition;incr/decr){
//}
//print number 1 to 10
// var i=1;
// for(i=1;i<=10;i++)
// {
//     console.log(i);
// }
//reverse from 10 to 1
// var i;
// for(i=10;i>0;i--)
// {
//     console.log(i);
// }

// //factorial
// var i;
// var num=3;
// var f=1;
// for(i=1;i<=num;i++)
// {
// f=f*i;
// }
// console.log("factorial is " +f);

// //prime number
// var num = 9;
// var i;
// var flag = 0;
// for (i = 2; i < num; i++) {
//     if (num % i == 0) {
//         flag = 1;
//         break;
//     }
// }
// if (flag == 1) {
//     console.log("Not Prime");
// }
// else {
//     console.log("Prime");
// }

//var num=3 lowerlimit=8; upperlimit=25
var ll = 8;
var ul = 25;
var num = 2;
let res = 0;
for (let i = 1; i <= ul; i++) {
    res = i ** num;
    if ((res >= ll) & (res <= ul)) {
        console.log(res);
    }
}
