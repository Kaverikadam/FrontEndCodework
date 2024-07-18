
//Rugular function
function fun(){
    console.log('Function is executing')
}
fun()

arr=()=>{
    console.log("Arrow is executing")
}
arr()

//Arrow function

function add(a,b){
    sum=a+b
    return sum
}
console.log('Addition= '+add(10,20))

arrowAdd=(a,b)=>{
    sum=a+b
    return sum
}

console.log('Arrow function addition '+arrowAdd(20,40))

ad=(...a)=>{
    sum=0
    for(i of a){
        sum=sum+i        
    }
    return sum
}
console.log('Addition with spread and arrow function '+ad(1,2,3,4,5,6))




function add1(a,b){
    sum=a+b
    return sum
}

console.log("regulr add"+add1(10,20))


add2=(a,b)=>
    {
        return a+b
    }
console.log("arrow add "+add(30,50))

function sub(a,b){
    console.log(a-b)
}

console.log("regulr sub"+sub(10,20))

add=(a,b)=> console.log(a-b)

console.log("arrow sub "+add(30,50))

function div(a,b){
    return a/b
}
console.log("regulr div "+div(10,2))

div= (a,b) => a/b;

console.log("arrow div "+div(10,5))


x=function(){
    console.log("X is executing")
} 

y=function(demo){
    demo();
    console.log("Y is  executing ")
}

y(x);

//Arrow func

p=()=>{
    console.log("P is executing")
}

q=(fun)=>{
    fun();
    console.log("Q is executing")
}

q(p);





