class student{
    constructor(roll,name){
        this.roll=roll;
        this.name=name;
    }
    study(){
        console.log("Studing JS");
    }

}
st=new student(101,'kaveri');
//Accessing values
console.log(st.roll);
console.log(st.name)
st.study();

//modifing values
//using dot notation
st.name='kavya'

console.log(st.name)
//using bracket notation
st['roll']=19
console.log(st.roll)