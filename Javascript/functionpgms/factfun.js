// function fact(num) {
//     var fact = 1;
//     for (let i = 1; i <= num; i++) {
//         fact = fact * i;
//     }
//     return fact;
// }

// var res = fact(3)
// console.log(res);

//prime within a limit
function prime(low, high) {
    for (var i = low; i <= high; i++) {
        var flag = 0;
        for (var j = 2; j < i; j++) {
            if (i == 2) {
                console.log(i);
            }
            if (i % j == 0) {
                flag = 1;
                break;
            }
        }

        if (flag == 0) {
            if (i < 2) {
                continue;
            }
            else {
                console.log(i);
            }
        }
    }
}
prime(5, 30);