function change(){
    c=document.querySelector('.content')
    c.style.backgroundColor='pink'
    c.style.padding='50px'

    headings=document.querySelectorAll('.heading')
    for(i=0;i<headings.length;i++){
        headings[i].style.color='red';
    }

    p=document.querySelectorAll('p')
    for(i=0;i<p.length;i++){
        p[i].style.color='blue';
    }
}