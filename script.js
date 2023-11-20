function home(){

    var name = document.getElementById('name').value;
    var password = document.getElementById('password').value;

    if(name == "Pawani" && password =="Pawani%$#10"){
        alert('Login Successful');
        window.location.href='home.html';
    }else if(name == "NSPJ" && password =="NSPJ%$#10") {
        alert('Login Successful...');
        window.location.href='home2.html';

    }else{
        alert('Login Failed');

    }

    
    // alert("Log");
    //   window.location.href='home.html';
}