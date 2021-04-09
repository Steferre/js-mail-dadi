/*
Chiedi all’utente la sua email, controlla che sia nella lista di chi può accedere, stampa un messaggio appropriato sull’esito del controllo.
*/


var realUsersMail = ["ferrera.ste@yahoo.it", "ferre@libero.it", "stefano@mail.com", "pinco.pallino@mail.com"];
console.log(realUsersMail);

var UserMail = prompt("Per favore, inserire la propria mail?");
//console.log(newUserMail);

var controlKey = false; 

if (UserMail === "" || UserMail.length < 8) {
    alert('inserire una mail valida, o con almeno 8 caratteri');
} else {
    for (var i = 0; i < realUsersMail.length; i++) {
        var registeredUser = realUsersMail[i];
    
        if (registeredUser === UserMail) {
            controlKey = true;
            console.log("Benvenuto");  
    
        } 
    }    
}

if (!controlKey) {
    console.log("siamo spiacenti ma lei non è ancora registrato!");
    var newUserRegistration = prompt("Per favore, Inserisca la propria mail, per effettuare la registrazione.")

    realUsersMail.push(newUserRegistration);
    console.log(realUsersMail);
}
