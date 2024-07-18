const gbl='im globle';

function local(){
    const lcl='i am local';
    console.log(lcl)
    console.log(gbl)
}
local()
console.log(gbl)
//console.log(lcl)// error
