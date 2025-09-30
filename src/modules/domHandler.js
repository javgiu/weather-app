const weatherDisplayContainer = document.querySelector("#weather-display");

export function displayWeather(weatherObject, currentunit) {
    weatherDisplayContainer.innerHTML = `
    <div class="weather-card">
        <div class="card-header">
            <div class="header-top">
                <h2>${weatherObject.address}</h2>
                <div class="unit-toggle">
                    <button class="unit-btn${currentunit === 'metric' ? ' active' : ''}" data-unit="metric">°C</button>
                    <button class="unit-btn${currentunit === 'us' ? ' active' : ''}" data-unit="us">°F</button>
                </div>
            </div>    
            <h3>${weatherObject.condition}</h3>
            <p>${weatherObject.temperature}${weatherObject.units.degrees}</p>
        </div>
        <div class="card-description">
            <div class="card-container">
                <h3>Feels like</h3>
                <p>${weatherObject.feelslike}${weatherObject.units.degrees}</p>
            </div>
            <div class="card-container">
                <h3>Humidity</h3>
                <p>${weatherObject.humidity}%</p>
            </div>
            <div class="card-container">
                <h3>UV index</h3>
                <p>${weatherObject.uv}</p>
            </div>
            <div class="card-container">
                <h3>Wind speed</h3>
                <p>${weatherObject.wind}${weatherObject.units.speed}</p>
            </div>
            <div class="card-container">
                <h3>Rain chance</h3>
                <p>${weatherObject.precip}%</p>
            </div>
        </div>
    </div>
    `
}