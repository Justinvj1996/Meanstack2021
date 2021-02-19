// var arr = [10, 11, 12, 1, 2];//linear search
// arr.sort((o1, o2) => o1 < o2 ? -1 : 1);
// console.log(arr);
// var element = 12;
// for (let number of arr) {
//     if (element == number) {
//         flag = 1;
//         break;
//     }
// }
// if (flag == 0) {
//     console.log("not found");
// }
// else {
//     console.log("found");
// }
var arr=[10,1,11,2,12,3];
arr.sort((o1,o2)=>o1<o2?-1:1);
var low=0, upp=arr.length-1;
var elem=12;
var flag=0;
while(low<=upp)
{
    let mid=Math.floor((low=upp)/2);
    if(elem>arr[mid]){
        low=mid+1;
    }
    else if(elem<arr[mid]){
        upp=mid+1;
    }
    else if(elem==arr[mid]){
        flag=1;
        break;
    }

}
if(flag==0){
    console.log("Element not found");
}
else{
    console.log("Element found");
}