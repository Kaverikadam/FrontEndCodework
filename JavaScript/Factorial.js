f=function factorial(num){
    if(num<=1){
        return 1
    }
    else{
        return num*factorial(num-1)
    }
}
console.log('Factorial '+f(5))
console.log('Factorial '+f(7))

fibo=function fibonacci(num){
    if(num==1 ){
        return 1
    }
    return fibonacci(num-1) + fibonacci(num-2)
}
console.log(fibo(5))
