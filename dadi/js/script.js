
function invio(){
    let userchoice= Math.floor(Math.random()*6 + 1 );
    let pcChoise= Math.floor(Math.random()*6 + 1 );

    if(userchoice > pcChoise){
        document.getElementById("risultato").innerHTML= `${userchoice} ${"hai vinto"} ${pcChoise}`;
    } else if (userchoice === pcChoise){
        document.getElementById("risultato").innerHTML="pareggio!";
        document.getElementById("risultato").innerHTML= `${userchoice} ${"pareggio"} ${pcChoise}`;
    }
    else{
        document.getElementById("risultato").innerHTML= `${userchoice} ${"hai perso"} ${pcChoise}`;
    }
}
