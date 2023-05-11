function getWeather() {
    const city = document.getElementById("city").value;
    const apiKey = "YOUR_API_KEY";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  
    fetch(url)
      .then(response => response.json())
      .then(data => {
        const temperature = data.main.temp;
        const humidity = data.main.humidity;
        const windSpeed = data.wind.speed;
  
        document.getElementById("temperature").textContent = `${temperature}°C`;
        document.getElementById("humidity").textContent = `${humidity}%`;
        document.getElementById("wind-speed").textContent = `${windSpeed} km/h`;
      })
      .catch(error => console.error(error));
  }

// function getWeather() {
//     const city = document.getElementById("city").value;
//     const apiKey = "YOUR_API_KEY";
//     const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  
//     fetch(url)
//       .then(response => response.json())
//       .then(data => {
//         const temperature = data.main.temp;
//         const humidity = data.main.humidity;
//         const windSpeed = data.wind.speed;
  
//         document.getElementById("temperature").textContent = `${temperature}°C`;
//         document.getElementById("humidity").textContent = `${humidity}%`;
//         document.getElementById("wind-speed").textContent = `${windSpeed} km/h`;
//       })
//       .catch(error => console.error(error));
//   }






