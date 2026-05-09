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
// I always check price per km in console
// I also show in html price per km and tot. km, as well as ticket price

let priceTicket = standardPrice * km;
if (age < 18) {
    priceTicket = priceTicket * 0.8;
}
else if (age > 65) {
    priceTicket = priceTicket * 0.6;
}

    document.getElementById('priceResult').innerHTML=`€ ${priceTicket.toFixed(2)}`;
    document.getElementById('num-km').innerHTML=("Km da percorrere " + km);




