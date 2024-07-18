//Regular function
student1={
    roll:111,
    name:'Kaveri',
    info:function(){
        console.log('Student roll no '+this.roll+" name "+this.name);
        console.log(this);
    }
    
}
student1.info();

//Arrow function

student2={
    roll:222,
    name:'Kavya',
    info:()=>{
        console.log('Student roll no '+this.roll+' name '+this.name);
        console.log(this);
    }

}
student2.info();





