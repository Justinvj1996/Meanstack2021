var arr=[2,4,5,6,7,8]
arr.forEach(o=>console.log(o))//foreach used in internal iteration
//map
var data=arr.map(num1=>num1**2);
console.log(data);
//filter
var even=arr.filter(num=>num%2==0)
console.log(even);
//reduce
var sum=arr.reduce((num1,num2)=>num1+num2)
console.log(sum);
var max=arr.reduce((num1,num2)=>num1>num2?num1:num2)
console.log(max);