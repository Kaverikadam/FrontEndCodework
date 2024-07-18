console.log('Control flow in JS')

a=10;
if(a%2==0){
    console.log(a+" is even number")

}
else{
    console.log(a+" not a even");
}
grade=75;
if(grade >=90 && grade <=100){
    console.log("A+")

}
else if(grade >=80 && grade <=90){
    console.log("A");
}
else if(grade >=70 && grade <=80){
    console.log("B+");
}
else if(grade >=60 && grade <=70){
    console.log("B");
}
else if(grade >=50 && grade <=60){
    console.log("C+");
}
else{
    console.log("C");
}


//Switch case

choice=8;
switch(choice){
    case 1: console.log('Sunday Holiday')
    break;
    case 2: console.log('Monday Working day')
    break;
    case 3: console.log('Tuesday Working day')
    break;
    case 4: console.log('wednesday Half day')
    break;
    case 5 : console.log('thursday Shopping day')
    break;
    case 6: console.log('Friday Movie day')
    break;
     case 7: console.log('Saturday Week day')
    break;
    default:console.log("Invalid day");
    
}
//Tables 

n=5;
for(i=1;i<=10;i++){
    console.log(n+" x "+i+" = "+(n*i));
}
i=1
n=7;
while(i<=10){
    console.log(n+" x "+i+" = "+(n*i));
    i++;
}



