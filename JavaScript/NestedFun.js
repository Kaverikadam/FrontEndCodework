function outer(){
    console.log("Outer is executing");
    function inner(){
        console.log("Inner is executing");
    }
    return inner;
}
res=outer();
res();

function outer1(){
    var x=10;
    console.log("Outer X "+x);
    function inner(){
        console.log("Inner X "+x);
    }
    inner();
}
outer1();