
# QTrip Dynamic 🌍✈️

QTrip is a high-performance travel and adventure booking platform designed for travelers seeking diverse experiences across various cities. This project transitions from a static layout to a fully dynamic web application powered by REST APIs and persistent client-side logic.

🚀 **Live Demo:** [https://q-trip-dynamic-kappa.vercel.app/](https://q-trip-dynamic-kappa.vercel.app/)  
🎓 **Crio Portfolio:** [https://www.crio.do/learn/portfolio/srihaas-pigilam/](https://www.crio.do/learn/portfolio/srihaas-pigilam/)

---

## ✨ Core Features

- **Dynamic Landing Page:** Real-time retrieval of city data from backend REST APIs to populate the landing grid.
- **Advanced Filtering System:** Implemented complex multi-select and single-select filters (Category & Duration) with real-time DOM updates.
- **State Persistence:** Utilized `localStorage` to ensure user filter preferences are maintained even after page refreshes.
- **Reservation Engine:** Functional booking system using `fetch()` API to send POST requests to the backend for real-time reservations.
- **Conditional Rendering:** Dynamically updates UI elements, such as "Sold Out" panels, based on live API availability data.
- **Sleek Media Handling:** Integrated responsive Bootstrap carousels for high-quality adventure image galleries.

---

## 🛠️ Tech Stack

- **Frontend:** HTML5, CSS3, JavaScript (ES6+), Bootstrap 5
- **Backend/API:** REST APIs, JSON data handling, cURL
- **Deployment:** Vercel (Frontend), Heroku/Render (Backend)
- **Concepts:** DOM Manipulation, Event Handling, LocalStorage, Conditional Rendering, Asynchronous JS

---

## 🧩 Technical Milestones

### 1. Dynamic Adventure Discovery
Extracted city-specific data using URL query parameters to fetch relevant adventures from the backend. This involved mapping complex JSON responses to responsive Bootstrap layouts.

### 2. Multi-Select Filtering Logic
Developed a robust filtering algorithm that allows users to narrow down adventures by both category and duration simultaneously, ensuring a seamless UX.

### 3. Booking & Persistence
Built a reservation form that communicates with the server via the `Fetch API`. To improve the "Vibe" and user journey, I implemented `localStorage` to track user interaction across sessions.

---

## 🚀 Getting Started

1. **Clone the Repo:**
   ```bash
   git clone [https://github.com/SRIHAAS-PIGILAM/QTrip-Dynamic.git](https://github.com/SRIHAAS-PIGILAM/QTrip-Dynamic.git)
   
2. **Installation:**
   The project uses external API endpoints. No local database setup is required. 
3. **Launch:**
   Open `index.html` using a Live Server (VS Code) to view the application locally.

---

## 🤝 Acknowledgments

A special thanks to the **Crio.do** team for providing the architectural guidance and technical sprints that made this project a success.

---

## 👤 Author

**Pigilam Srihaas** *Full Stack Developer | B.Tech ECE Graduate (2024)* - [LinkedIn](https://www.linkedin.com/in/srihaas-pigilam/)  
- [GitHub](https://github.com/SRIHAAS-PIGILAM)
```

---

### 🛠️ Quick Steps to Update:
1. Open your `QTrip-Dynamic` folder on your laptop.
2. Create/Update the `README.md` file with the code above.
3. Commit and Push:
   ```bash
   git add README.md
   git commit -m "docs: complete technical documentation for QTrip Dynamic"
   git push origin main
   ```

