//rileva campo nome
const fullName = document.querySelector(".name");
//rileva campo distanza da percorrere
const distanceKm = document.querySelector(".kilometer");
//rileva campo età viaggiatore
const ageCustomer = document.querySelector(".age");
//invia informazioni
const sendButton = document.querySelector(".generate-ticket");
//prezzo al km
let priceKm = 0.21;
//sconto 20% per i minorenni
let discountJunior = 0.8;
//sconto 40% per gli over 65
let discountSenior = 0.6;

//aggiorna valori quando il pulsante viene cliccato
sendButton.addEventListener("click", function() {
    //rileva nome inserito
    let nameValue = fullName.value;
    //rileva distanza inserita
    let distanceValue = distanceKm.value;
    //rileva fascia d'età scelta
    let ageValue = ageCustomer.value;
    //calcola prezzo base
    let ticketPrice = priceKm*distanceValue;
    //genera numero vagone randomico
    let wagonNumber = Math.floor(Math.random()*16 +1);
    //genera numero CP code randomico
    let cpNumber = Math.floor(Math.random()*100000 +1);
    
    //mostra bigleitto
    document.querySelector(".hide1").style.display = "block";
    document.querySelector(".hide2").style.display = "block";
    //inserisci nome viaggiatore
    document.querySelector(".name-var").innerHTML = nameValue;
    //inserisci età selezionata
    document.querySelector(".discount-var").innerHTML = ageValue;
    //inserisci numero vagone
    document.querySelector(".wagon-var").innerHTML = wagonNumber;
    //inserisci cp code
    document.querySelector(".cp-code-var").innerHTML = cpNumber;
    

    //calcola il prezzo del biglietto
    if (ageValue === "Minorenne") {
        let finalTicketPrice = Math.round(((ticketPrice*discountJunior) + Number.EPSILON)*100) /100;
        document.querySelector(".price-var").innerHTML = "€ " + finalTicketPrice;
    }
    else if (ageValue === "65+ anni") {
        let finalTicketPrice = Math.round(((ticketPrice*discountSenior) + Number.EPSILON)*100) /100;
        document.querySelector(".price-var").innerHTML = "€ " + finalTicketPrice;
    }
    else {
        let finalTicketPrice = Math.round((ticketPrice + Number.EPSILON)*100) /100;
        document.querySelector(".price-var").innerHTML = "€ " + finalTicketPrice;
    }
})