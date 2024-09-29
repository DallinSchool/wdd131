document.addEventListener("DOMContentLoaded", () => {
    // Data values
    const data = {
        area: "9.84 sq km",
        population: "39,409",
        state: "Idaho",
        languages: "English",
        currency: "US Dollar (USD)",
        timezone: "UTC-6",
        callingCode: "+1",
        internetTLD: ".us"
    };

    const weather = {
        temperature: 84, // F
        conditions: "Cloudy", // Change this to change the icon
        windSpeed: 9 // mph
    };

    function calculateWindChill(temp, speed) {
        return (
            35.74 +
            0.6215 * temp -
            35.75 * Math.pow(speed, 0.16) +
            0.4275 * temp * Math.pow(speed, 0.16)
        ).toFixed(1);
    }

    let windChillValue = "N/A"; // ------- Default value if the below condition is not met
    if (weather.temperature <= 50 && weather.windSpeed > 3) {
        windChillValue = `${calculateWindChill(weather.temperature, weather.windSpeed)} °F`;
    }

    // Update data values
    document.getElementById("area").textContent = data.area;
    document.getElementById("population").textContent = data.population;
    document.getElementById("state").textContent = data.state;
    document.getElementById("languages").textContent = data.languages;
    document.getElementById("currency").textContent = data.currency;
    document.getElementById("timezone").textContent = data.timezone;
    document.getElementById("callingCode").textContent = data.callingCode;
    document.getElementById("internetTLD").textContent = data.internetTLD;

    // Update weather values
    document.getElementById("temperature").textContent = `${weather.temperature} °F`;
    document.getElementById("conditions").textContent = weather.conditions;
    document.getElementById("wind").textContent = `${weather.windSpeed} mph`;
    document.getElementById("windChill").textContent = windChillValue;

    // -------- This is for the mobile weather icon selector
    const weatherIcons = {
        "Sunny": "day.svg",
        "Partly Cloudy": "cloudy-day-1.svg",
        "Cloudy": "cloudy-day-1.svg",
        "Rainy": "rainy-1.svg",
        "Snowy": "snowy-1.svg",
        "Thunder": "thunder.svg"
    };


    const iconFilename = weatherIcons[weather.conditions] || "day.svg"; 

    fetch(`images/weather_icons/${iconFilename}`)
        .then(response => response.text())
        .then(svg => {
            document.querySelector('.weather-icon').innerHTML = svg;
        })
        .catch(error => console.error('Error loading SVG:', error));

    const lastModified = document.lastModified;
    document.getElementById("lastModified").textContent = lastModified;
});
