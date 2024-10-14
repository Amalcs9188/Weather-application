getWeather = async () => {
  city = search.value;
  api = "e81f5be499ac5b4e5d151b7fc81aadb0";
  try {
    response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api}&units=metric`
    );
  
  console.log(response);
  res = await response.json();
  console.log(res);

  if (search.value != "") {
    weatherBox.innerHTML = `
     <h1>${res.name}
    </h1>
     <h1 id="time">
    </h1>
    <img src="./imagess/clear.png" alt="">
    <h1>${res.main.temp} ℃
    </h1>
    <h3>${res.weather[0].description}</h3>`;

    humidity.innerHTML = `
    <i class="fa-solid fa-water"></i>
                <div class="humidity-details">
                    <h3>${res.main.humidity}%</h3>
                    <h4>Humidity</h4>
                </div>
    `;
    wind.innerHTML = `
                    <i class="fa-solid fa-wind"></i>
               <div class="wind-details">
                    <h3>${res.wind.speed} kmph</h3>
                    <h4>Wind Speed</h4>
               </div>
    `;
    console.log(res.weather[0].icon);

    if (res.weather[0].main == "Clouds") {
      weatherBox.innerHTML = `
        <h1>${res.name}
       </h1>
       <img src="./imagess/clouds.png" alt="">
       <h1>${res.main.temp} ℃
       </h1>
       <h3>Overcast Clouds</h3>`;
    }
    if (res.weather[0].description == "light rain") {
      weatherBox.innerHTML = `
        <h1>${res.name}
       </h1>
       <img src="./imagess/drizzle.png" alt="">
       <h1>${res.main.temp} ℃
       </h1>
       <h3>Overcast Clouds</h3>`;
    }
    if (res.weather[0].main == "snow") {
      weatherBox.innerHTML = `
        <h1>${res.name}
       </h1>
       <img src="./imagess/snow.png" alt="">
       <h1>${res.main.temp} ℃
       </h1>
       <h3>Overcast Clouds</h3>`;
    }
    if (res.weather[0].main == "clear") {
      weatherBox.innerHTML = `
        <h1>${res.name}
       </h1>
       <img src="./imagess/clear.png" alt="">
       <h1>${res.main.temp} ℃
       </h1>
       <h3>Overcast Clouds</h3>`;
    }
    if (res.weather[0].main == "rain") {
      weatherBox.innerHTML = `
        <h1>${res.name}
       </h1>
       <img src="./imagess/rain.png" alt="">
       <h1>${res.main.temp} ℃
       </h1>
       <h3>Overcast Clouds</h3>`;
    }

    let localTime = new Date();
    console.log(localTime);

    let hour = localTime.getHours();
    let minutes = localTime.getMinutes();

    time.innerHTML = `${hour}:${minutes}`;
  } 
  else{
      search.placeholder = "enter a valid city";

  }
  }
  
  catch(err){
    search.value=""
    
      
      
    }
  
};
