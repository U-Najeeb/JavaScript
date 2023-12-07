"use strict";

const btn = document.querySelector(".btn-country");
const countriesContainer = document.querySelector(".countries");

///////////////////////////////////////
const renderCountry = function (response, className = "") {
  const html = `
  <article class="country ${className}">
    <img class="country__img" src="${response.flags.png}" />
    <div class="country__data">
      <h3 class="country__name">${response.name.common}</h3>
      <h4 class="country__region">${response.region}</h4>
      <p class="country__row"><span>👫</span>${(
        response.population / 1000000
      ).toFixed(1)}</p>
      <p class="country__row"><span>🗣️</span>${
        Object.values(response.languages)[0]
      }</p>
      <p class="country__row"><span>💰</span>${
        Object.values(response.currencies)[0].name
      }</p>
    </div>
  </article>`;
  countriesContainer.insertAdjacentHTML("beforeend", html);
  countriesContainer.style.opacity = 1;
};

const getCountryAndNeighbour = function (country) {
  const request = new XMLHttpRequest();
  request.open("GET", `https://restcountries.com/v3.1/name/${country}`);
  request.send();

  request.addEventListener("load", function () {
    const [response] = JSON.parse(this.response);

    renderCountry(response);
    const neighbour = response.borders?.[0];
    const request2 = new XMLHttpRequest();
    request2.open(
      "GET",
      `
    https://restcountries.com/v3.1/alpha/${neighbour}`
    );
    request2.send();

    request2.addEventListener("load", function () {
      const [reponse2] = JSON.parse(this.response);
      renderCountry(reponse2, "neighbour");
    });
  });
};

const search = prompt("Search for a country?")
getCountryAndNeighbour(search);


const request = fetch(`https://restcountries.com/v3.1/name/portugal`)
console.log(request)
