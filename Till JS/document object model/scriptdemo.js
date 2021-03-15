// var tag=document.getElementsByTagName("h1");
// for (let t of tag){
//     t.style.color="red";
// }
// var ht=document.getElementById("hone");//by Id
// ht.style.color="green";

// var lst=document.getElementsByTagName("li");//by tag name
// for (let l of lst){
//     l.style.color="violet";
// }
// var lt=document.getElementsByClassName("lone");//by class name
// for (let ls of lt){
//     ls.style.color="orange";
// }
var heads=document.querySelectorAll("h1")//.using tag
for(let hd of heads){
    hd.style.color="green"
}
var hone=document.querySelector("#hone")//using id
hone.style.color="yellow"
var lst=document.querySelectorAll(".lone")//using class
for(let lt of lst){
lt.style.color="blue"
}