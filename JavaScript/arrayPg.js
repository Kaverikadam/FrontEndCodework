a=[10,20,30,40,50]
b=[]
j=a.length-1;
for(i=0;i<a.length;i++){
    b[j]=a[i]
    j--;
}
console.log("array "+a)
console.log("reversed array "+b);