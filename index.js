import countries from './country-list.js';
const country = document.getElementById('country');
const countryList = document.getElementById('country-list');
const priceContainer = document.getElementById('price-container');
const currency = document.getElementById('currency');
const priceP = document.createElement("p");

const getPrice = async () => {
    let response = await fetch("./data.json");
    let data = await response.json();
    return data;
}

getPrice().then(data => {
    const parsedData = JSON.parse(data);
    country.addEventListener("change", (e) => {
        const value = e.target.value
        const price = parsedData[value]["price"];
        const currencyValue = country.dataset.currency

        priceContainer.innerHTML = `<h2 class='title'>Avaliable SMS Price in ${countries[value]}</h2>`
        priceP.innerText = `${currencyValue}: ${price[currencyValue]}`;
        priceContainer.appendChild(priceP)
    })
})



Object.keys(countries).forEach(key => {
    const option = document.createElement('option');
    option.setAttribute('value', key);
    option.innerText = countries[key];
    countryList.appendChild(option);
});

