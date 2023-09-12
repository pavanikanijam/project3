
fetch("https://restcountries.com/v3.1/all")
  .then((response) => response.json())
  .then((data) => {
    const countryContainer = document.querySelector(".country-container");
    data.forEach((country) => {
      const countryElement = document.createElement("div");
      countryElement.classList.add("country");
      const countryName = document.createElement("h2");
      countryName.textContent = country.name.common;
      countryElement.appendChild(countryName);
      const countryFlag = document.createElement("img");
      countryFlag.src = country.flags.png;
      countryElement.appendChild(countryFlag);
      const countryCapital = document.createElement("p");
      countryCapital.textContent = `Capital: ${country.capital}`;
      countryElement.appendChild(countryCapital);
      const countryPopulation = document.createElement("p");
      countryPopulation.textContent = `Population: ${country.population}`;
      countryElement.appendChild(countryPopulation);
      // Add the country element to the country container
      countryContainer.appendChild(countryElement);
    });
  });
