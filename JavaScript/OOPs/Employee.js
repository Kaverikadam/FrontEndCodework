class Employee{
    constructor(company){
        this.company=company;
    }

    task(){
        console.log("Employee is doing task")
    }
    login(){
        console.log("Employee is login")
    }
}

class Developer extends Employee{
    task(){
        console.log("Developer is doing task")
    }
    develop(){
        console.log("Developer is developing software")
    }
}
class Tester extends Employee{
    task(){
        console.log("Tester is doing task")
    }
    test(){
        console.log("Tester  is testing software")
    }
}

em=new Employee("Kodnest");
em.login();
em.task();
dev=new Developer("Kodnest");
console.log(dev.company)
dev.login();
dev.task();
dev.develop();
test=new Tester("Kodnest");
console.log(test.company)
test.login();
test.task();
test.test();