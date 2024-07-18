arr=[15,10,25,5,20]

doubleN=function(arr){
    for(i=0;i<arr.length;i++){
        arr[i]=arr[i]*2;
    }
    return arr;
}
console.log("Double of each value "+(doubleN(arr)))

arr=[15,10,25,5,20]
double=(arr.map(arr=>arr*2));
console.log(double)

arr=[15,10,25,5,20]
eArr=[]
evenN=function(arr){
    for(i=0;i<arr.length;i++){
       if(arr[i]%2==0){
        eArr.push(arr[i])
       }
    }
    return eArr;
}
console.log("Even Array elements "+(evenN(arr)))

even=arr.filter(num=>num%2==0)
console.log("Even no "+even)
//or
iseven=(num)=>num%2==0;
eve=arr.filter(iseven)
console.log(eve)

arr=[15,10,25,5,20]
sum=0
sumArr=function(arr){
    for(i=0;i<arr.length;i++){
       sum=sum+arr[i]
    }
    return sum;
}
console.log("Sum of array "+(sumArr(arr)))

sumHO=arr.reduce((s,num)=>s+num,0)
console.log("Sum "+sumHO)

//Square of array elements
sq=(arr.map(n=>n*n))
console.log(sq)

//