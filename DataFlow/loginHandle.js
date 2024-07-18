function handleSubmit(event){

    form=document.getElementById('myform');
    data=new FormData(form);
    let name= data.get('name');
    
    // if(name != ''){
    //     if(name.length < 5){
    //         alert('Too short username should contain minimum 5 charecter')
    //     }
    //     else if(name.length > 12){
    //         alert('Too long username should contain maximum 12 charecters')
    //     }
    //     else{
    //         alert('Valid username')
    //     }
    // }
    // else{
    //     alert('Enter user name')
    // }
    // let password=data.get('password');
    alert(password.length)

    if(password != ''){
        if(password.length < 8){
            alert('Too short Enter atleast 8 charecters')
        }
        else if(password.length >15){
            alert('Too long enter maximum 15 charecters')
        }
        if(password.isDigit()){
            alert('Password atleast containg 1 number(0-9)')
        }
    }
    
}