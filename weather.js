const app = {
    init: () => {
      document
        .getElementById("search-weather")
        .addEventListener("click", app.fetchLocation);
    },
}
