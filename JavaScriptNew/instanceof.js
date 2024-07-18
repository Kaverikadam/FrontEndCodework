class demo{

    constructor(roll,name){
        this.roll=roll;
        this.name=name;

    }
    study(){
        console.log("Welcome to JS");
    }
}
d=new demo(1,'kaveri');
console.log(d.roll)
console.log(d.name);
console.log(d instanceof demo);