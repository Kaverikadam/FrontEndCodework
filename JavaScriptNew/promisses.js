let pr=new Promise(
    function(resolve,reject){
        console.log('welcome to promises');
    }
);
pr.then(
    function(){
        console.log('Promises han been consumed')
    }
)