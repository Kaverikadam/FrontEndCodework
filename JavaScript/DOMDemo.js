function change(){
    //get element by id
    b1=document.getElementById('b1')
    b1.style.color='red'
    b1.style.backgroundColor='green'
    b1.style.borderRadius='20px'

    container=document.getElementById('container')
    container.style.backgroundColor='yellow'
    container.style.padding='40px'


    //get element by 
    headings=document.getElementsByClassName('heading');
    
    for(i=0;i<headings.length;i++){
        headings[i].style.color='red'
    }
    

    para=document.getElementsByTagName('p')
    for(i =0;i<para.length;i++){
        para[i].style.color='blue'
    }
}