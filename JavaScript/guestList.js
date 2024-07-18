c=document.querySelector('.container')
c.style.backgroundColor='pink'
c.style.padding='50px'

btn1=document.querySelector('.btn1')
btn1.style.backgroundColor='green'
btn1.style.borderRadius='50px'
btn1.style.color='white'

btn2=document.querySelector('.btn2')
btn2.style.backgroundColor='red'
btn2.style.borderRadius='50px'
btn2.style.color='white'

h3=document.querySelector('h3')
h3.style.color='blue'

g=1
function addGuest(){
    newEle=document.createElement('li')
    newEle.textContent="Guest "+g

    ul=document.getElementById('ul')
    ul.appendChild(newEle)

    g++
}
//HM
function removeGuest(){
    newEle=document.querySelector('ul')
    
    lg=newEle.lastElementChild;
    newEle.removeChild(lg)
    g--;

}
