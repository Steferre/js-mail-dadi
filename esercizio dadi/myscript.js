/*
Generare un numero random da 1 a 6, sia per il giocatore sia per il computer. Stabilire il vincitore, in base a chi fa il punteggio più alto.
*/

var myDice = parseInt(Math.random() * 6 + 1);
document.getElementById('message').innerHTML= "Ecco il tuo dado "
document.getElementById('result').innerHTML= myDice;
/*console.log("giocatore lancia il dado, " + "il giocatore ha fatto " + myDice);*/

var aiDice = parseInt(Math.random() * 6 + 1);
document.getElementById('aiMes').innerHTML= "Ecco il dado del tuo computer "
document.getElementById('aiResult').innerHTML= aiDice;
//console.log("computer lancia il dado, " + "il computer ha fatto " + aiDice);

if (myDice > aiDice) {
    document.getElementById('finalResult').innerHTML= "Complimenti, HAI VINTO!"

} else if (myDice < aiDice) {
    document.getElementById('finalResult').innerHTML= "Peccato, HAI PERSO! Ritenta"

} else if (myDice === aiDice) {
    document.getElementById('finalResult').innerHTML= "PAREGGIO!"

}