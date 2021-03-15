//Exception handling
try{
    let data=eval("10+*+40");//exception occur in try block
    console.log(data);
}
catch(error){

    let data=eval("10+$+40");//exception occur in catch block
    console.log(data);
}
finally{
    console.log("Have one db operation");//mandatory code will be in fianlly block
    console.log("file operation");
}
