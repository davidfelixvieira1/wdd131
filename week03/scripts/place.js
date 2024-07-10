// Update the current year and last modified date in the footer
document.getElementById('currentYear').textContent = new Date().getFullYear();
document.getElementById('lastModified').textContent = document.lastModified;

// Calculate and display the wind chill factor if conditions are met
const temperature = 30; // Example temperature in Celsius
const windSpeed = 5; // Example wind speed in km/h

function calculateWindChill(temp, speed) {
    return 13.12 + 0.6215 * temp - 11.37 * Math.pow(speed, 0.16) + 0.3965 * temp * Math.pow(speed, 0.16);
}

function displayWindChill() {
    let windChill = 'N/A';
    if (temperature <= 10 && windSpeed > 4.8) {
        windChill = calculateWindChill(temperature, windSpeed).toFixed(2) + ' °C';
    }
    document.getElementById('windchill').textContent = windChill;
}

displayWindChill();


