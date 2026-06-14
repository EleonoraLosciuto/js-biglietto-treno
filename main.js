// define variable to calculate ticket price

const dateCurrent = new Date
const yearCurrent = dateCurrent.getFullYear(); // funzione JS per ricavare anno corrente
const birthYear = parseInt(prompt("Inserisci il tuo anno di nascita"));
const age = yearCurrent - birthYear;
const km = parseFloat(prompt("Inserisci quanti km dovrai percorrere")); // parseFloat per decimali
const standardPrice = 0.21
alert("this web page is ugly but functions as it should!!");

// I check the variables in console
console.log(age);
console.log(km);

// If condition to calculate ticket price
// Defensive programming: I set extremes' conditions first
// I also show in html Ticket price and num. km

const inputInvalid = isNaN(km) || isNaN(age) || age > 100 || age < 0
let priceTicket;

if (inputInvalid) {console.error("invalid input!")}
else {
    priceTicket = standardPrice * km;

    if (age < 18) {
    priceTicket = priceTicket * 0.8;
}

else if (age > 65) {
    priceTicket = priceTicket * 0.6;
}
}

    document.getElementById('priceResult').innerHTML=`€ ${priceTicket.toFixed(2)}`;
    document.getElementById('num-km').innerHTML=("Km da percorrere " + km);




