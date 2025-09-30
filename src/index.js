import "./styles/styles.css";
import { processData } from "./modules/weatherData";
import { displayWeather } from "./modules/domHandler.js";

// DOM Elements
const locationInput = document.querySelector("#location-input");
const searchForm = document.querySelector("#search-form");
const weatherDisplayContainer = document.querySelector("#weather-display");

// States
let currentUnit = "metric";
let lastLocation = null;

// Search location
searchForm.addEventListener("submit", async (e) => {
    e.preventDefault();

    try {
        const location = locationInput.value;
        lastLocation = location;

        const weather = await processData(location, currentUnit);
        displayWeather(weather, currentUnit);

        locationInput.value = "";
    } catch (error) {
        console.log(error)
    }
});

// Change units
weatherDisplayContainer.addEventListener("click", async (e) => {
    if (e.target.classList.contains("unit-btn")) {
        currentUnit = e.target.dataset.unit;

        if (lastLocation) {
            const weather = await processData(lastLocation, currentUnit);
            displayWeather(weather, currentUnit);
        }
    }
});