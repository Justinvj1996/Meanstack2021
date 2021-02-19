// var text="hai hai hello hai hello";
// var words=text.split(" ")
// console.log(words);
// var dic={}
// var temp
// //k|v
// //hai:2
// //hello:2
// //[ 'hai', 'hello', 'hai', 'hello' ]

// var flag=0
// for(let word of words){
//     if(word in dic){
//         if(dic[word]>flag){
//             flag=dic[word]
//             temp=word

//         }
//         dic[word]+=1


//     }
//     else{
//         dic[word]=1
//     }
// }
// console.log(dic);
// console.log(temp);

//===================================================================
//using array
var text="hai hai kooi hello hello  kooi kooi";
var words=text.split(" ")
console.log(words);
var dic={}
//k|v
//hai:2
//hello:3
//[ 'hai','hai', 'hello', 'hello', 'hello' ]

for(let word of words){
    if(word in dic){
               dic[word]+=1


    }
    else{
        dic[word]=1
    }
}
elements=[]
//{hai:2, hello:3}
for(let key in dic)
{
    elements.push([dic[key],key])
    //[[2,hai][3,hello]]
}
console.log(elements);
elements.sort((o1,o2)=>o2[0]-o1[0])
console.log(elements[0][1]);