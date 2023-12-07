"use strict";

const btn = document.querySelector(".btn-country");
const countriesContainer = document.querySelector(".countries");

///////////////////////////////////////
const renderError = (msg) => {
  countriesContainer.insertAdjacentText("beforeend", msg);
  countriesContainer.style.opacity = 1;
};
const renderCountry = function (response, className = "") {
  const html = `
  <article class="country ${className}">
    <img class="country__img" src="${response.flags.png}" />
    <div class="country__data">
      <h3 class="country__name">${response.name.common}</h3>
      <h4 class="country__region">${response.region}</h4>
      <p class="country__row"><span>👫</span>${(
        response.population / 1000000
      ).toFixed(1)} poeple</p>
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

const getJSON = (url, errorMsg = "Something went wrong") => {
  return fetch(url).then((response) => {
    if (!response.ok) throw new Error(`${errorMsg}(${response.status})`);
    return response.json();
  });
};
const getCountryData = async function (country) {


  return getJSON(`https://restcountries.com/v3.1/name/${country}`, "Country Not Found")
    .then((data) => {
      renderCountry(data[0]);
      const neighbour = data[0]?.borders[0];
      return getJSON(
        ` https://restcountries.com/v3.1/alpha/${neighbour}`,
        "Country Not Found"
      ).then((data) => {
        return renderCountry(data[0], "neighbour");
      });
    })
    .catch((err) => renderError(err.message));
};

btn.addEventListener("click", () => {
  getCountryData("usa");
});
