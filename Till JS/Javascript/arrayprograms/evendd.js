var arr=[10,20,30,40,50]
var even=[];
var odd=[];
for(let num of arr){
    if(num%2==0){
        even.push(num)//store elements in array
    }
    else{
        odd.push(num)
    }
}
console.log(even);
console.log(odd);