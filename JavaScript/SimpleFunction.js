function add(a,b){
    return a+b;
}

function add(a,b,c){
    return a+b+c;
}

function add(a,b,c,d){
    return a+b+c+d;
}

console.log(add(10,20))
console.log(add(10,20,30))
console.log(add(10,20,30,40))

//Solution for method overloading

// -> by using advanced loop(" for each loop" )

function add(){
    sum=0;
    for(i of arguments){
        sum+=i;
    }
    return sum;
}
// console.log(add(10,20))
console.log(add(10,20,30,50,40))


console.log("Spread operation")

function add(...n){
    sum=0;
    for(i of n){
        sum+=i;
    }
    return sum;
}

console.log(add(1,2,3,4,5,6))




