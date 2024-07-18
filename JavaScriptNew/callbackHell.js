setTimeout(function(){
    console.log("fun1");
    setTimeout(function(){
        console.log("fun2");
        setTimeout(function(){
            console.log("fun3");
            setTimeout(function(){
                console.log("fun5");
                setTimeout(function(){
                    console.log("fun6");
                    setTimeout(function(){
                        console.log("fun7");
                    },3000);
                },3000);
            },3000);
        },3000);
    },3000);
},3000);

//Solution is proms->