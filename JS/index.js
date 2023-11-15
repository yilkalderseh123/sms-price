import data from '../data.json' assert { type: 'json' };
import countries from '../country-list.js';

const parsedData = JSON.parse(data);
const country = document.getElementById('country');
const countryList = document.getElementById('country-list');
const priceContainer = document.getElementById('price-container');
const currency = document.getElementById('currency');

const priceP = document.createElement("p")

country.addEventListener("change", (e) => {
    const value = e.target.value
    const price = parsedData[value]["price"];
    const currencyValue = country.dataset.currency

    priceContainer.innerHTML = `<h2 class='title'>Avaliable SMS Price in ${countries[value]}</h2>`
    priceP.innerText = `${currencyValue}: ${price[currencyValue]}`;
    priceContainer.appendChild(priceP)
})

Object.keys(countries).forEach(key => {
    const option = document.createElement('option');
    option.setAttribute('value', key);
    option.innerText = countries[key];
    countryList.appendChild(option);
});
