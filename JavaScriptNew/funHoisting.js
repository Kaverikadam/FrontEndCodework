

function demo(){
    console.log("welcome")
}


let demoFun=function(){
    console.log("Welcome to expression")
}
demo()

demoFun()
//spread operator
arr=[10,20,30,40,50]
sum=0;
function add(...args){
    
    for(i of args){
        sum=sum+i;
    }
    return sum;
}
console.log(add(10,20,30,40));

//using argument 
sum=0;
function add(){
    
    for(i of arguments){
        sum=sum+i;
    }
    return sum;
}
console.log(add(10,20,30));
