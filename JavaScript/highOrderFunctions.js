
//normal function
arr=[1,2,3,4,5,6,7,8,9,10]
arr1=[]
for(i=0;i<arr.length;i++){
    arr1[i]=arr[i]*arr[i];
}
console.log(arr1)

//map() function -> a function which perform operations on single elements and also which accept a anather function is called high order function


sq_arr=arr.map(arr=> arr*arr);
console.log(sq_arr);


cube_arr=arr.map(arr=>arr*arr*arr);
console.log("Cude Of array elements "+ (cube_arr));

redArr=[10,20,40,50,30]
pi=3.147
for(i=0; i < redArr.length; i++){
    console.log("Radius of "+redArr[i]+" = "+(pi*redArr[i]*redArr[i]));

}
