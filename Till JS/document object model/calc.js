function clearBox(){
  document.querySelector("#inp").value="";
}
function displayBox(num){
  document.querySelector("#inp").value+=num;
}
function res(){
  let data=document.querySelector("#inp").value;
  let res=eval(data)
  document.querySelector("#inp").value=res
}
function back(){
  let data=document.querySelector("#inp").value;
  let res=data.slice(0,-1)// used to delete the last element
  document.querySelector("#inp").value=res
}