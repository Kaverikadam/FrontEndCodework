//async returning non promise 
// async function fun(){
//     return "Kodnest";
// }
// f=fun();
// console.log(f)


//async returning promiss 
let p=new Promise(
    function(resolve,reject){
        resolve("Data from Promise ")
    }
)

async function fun(){
    return p;
}
f=fun();
console.log(f)
f.then(
    function(data){
        console.log(data);
    }
)


