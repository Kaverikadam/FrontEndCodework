let first=document.getElementById("first");
let sec=document.getElementById("sec");
let third=document.getElementById("third");

first.style.height='400px' ;
first.style.width='400px' ;
first.style.backgroundColor='red' ;
first.style.alignContent='center';
first.style.padding='10px';


sec.style.height='250px' ;
sec.style.width='250px' ;
sec.style.backgroundColor='yellow' ;
sec.style.alignContent='center';
sec.style.padding='10px';

third.style.height='150px' ;
third.style.width='150px' ;
third.style.backgroundColor='blue' ;
third.style.alignContent='center';
third.style.padding='10px';

//Bubbling Effect
first.addEventListener("click",()=>alert('First Box is clicked'));
sec.addEventListener("click",()=>alert('Second Box is clicked'));
third.addEventListener("click",(e)=>
    {
        alert('Third Box is clicked')
        e.stopPropagation();
    }
)