let score;
let i=0;
function invio(){
    document.getElementById("risultato-user").innerHTML=" ";
    document.getElementById("risultato-pc").innerHTML=" ";
    let userchoice= Math.floor(Math.random() * 6 + 1 );
    let pcChoise= Math.floor(Math.random() * 6 + 1 );
    document.getElementById("risultato-user").append(`${"Utente: "} ${userchoice}`);
    document.getElementById("risultato-pc").append(`${"Computer: "} ${pcChoise}`);
    if(userchoice > pcChoise){
        document.getElementById("risultato").innerHTML= "Hai Vinto!";
        score="Hai Vinto!";
    } else if (userchoice === pcChoise){
        document.getElementById("risultato").innerHTML="Pari!";
        score="Pari!";
    }
    else{
        document.getElementById("risultato").innerHTML= "Hai Perso!";
        score="Hai Perso!";
    }
    const history= document.createElement("div");
    i+=1;
    history.append(`${i}${"° Partita"} ${"(Utente: "} ${userchoice} ${score} ${"Computer: "} ${pcChoise}${")"}`);
    document.querySelector(".cronologia").append(history);
}
