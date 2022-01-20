//chiedo all'utente quanti chilometro deve percorrere

    let distance = prompt("Quanti chilometri deve percorrere?")

    //controllo la validità dell'input

    if(isNaN(distance)) {
        alert("Il valore inserito non è valido, riprovare");
    } else {
        alert(`Il viaggio di ${distance} km è stato impostato`);
    }

//Chiedo all'utente di inserire la sua età

    let age = prompt("Quanti anni ha?");

    //controllo la validità dell'input 

    if(isNaN(age)) {
        alert("Il valore inserito non è corretto, riprovare");
    } else {
        alert(`Confermata età di ${age} anni`);
    }

//conoscendo età e distanza, posso calcolare il prezzo del biglietto

    const ticket_price_for_km = 0.21;
    let ticket_price = ticket_price_for_km * distance;
    
    //visualizzo il prezzo e dati del viaggio sulla pagina


    document.getElementById("info-trip").innerHTML = `Il suo viaggio è di ${distance} km e la sua età è di ${age} anni`;
    document.getElementById("full-price").innerHTML = `Il prezzo pieno del biglietto è di ${ticket_price} euro`;

//applico gli sconti in base all'età

    let discount20_price =  ticket_price - ((ticket_price * 20) / 100);
    let discount40_price = ticket_price - ((ticket_price * 40) / 100);
    discount20_price = discount20_price.toFixed(2);
    discount40_price = discount40_price.toFixed(2);

    if (age < 18) {
        document.getElementById("final-price").innerHTML = `Sicchè ha meno di 18 anni, la tariffa agevolata del suo biglietto sarà di ${discount20_price} euro! Grazie e buona giornata!`;
    }  else if (age > 65) {
        document.getElementById("final-price").innerHTML = `Sicchè ha più di 65 anni, la tariffa agevolata del suo biglietto sarà di ${discount40_price} euro! Grazie e buona giornata!`;
    }   else {
        document.getElementById("final-price").innerHTML = `Purtroppo lei non rientra nelle fasce d'età agevolate, il prezzo del suo biglietto è di ${ticket_price} euro! Grazie e buona giornata`;
    }


