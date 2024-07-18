class student{
    constructor(roll,name){
        this.roll=roll;
        this.name=name
    }
    study(){
        console.log("Student is studing JS");
    }
}
//creating object
st=new student(101,"kaveri");

//Accessing properties
//1)
console.log("Roll no "+st.roll)
console.log("Name "+st.name)
console.log(st)
//2)
console.log(st['name'])

console.log("Using for loop")
for(key in st){
    console.log(st[key])
}
console.log("---------------------------------------------")
//adding new property
st.email="kaveri@gmail.com"
console.log(st)

//deleting existing property
delete st.roll
console.log(st)
