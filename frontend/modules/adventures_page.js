
import config from "../conf/index.js";

//Implementation to extract city from query params
function getCityFromURL(search) {
  // TODO: MODULE_ADVENTURES
  // 1. Extract the city id from the URL's Query Param and return it
  // 1. Create a URLSearchParams object using the 'search' string (e.g., "?city=bengaluru")
  const params = new URLSearchParams(search);

  // 2. Extract the value associated with the 'city' key
  const cityId = params.get("city");

  // 3. Return the extracted city ID (e.g., "bengaluru")
  return cityId;
}

//Implementation of fetch call with a paramterized input based on city
async function fetchAdventures(city) {
  // TODO: MODULE_ADVENTURES
  // 1. Fetch adventures using the Backend API and return the data
  try {
    // 1. Make the API call using the city parameter from the URL
    const response = await fetch(
      `${config.backendEndpoint}/adventures?city=${city}`
    );
    
    // 2. Convert the response to JSON
    const adventures = await response.json();
    
    // 3. Return the array of adventures
    return adventures;
  } catch (error) {
    // 4. Handle exceptions (Server down, network issues, etc.)
    console.error("Could not fetch adventures:", error);
    return null;
  }
}

//Implementation of DOM manipulation to add adventures for the given city from list of adventures
function addAdventureToDOM(adventures) {
  // TODO: MODULE_ADVENTURES
  // 1. Populate the Adventure Cards and insert those details into the DOM
  const parentElement = document.getElementById("data");
  parentElement.innerHTML = "";

  adventures.forEach((adventure) => {
    const columnDiv = document.createElement("div");
    columnDiv.className = "col-6 col-lg-3 mb-4";

    // The key is ensuring id="${adventure.id}" is on the <a> tag
    columnDiv.innerHTML = `
      <a href="detail/?adventure=${adventure.id}" id="${adventure.id}">
        <div class="activity-card">
          <div class="category-banner">${adventure.category}</div>
          <img src="${adventure.image}" class="activity-card img" alt="${adventure.name}" />
          <div class="p-3 w-100">
            <div class="d-md-flex justify-content-between">
              <h5 class="card-title">${adventure.name}</h5>
              <p class="card-text">₹${adventure.costPerHead}</p>
            </div>
            <div class="d-md-flex justify-content-between">
              <h5 class="card-title">Duration</h5>
              <p class="card-text">${adventure.duration} Hours</p>
            </div>
          </div>
        </div>
      </a>
    `;

    parentElement.appendChild(columnDiv);
  });

}



//Implementation of filtering by duration which takes in a list of adventures, the lower bound and upper bound of duration and returns a filtered list of adventures.
function filterByDuration(list, low, high) {
  // TODO: MODULE_FILTERS
  // 1. Filter adventures based on Duration and return filtered list

}

//Implementation of filtering by category which takes in a list of adventures, list of categories to be filtered upon and returns a filtered list of adventures.
function filterByCategory(list, categoryList) {
  // TODO: MODULE_FILTERS
  // 1. Filter adventures based on their Category and return filtered list

}

// filters object looks like this filters = { duration: "", category: [] };

//Implementation of combined filter function that covers the following cases :
// 1. Filter by duration only
// 2. Filter by category only
// 3. Filter by duration and category together

function filterFunction(list, filters) {
  // TODO: MODULE_FILTERS
  // 1. Handle the 3 cases detailed in the comments above and return the filtered list of adventures
  // 2. Depending on which filters are needed, invoke the filterByDuration() and/or filterByCategory() methods


  // Place holder for functionality to work in the Stubs
  return list;
}

//Implementation of localStorage API to save filters to local storage. This should get called everytime an onChange() happens in either of filter dropdowns
function saveFiltersToLocalStorage(filters) {
  // TODO: MODULE_FILTERS
  // 1. Store the filters as a String to localStorage

  return true;
}

//Implementation of localStorage API to get filters from local storage. This should get called whenever the DOM is loaded.
function getFiltersFromLocalStorage() {
  // TODO: MODULE_FILTERS
  // 1. Get the filters from localStorage and return String read as an object


  // Place holder for functionality to work in the Stubs
  return null;
}

//Implementation of DOM manipulation to add the following filters to DOM :
// 1. Update duration filter with correct value
// 2. Update the category pills on the DOM

function generateFilterPillsAndUpdateDOM(filters) {
  // TODO: MODULE_FILTERS
  // 1. Use the filters given as input, update the Duration Filter value and Generate Category Pills

}
export {
  getCityFromURL,
  fetchAdventures,
  addAdventureToDOM,
  filterByDuration,
  filterByCategory,
  filterFunction,
  saveFiltersToLocalStorage,
  getFiltersFromLocalStorage,
  generateFilterPillsAndUpdateDOM,
};
