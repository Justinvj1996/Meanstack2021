var arr = [3, 4, 5];
var sum = 0;
var num;
var res = [];
for (num of arr) {
    sum = sum + num;
}
for (let num of arr) {
    res.push(sum - num)
}
console.log(res);