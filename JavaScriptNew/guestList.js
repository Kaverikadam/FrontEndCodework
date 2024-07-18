
i=1;
function addguest(){

    newLt=document.createElement('li');
    newLt.textContent="guest "+i;

    glst=document.querySelector('ul');
    glst.appendChild(newLt);
    i++;
}

function removeguest(){
    glst=document.querySelector('ul');
    glst.removeChild(newLt);
    i--;
}