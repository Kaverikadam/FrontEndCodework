let btn=document.querySelector("button");

//Way 1
btn.addEventListener("click",fun);
function fun(){
    alert("button is clicked");
}

//way 2

btn.addEventListener("click",
    function(){
        alert('Fun button clicked')
    }

);

//way 3

btn.addEventListener("click",
    ()=>alert('Fun button was clicked')
)