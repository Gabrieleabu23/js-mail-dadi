// const userMail= document.getElementById("mail_user");

const listMail=["bohdimmelotu@gmail.com","bohdimmelotu@yahoo.com","bohdimmelotu@libero.it"];
function controllo_mail(){
    const userMail= document.getElementById("mail_user").value;
    let find=0;
    for(let i=0; i <= listMail.length  ; i++){
       if (listMail[i] === userMail){
        find=1;
       }
    }
    if (find){
        document.getElementById("risultato_invito").innerHTML=("Sei sulla lista, Benvenuto/a!");
    }
    else{
        document.getElementById("risultato_invito").innerHTML="Non sei sulla lista, mi dispiace!";

    }
}

