radArr=[10,20,30,40,50]
pie=3.147;
function circleArea(){
    areaArr=[]
    for(i=0;i< radArr.length;i++){
        areaArr[i]=pie*radArr[i]*radArr[i];
    }
    return areaArr
}

console.log("Area of array = "+circleArea(radArr))

function circlePeri(){
    PeriArr=[]
    for(i=0;i< radArr.length;i++){
        PeriArr[i]=2*pie*radArr[i];
    }
    return PeriArr
}

console.log("Perimeter of array = "+circlePeri(radArr)+" ")


//Using high order function map() and arrow()
console.log();
console.log();

console.log("Area of circle= "+(areaOfCircle=radArr.map(radArr=>pie*radArr*radArr)))
console.log("Perimeter of circle= "+(periOfCircle=radArr.map(radArr=>2*pie*radArr)))

