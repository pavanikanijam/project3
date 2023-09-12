// Fetch country data from the API
fetch("https://restcountries.com/v3.1/all")
  .then((response) => response.json())
  .then((data) => {
    // Get the country container element
    const countryContainer = document.querySelector(".country-container");
    // Create a new element for each country
    data.forEach((country) => {
      const countryElement = document.createElement("div");
      countryElement.classList.add("country");
      // Add the country name to the element
      const countryName = document.createElement("h2");
      countryName.textContent = country.name.common;
      countryElement.appendChild(countryName);
      // Add the country flag to the element
      const countryFlag = document.createElement("img");
      countryFlag.src = country.flags.png;
      countryElement.appendChild(countryFlag);
      // Add the country capital to the element
      const countryCapital = document.createElement("p");
      countryCapital.textContent = `Capital: ${country.capital}`;
      countryElement.appendChild(countryCapital);
      // Add the country population to the element
      const countryPopulation = document.createElement("p");
      countryPopulation.textContent = `Population: ${country.population}`;
      countryElement.appendChild(countryPopulation);
      // Add the country element to the country container
      countryContainer.appendChild(countryElement);
    });
  });
