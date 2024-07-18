//reverse a number
console.log("Reverse a number")
num=2567
rem=0
sum=0
while(num>0) {
    rem=num%10;
    sum=sum*10+rem;
    num=Math.floor(num/10);
}
console.log(2567+" reversed -> "+sum);


console.log("Palindrome or not");
num=12321
n=num
rem=0
sum=0
do {
    rem=num%10;
    sum=sum*10+rem;
    num=Math.floor(num/10);
}while(num>0)
    
if(n==sum){
    console.log(sum+" is a palindrome ");
}
else{
    console.log(sum+" is not a palindrome")
}
