async function getWeather() {
    const apiKey = ''; // Replace with your OpenWeatherMap API key
    const city = document.getElementById('city').value;
    if (!city) {
        alert('Please enter a city name');
        return;
    }
    
    try {
        const response = await fetch(`http://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=metric`);
        if (!response.ok) {
            throw new Error('City not found');
        }
        const data = await response.json();
        console.log(data)
        document.getElementById('results').innerHTML = `
            <h3>${data.city.name}, ${data.city.country}</h3>
            <p>Temperature: ${data.list[0].main.temp}°C</p>
            <p>Humidity: ${data.list[0].main.humidity}%</p>
            <p>Condition: ${data.list[0].weather[0].description}</p> 
        `;

        const forecastContainer =  document.querySelector('.forecast');
        forecastContainer.innerHTML = '';     
        for(let i=1;i<6;i++){
            const div  = document.createElement('div');
            div.classList.add('forecast-item');
            div.innerHTML=`
            <div class="forecast-elements">
                 <p> ${data.list[i].dt_txt}</p>
                 <p> ${data.list[i].main.temp}°C</p>
                 <p> ${data.list[i].weather[0].description}</p>
             </div> 
         `;
            forecastContainer.appendChild(div);
        }
  
    } catch (error) {
        document.getElementById('results').innerHTML = `<p style="color: red;">${error.message}</p>`;
    }
}

{/* <p>Humidity: ${data.main.humidity}%</p>
<p>Condition: ${data.weather[0].description}</p> */}
// http://api.openweathermap.org/data/2.5/forecast?q=london&appid=fb63e95f46e3bef4a1a00dd64cfc41d5&units=metric