function getAnswer(){

    h1=document.getElementById('h1')
    h1.textContent='Answers'

    q1=document.getElementById('q1')
    q1.textContent='Byte -> 1byte'

    q2=document.getElementById('q2')
    q2.textContent='int -> 4byte'

    q3=document.getElementById('q3')
    q3.textContent='double -> 8byte'

    b1=document.getElementById('b1')
    b1.textContent='Get Questions'

   
}

function darkMood(){
    container=document.getElementById('container')
    container.style.color='yellow'
    container.style.backgroundColor='black'
    b2=document.getElementById('b2')
    b2.textContent='Light Mode'

}