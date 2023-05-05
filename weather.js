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

}
