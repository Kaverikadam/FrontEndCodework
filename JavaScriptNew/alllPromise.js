let prom=new Promise(
    function(resolve,reject){
        setTimeout(
            function(){
                console.log('Asynchornus task');
                let task=false;
                if(task==true){
                    resolve();
                }
                else{
                    reject();
                }
            }
            ,3000
        );
    }
)
prom.then(
    function(){
        console.log('Promise success: task completed')
    }
).catch(
    function(){
        console.log('promise Fail: task incomplete')
    }
).finally(
    function(){
        console.log('Task attempted!')
    }
)


//Passing data
new Promise(
    function
    (resolve,reject){
        console.log('Some task')
        let data='kaveri@gmail'
        resolve(data)
    }
).then(
    function(data){
        console.log('Data receved '+data)
    }
)

//Accessing objects through the promises

new Promise(
    function(resolve,reject){
        setTimeout(
            function(){
                console.log('User data is fetching')
                resolve(
                    {
                        username:'kaveri',
                        email:'kaveri@g.com',
                        add:'begaluru'
                    }
                )
            }
            ,1000)
    }
).then(
    function(user){
        console.log(user)
    }
)