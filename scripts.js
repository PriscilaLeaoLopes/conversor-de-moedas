const convertButton = document.querySelector(".convert-button")
const currencySelect = document.querySelector(".currency-select")

function convertValues(){
    const inputCurrencyValue = document.querySelector(".input-currency").value
    const moedaValorToConvert = document.querySelector(".moeda-valor-to-convert")
    const moedaValorConvert = document.querySelector(".moeda-valor")

    const dolarToday = 4.9
    const euroToday = 5.3


if(currencySelect.value == "dolar"){
    moedaValorConvert.innerHTML = new Intl.NumberFormat("en-US",{
        style: "currency",
        currency:"USD"

    }).format(inputCurrencyValue / dolarToday)

}

if(currencySelect.value == "euro"){
    moedaValorConvert.innerHTML = new Intl.NumberFormat("de-DE",{
        style:"currency",
        currency: "EUR"
    }).format(inputCurrencyValue / euroToday)
}
 
    moedaValorToConvert.innerHTML =  new Intl.NumberFormat("pt-br",{
        style: "currency",
        currency: "BRL"

    }).format(inputCurrencyValue)

   
}

function changeCurrency(){
    const currencyName = document.getElementById("currency-name")
    const currencyImagem = document.querySelector(".currency-img")

    if (currencySelect.value == "dolar"){
        currencyName.innerHTML = "Dolar americano"
        currencyImagem.src = "./assets/estados-unidos (1) 1.png"
    }

    if (currencySelect.value == "euro"){
        currencyName.innerHTML = "Euro"
        currencyImagem.src = "./assets/euro.png"
    }

     g
}
 

currencySelect.addEventListener("change", changeCurrency)
convertButton.addEventListener("click", convertValues)