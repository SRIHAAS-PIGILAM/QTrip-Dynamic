import config from "../conf/index.js";

//Implementation of fetch call to fetch all reservations
async function fetchReservations() {
  // TODO: MODULE_RESERVATIONS
  // 1. Fetch Reservations by invoking the REST API and return them
  try {
    // 1. Fetch Reservations by invoking the REST API
    const response = await fetch(`${config.backendEndpoint}/reservations/`);
    
    // 2. Extract the JSON data from the response
    const data = await response.json();
    
    // 3. Return the reservations array
    return data;
  } catch (error) {
    // 4. Return null if there is a network or server error
    console.error("Error fetching reservations:", error);
    return null;
  }
}

//Function to add reservations to the table. Also; in case of no reservations, display the no-reservation-banner, else hide it.
function addReservationToTable(reservations) {
  // TODO: MODULE_RESERVATIONS
  // 1. Add the Reservations to the HTML DOM so that they show up in the table

  //Conditionally render the no-reservation-banner and reservation-table-parent

  /*
    Iterating over reservations, adding it to table (into div with class "reservation-table") and link it correctly to respective adventure
    The last column of the table should have a "Visit Adventure" button with id=<reservation-id>, class=reservation-visit-button and should link to respective adventure page

    Note:
    1. The date of adventure booking should appear in the format D/MM/YYYY (en-IN format) Example:  4/11/2020 denotes 4th November, 2020
    2. The booking time should appear in a format like 4 November 2020, 9:32:31 pm
  */
  
    const noReservationBanner = document.getElementById("no-reservation-banner");
  const tableParent = document.getElementById("reservation-table-parent");
  const tableBody = document.getElementById("reservation-table");

  if (reservations && reservations.length > 0) {
    noReservationBanner.style.display = "none";
    tableParent.style.display = "block";
  } else {
    noReservationBanner.style.display = "block";
    tableParent.style.display = "none";
    return;
  }

  tableBody.innerHTML = "";

  reservations.forEach((key) => {
    const row = document.createElement("tr");

    // 1. Format the 'Date' field (D/MM/YYYY)
    const date = new Date(key.date).toLocaleDateString("en-IN");

    // 2. Format the 'Booking Time' field precisely to match the test expectation
    // We split it into two parts: Date part and Time part
    const bookingDate = new Date(key.time).toLocaleDateString("en-IN", {
      day: "numeric",
      month: "long",
      year: "numeric",
    });
    
    const bookingTime = new Date(key.time).toLocaleTimeString("en-IN");

    // Combine them with a comma and a space: "Date, Time"
    const finalBookingTime = `${bookingDate}, ${bookingTime}`;

    row.innerHTML = `
      <th scope="col"><b>${key.id}</b></th>
      <td>${key.name}</td>
      <td>${key.adventureName}</td>
      <td>${key.person}</td>
      <td>${date}</td>
      <td>${key.price}</td>
      <td>${finalBookingTime}</td>
      <td>
        <div class="reservation-visit-button" id="${key.id}">
          <a href="../detail/?adventure=${key.adventure}">Visit Adventure</a>
        </div>
      </td>
    `;

    tableBody.appendChild(row);
  });

}

export { fetchReservations, addReservationToTable };
