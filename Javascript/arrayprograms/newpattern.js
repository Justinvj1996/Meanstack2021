// var arr=[1,2,3,4]
// num=7;
// for(let i=0;i<arr.length;i++){
//     for(let j=i+1;j<arr.length;j++){
//         if(arr[i]+arr[j]==num){
//             console.log(arr[i],arr[j]);
//             break;
//         }
//     }
// }

// var arr=[1,2,3,4,5]
// var low=0;
// var upp=arr.length-1;
// var total
// var num=6;
// while(low<upp){
//     let total=arr[low]+arr[upp];
//     if(total==num){
//         console.log(arr[low],arr[upp]);
//         low++;
//     }
//     else if(total<num){
//         low++;
//     }
//     else{
//         upp--;
//     }
// }

var arr1 = [10, 11, 13, 14, 15];
var arr2 = [8, 9, 10, 11, 16];
var p1 = 0;
var p2 = 0;
while (p1 < arr1.length & p2 < arr2.length) {
    if (arr1[p1] == arr2[p2]) {
        console.log(arr1[p1]);
        p1++;
    }
    else if(arr1[p1]>arr2[p2]){
        p2++;
}
else {
    p1++;
}
}
