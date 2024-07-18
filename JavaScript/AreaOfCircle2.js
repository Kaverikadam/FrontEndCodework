radArr=[10,20,30,40,50]
function calculate(radArr,logic){

    outArr=[];
    for(i=0;i<radArr.length;i++){
        element=logic(radArr[i]);
        outArr.push(element);
    }
    return outArr;
}


area=function calcArea(rad){
    return 3.14*rad*rad;
}
peri=function calcPeri(rad){
    return 2*3.14*rad;
}
diemeter=function calcDi(rad){
    return 2*rad
}
console.log("-----------------------------------------------------------------------------------------------------------------")
console.log(" Perimeter of circle  -> "+calculate(radArr,peri))
console.log(" Area of circle  -> "+calculate(radArr,area))
console.log(" Diameter of circle  -> "+calculate(radArr,diemeter))
console.log("----------------------------------------------------------")   
