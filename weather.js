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
        let url = `https://api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid={API key}`;

        //fetching weather data from our url
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

}
