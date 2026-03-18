import config from "../conf/index.js";

//Implementation to extract adventure ID from query params
function getAdventureIdFromURL(search) {
  // TODO: MODULE_ADVENTURE_DETAILS
  // 1. Get the Adventure Id from the URL
  // 1. Create a URLSearchParams object using the 'search' string
  const urlParams = new URLSearchParams(search);

  // 2. Extract the value of the "adventure" key
  const adventureId = urlParams.get("adventure");

  // 3. Return the extracted adventure ID
  return adventureId;
}
//Implementation of fetch call with a paramterized input based on adventure ID
async function fetchAdventureDetails(adventureId) {
  // TODO: MODULE_ADVENTURE_DETAILS
  // 1. Fetch the details of the adventure by making an API call
  try {
    // 1. Fetch the details using the backendEndpoint and the specific ID
    const response = await fetch(
      `${config.backendEndpoint}/adventures/detail?adventure=${adventureId}`
    );
    
    // 2. Extract the JSON data from the response
    const data = await response.json();
    
    // 3. Return the data object
    return data;
  } catch (e) {
    // 4. Return null if something goes wrong (like a network error)
    return null;
  }
}

//Implementation of DOM manipulation to add adventure details to DOM
function addAdventureDetailsToDOM(adventure) {
  // TODO: MODULE_ADVENTURE_DETAILS
  // 1. Add the details of the adventure to the HTML DOM
  // 1. Populate the name, subtitle, and content using their IDs
  document.getElementById("adventure-name").innerHTML = adventure.name;
  document.getElementById("adventure-subtitle").innerHTML = adventure.subtitle;
  document.getElementById("adventure-content").innerHTML = adventure.content;

  // 2. Clear the photo-gallery before adding new images (good practice)
  const gallery = document.getElementById("photo-gallery");
  gallery.innerHTML = "";

  // 3. Loop through the images array and create a div for each
  adventure.images.forEach((imageUrl) => {
    // Create a new div element
    const imgDiv = document.createElement("div");
    
    // Set the innerHTML to an <img> tag with the required class
    imgDiv.innerHTML = `
      <img 
        src="${imageUrl}" 
        alt="${adventure.name}" 
        class="activity-card-image" 
      />
    `;
    
    // Append the div to the gallery container
    gallery.appendChild(imgDiv);
  });
}

//Implementation of bootstrap gallery component
function addBootstrapPhotoGallery(images) {
  // TODO: MODULE_ADVENTURE_DETAILS
  // 1. Add the bootstrap carousel to show the Adventure images
  // 1. Target the photo-gallery element
  const gallery = document.getElementById("photo-gallery");

  // 2. Set the innerHTML to the basic Bootstrap Carousel structure
  gallery.innerHTML = `
    <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
      <div class="carousel-indicators" id="carousel-indicators"></div>
      <div class="carousel-inner" id="carousel-inner"></div>
      <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
  `;

  const carouselInner = document.getElementById("carousel-inner");
  const carouselIndicators = document.getElementById("carousel-indicators");

  // 3. Loop through images to create the carousel items and indicators
  images.forEach((imageUrl, index) => {
    // Create Carousel Item
    const carouselItem = document.createElement("div");
    // Only the first item should have the 'active' class
    carouselItem.className = `carousel-item ${index === 0 ? "active" : ""}`;
    carouselItem.innerHTML = `
      <img src="${imageUrl}" class="d-block w-100 activity-card-image" alt="Adventure Image">
    `;
    carouselInner.appendChild(carouselItem);

    // Create Indicator Button
    const indicator = document.createElement("button");
    indicator.setAttribute("type", "button");
    indicator.setAttribute("data-bs-target", "#carouselExampleIndicators");
    indicator.setAttribute("data-bs-slide-to", index);
    if (index === 0) {
      indicator.className = "active";
      indicator.setAttribute("aria-current", "true");
    }
    indicator.setAttribute("aria-label", `Slide ${index + 1}`);
    carouselIndicators.appendChild(indicator);
  });
}

//Implementation of conditional rendering of DOM based on availability
function conditionalRenderingOfReservationPanel(adventure) {
  // TODO: MODULE_RESERVATIONS
  // 1. If the adventure is already reserved, display the sold-out message.

}

//Implementation of reservation cost calculation based on persons
function calculateReservationCostAndUpdateDOM(adventure, persons) {
  // TODO: MODULE_RESERVATIONS
  // 1. Calculate the cost based on number of persons and update the reservation-cost field

}

//Implementation of reservation form submission
function captureFormSubmit(adventure) {
  // TODO: MODULE_RESERVATIONS
  // 1. Capture the query details and make a POST API call using fetch() to make the reservation
  // 2. If the reservation is successful, show an alert with "Success!" and refresh the page. If the reservation fails, just show an alert with "Failed!".
}

//Implementation of success banner after reservation
function showBannerIfAlreadyReserved(adventure) {
  // TODO: MODULE_RESERVATIONS
  // 1. If user has already reserved this adventure, show the reserved-banner, else don't

}

export {
  getAdventureIdFromURL,
  fetchAdventureDetails,
  addAdventureDetailsToDOM,
  addBootstrapPhotoGallery,
  conditionalRenderingOfReservationPanel,
  captureFormSubmit,
  calculateReservationCostAndUpdateDOM,
  showBannerIfAlreadyReserved,
};
