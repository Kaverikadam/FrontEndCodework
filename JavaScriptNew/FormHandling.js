function handleSubmit(){
    let form=document.getElementById('myform');
    let data=new FormData(form);
    let name=data.get('name');
    let email=data.get('email');
    let password=data.get('password');
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;

    let nameLen=name.length;
    if(name!=''){

        if(nameLen<5 || nameLen>12){
            alert('Name in the range of 5 to 12 charecters only');
        }
        if(!/[A-Z]/.test(name) || !/[a-z]/.test(name)){
            alert('Name shouls contains uppercase and lowercase latters')
        }        
    }
    else alert('Enter name!');

    
    if(email!=''){
        if(emailPattern.test(email)){
            alert('Ivalid Email')
        }
    }

    let pasLen=password.length;
    if(password!=''){

        if(pasLen<5 || pasLen>12){
            alert('Password in the range of 5 to 12 charecters only');
        }
        if(!/[A-Z]/.test(password) || !/[a-z]/.test(password) || !/[0-9]/.test(password)){
            alert('Password shouls contains uppercase and lowercase latters and Number')
        }    
    }
    else alert('Enter password');

    

    alert("Name: " +name+" Email: "+email+" Password: "+password);

    

}