// define variable to calculate ticket price

const yearCurrent = 2026;
const birthYear = parseInt(prompt("Inserisci il tuo anno di nascita"));
const age = yearCurrent - birthYear;
const km = parseInt(prompt("Inserisci quanti km dovrai percorrere"));
const standardPrice = 0.21
alert("this web page is ugly but functions as it should!!");

// I check the variables in console
console.log(age);
console.log(km);

// If condition to calculate ticket price
// Defensive programming: I set extremes' conditions first
// I always check price per km in console


if (age < 18) {
    let priceKm = standardPrice * 0.8;
    let priceTicket = (priceKm * km).toFixed(2);
    document.getElementById('prezzo-km').innerHTML=("Prezzo per chilometro"+" €"+ priceKm.toFixed(3));
    document.getElementById('priceResult').innerHTML=`€ ${priceTicket}`;
    console.log("€" + priceKm + " / km");
}
else if (age > 65) {
    let priceKm = standardPrice * 0.6;
    let priceTicket = (priceKm * km).toFixed(2);
    document.getElementById('prezzo-km').innerHTML=("Prezzo per chilometro"+" €"+ priceKm.toFixed(3));
    document.getElementById('priceResult').innerHTML=`€ ${priceTicket}`
    console.log("€" + priceKm + " / km");
}
else {
    let priceKm = standardPrice;
    let priceTicket = (priceKm * km).toFixed(2);
    document.getElementById('prezzo-km').innerHTML=("Prezzo per chilometro"+" €"+priceKm.toFixed(2));
    document.getElementById('priceResult').innerHTML=`€ ${priceTicket}`
    console.log("€" + priceKm + " / km");
}

document.getElementById('num-km').innerHTML=("Km da percorrere " + km);




