
var url = `https://economia.awesomeapi.com.br/last/USD-BRL`;

var valueSale = "";

fetch(url)
    .then((res) => {
        return res.json();
    })
    .then((data) => {
        var valuePurchase = data.USDBRL.bid;
        valueSale = data.USDBRL.ask;

        let inputBRL = document.getElementById("brl");
        inputBRL.value = valueSale;

    })



function usdToBrl() {
    let usd = document.getElementById("usd");
    let brl = document.getElementById("brl");

    valueUsd = usd.value;
    valueUsd = valueUsd.toString().replace(".", "");
    valueUsd = valueUsd.toString().replace(",", ".");

    let resultado = valueUsd * valueSale;

    brl.value = resultado;
}

function brlToUsd() {
    let usd = document.getElementById("usd");
    let brl = document.getElementById("brl");

    valueBrl = brl.value;
    valueBrl = valueBrl.toString().replace(".", "");
    valueBrl = valueBrl.toString().replace(",", ".");


    let resultado = valueBrl / valueSale;

    usd.value = resultado;

}