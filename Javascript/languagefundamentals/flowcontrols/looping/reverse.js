// // Reverse from 10 to 1
// var i=10;
// while(i>0){
//     console.log(i);
//     --i;
// }

// Even numbers upto 50
// var i=2;
// while(i<=50){
//     console.log(i);
//     i= i+2;
// }

// using mode to find even numbers upto 50
// var i = 1;
// while(i<=50)
// {
//     if(i%2==0)
//     {
//         console.log(i);
//     }
//     i++;
// }

// fizz buzz fizbuzz
// var i=1;
// while(i<=50)
// {
//     if(i%15==0)
//     {
//         console.log("FizzBuzz");
//     }
//     else if(i%3==0)
//     {
//         console.log("Fizz");
//     }
//     else if(i%5==0)
//     {
//         console.log("Buzz");
//     }
//     else{
//         console.log(i);
//     }
//     i++;
   
//    }

//  Adding all numbers upto 50
// var limit = 50;
// var i =1;
// var sum=0;
// while(i<=50)
// {
// sum= sum+i
// i++;
// }
// console.log(sum);

// //reverse of a number
// var num=123;
// var rev=0;
// var rem;
// while(num!=0)
// {
//     rem=num%10;
//     rev=rev * 10 + rem;
//     num= Math.floor(num/10);
    
  
// }
// console.log(rev);


//Amstrong of 153
var num=153;
var r=0;
var sum=0;
var temp;
temp=num;
while(num>0)
{
    r=num%10;
    sum=sum+(r*r*r);    
    num=Math.floor(num/10); 
}
console.log(sum);
if(sum==temp)
{
console.log("Amstrong");
}
else{
    console.log("Not Amstrong");
}

//Amstrong of 123
var num=123;
var r=0;
var sum=0;
var temp;
temp=num;
while(num>0)
{
    r=num%10;
    sum=sum+(r*r*r);    
    num=Math.floor(num/10); 
}
console.log(sum);
if(sum==temp)
{
console.log("Amstrong");
}
else{
    console.log("Not Amstrong");
}

//q1 n times addition of a number
var num=2;
while(num<=9)
{
    var sum=0;
    var sum1=0;
    var i=1;
    while(i<=num)
    {
        sum1=sum1*10+num;
        sum=sum+sum1;
        i++;
    }
    console.log(sum);
    num++;
}