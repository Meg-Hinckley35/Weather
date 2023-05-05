//initialize app
const app = {
    init: () => {
      document
        .getElementById("search-weather")
        .addEventListener("click", app.fetchLocation);
    },

    //fetch function to get a location
    //using our id names to call user input values
    fetchLocation: () => {
        let cityName = document.getElementById("city-input").value;
        let stateCode = document.getElementById("state-input").value;
        let countryCode = document.getElementById("country-input").value;
        let key = "a65653b1059d6cc607d60a89f12cd23c";
        let limit = 1;
        let url = `https://api.openweathermap.org/geo/1.0/direct?q=${cityName},${stateCode},${countryCode}&limit=${limit}&appid=${key}`;

        //fetching location data from our url
        if (url) {
            fetch(url)
              .then((resp) => {
                if (!resp.ok) throw new Error(resp.statusText);
                return resp.json();
              })
              .then((data) => {
                let usableData = {};
                usableData.lat = data[0].lat;
                usableData.lon = data[0].lon;
                app.fetchWeather(usableData);
              })
              .catch(console.err);
          }
        },
        
        //fetch function to grab location data that has been stored already
        fetchStoredLocation: (storage) => {
            let storageCity = storage.city;
            let storageCountry = storage.country;
            let key = "a65653b1059d6cc607d60a89f12cd23c";
            let limit = 1;
            let storageUrl = `https://api.openweathermap.org/geo/1.0/direct?q=${storageCity},${storageCountry}&limit=${limit}&appid=${key}`;
        
            if (storageUrl) {
              fetch(storageUrl)
                .then((resp) => {
                  if (!resp.ok) throw new Error(resp.statusText);
                  return resp.json();
                })
                .then((data) => {
                  let usableStorageData = {};
                  usableStorageData.lat = data[0].lat;
                  usableStorageData.lon = data[0].lon;
                  app.fetchWeather(usableStorageData);
                })
                .catch(console.err);
            }
          },

          //fetching current weather by the location we have just grabbed
          fetchWeather: (location) => {
            const currentWeatherBox = document.getElementById("weather-box");
            const forecastTitle = document.getElementById("forecast-title");
            const currentForecastTitle = document.getElementById(
              "currentforecast-title"
            );
            const forecastBox = document.getElementById("five-day-forecast");
            const weatherCard1 = document.getElementById("weather-card-1");
            const weatherCard2 = document.getElementById("weather-card-2");
            const weatherCard3 = document.getElementById("weather-card-3");
            const weatherCard4 = document.getElementById("weather-card-4");
            const weatherCard5 = document.getElementById("weather-card-5");
            let lat = location.lat;
            let lon = location.lon;
            let key = "a65653b1059d6cc607d60a89f12cd23c";
            let url = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${key}&units=imperial&lang=en`;
                
            // grabbing then returning the data on current forecast
            fetch(url)
              .then((resp) => {
                if (!resp.ok) throw new Error(resp.statusText);
                return resp.json();
              })
              .then((data) => {
                if (data) {
                  currentWeatherBox.classList.remove("hide");
                  forecastTitle.classList.remove("hide");
                  currentForecastTitle.classList.remove("hide");
                  forecastBox.classList.remove("hide");
                  weatherCard1.classList.remove("hide");
                  weatherCard2.classList.remove("hide");
                  weatherCard3.classList.remove("hide");
                  weatherCard4.classList.remove("hide");
                  weatherCard5.classList.remove("hide");
                }
              
}
