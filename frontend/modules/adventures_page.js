
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
  // 1. Filter the list based on the duration range
    const filteredList = list.filter((adventure) => 
      adventure.duration >= low && adventure.duration <= high
    );

    // 2. Return the filtered array
    return filteredList;
}

//Implementation of filtering by category which takes in a list of adventures, list of categories to be filtered upon and returns a filtered list of adventures.
function filterByCategory(list, categoryList) {
  // TODO: MODULE_FILTERS
  // 1. Filter adventures based on their Category and return filtered list
  // 1. If the user hasn't picked any categories, return the whole list
  if (!categoryList || categoryList.length === 0) {
    return list;
  }

  // 2. Use the .filter() method to create a new array
  // We check if the 'category' of the adventure is present in our 'categoryList' array
  const filteredList = list.filter((adventure) => 
    categoryList.includes(adventure.category)
  );

  return filteredList;
}

// filters object looks like this filters = { duration: "", category: [] };

//Implementation of combined filter function that covers the following cases :
// 1. Filter by duration only
// 2. Filter by category only
// 3. Filter by duration and category together

function filterFunction(list, filters) {
  // TODO: MODULE_FILTERS
  let filteredList = list;

  // 1. Handle Category Filter (if any are selected)
  if (filters.category && filters.category.length > 0) {
    filteredList = filterByCategory(filteredList, filters.category);
  }

  // 2. Handle Duration Filter (if a range is selected)
  if (filters.duration && filters.duration !== "") {
    // Split the string "2-6" into an array ["2", "6"]
    const [low, high] = filters.duration.split("-");
    
    // Pass the list through the duration filter using the split numbers
    filteredList = filterByDuration(
      filteredList, 
      parseInt(low), 
      parseInt(high)
    );
  }

  // 3. Return the final list that satisfies all active filters
  return filteredList;
}

//Implementation of localStorage API to save filters to local storage. This should get called everytime an onChange() happens in either of filter dropdowns
function saveFiltersToLocalStorage(filters) {
  // TODO: MODULE_FILTERS
  // 1. Store the filters as a String to localStorage
  // Save the filters object as a string in the browser's memory
  // 1. Pack the object into a string and save it
      localStorage.setItem("filters", JSON.stringify(filters));
      return true;
    }



//Implementation of localStorage API to get filters from local storage. This should get called whenever the DOM is loaded.
function getFiltersFromLocalStorage() {
  // TODO: MODULE_FILTERS
  // 1. Get the filters from localStorage and return String read as an object
  // Retrieve the string and turn it back into an object
  return JSON.parse(localStorage.getItem("filters"));
}

//Implementation of DOM manipulation to add the following filters to DOM :
// 1. Update duration filter with correct value
// 2. Update the category pills on the DOM

function generateFilterPillsAndUpdateDOM(filters) {
  // TODO: MODULE_FILTERS
  // 1. Use the filters given as input, update the Duration Filter value and Generate Category Pills
  // 1. Find the parent element where pills should go

  // --- NEW: Update the Duration Dropdown value ---
  if (filters.duration) {
    document.getElementById("duration-select").value = filters.duration;
  }

  const parent = document.getElementById("category-list");
  
  // 2. Clear out any old pills before adding new ones
  parent.innerHTML = "";

  // 3. Iterate through each category selected in the filters object
  filters.category.forEach((categoryName) => {
    // 4. Create a new div for the pill
    const pill = document.createElement("div");
    
    // 5. Add the required CSS class for styling
    pill.className = "category-filter";
    
    // 6. Set the text to the name of the category
    pill.innerText = categoryName;

    // 7. Add the pill to the DOM
    parent.appendChild(pill);
  });
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
