a=[10,20,30,40,50,'java'];
console.log(a)

b=new Array(10,50,60,70,80)
console.log(b)


//Accessing array ElementInternals
console.log('a[0] -'+a[0])
console.log('a[7] -'+a[7])


for(i=0;i<=a.length;i++){
    console.log(a[i])
}

//updating array elements
a[3]=101;
console.log('a[3] -'+a[3])
console.log(a)

//adding new elements

a[6]=25;
a[8]=61;
console.log(a)

for(i=0;i<a.length;i++){
    console.log(i+" -> "+a[i])
}
console.log("Using for of loop")

for(el of a){
    console.log(el)
}

console.log("Index of 20 -> "+a.indexOf(20))
a.push(100);
console.log(a)
a.pop(100)
console.log(a)
