
import config from "../conf/index.js";

async function init() {
  
  console.log("From init()");
  // Add this line to print the full API URL
  console.log(config.backendEndpoint + "/cities");
  // Fetches list of all cities along with their images and description
  let cities = await fetchCities(); console.log(cities)

  // Updates the DOM with the cities
  if (cities) {
    cities.forEach((key) => {
      addCityToDOM(key.id, key.city, key.description, key.image);
    });
  }

}

//Implementation of fetch call
async function fetchCities() {
  // TODO: MODULE_CITIES
  // 1. Fetch cities using the Backend API and return the data
  try {
    // 1. Fetch cities using the Backend API 
    const response = await fetch(config.backendEndpoint + "/cities");
    
    // 2. Extract the JSON data from the response
    const data = await response.json();
    
    // 3. Return the data (an array of city objects)
    return data;
  } catch (error) {
    // Return null if there's an error so the app doesn't crash
    console.log("Error fetching cities:", error);
    return null;
  }

}

//Implementation of DOM manipulation to add cities
function addCityToDOM(id, city, description, image) {
  // TODO: MODULE_CITIES
  // 1. Populate the City details and insert those details into the DOM

  // 1. Find the target row in the HTML
  let parentContainer = document.getElementById("data");

  // 2. Create the column div (This makes it responsive)
  let cityColumn = document.createElement("div");
  cityColumn.className = "col-6 col-lg-3 mb-4";

  // 3. Create the Inner HTML with the specific QTrip classes
  cityColumn.innerHTML = `
    <a href="pages/adventures/?city=${id}" id="${id}">
      <div class="tile">
        <img src="${image}" alt="${city}" class="img-fluid" />
        <div class="tile-text text-center">
          <h5>${city}</h5>
          <p>${description}</p>
        </div>
      </div>
    </a>
  `;

  // 4. Put the new card into the page
  parentContainer.appendChild(cityColumn);
}

export { init, fetchCities, addCityToDOM };
