pie=3.14;
radArr=[10,20,30]

function calculate(radArr,logic){
    return radArr.map(logic)
}

areaOfCircle=radArr=>pie*radArr*radArr
periOfCircle=radArr=>2*pie*radArr
dieOfCircle=radArr=>2*radArr

console.log("Area of circle= "+calculate(radArr,areaOfCircle))
console.log("Perimeter of circle= "+calculate(radArr,periOfCircle))
console.log("diemeter of circle= "+calculate(radArr,dieOfCircle))
