async function getWeather(city) {
  const apiKey = '7e772be2e81ace07280112199c981e97';
  const url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  try {
 const response = await fetch(url);
    const data = await response.json();
    if (response.ok) {
      return data;
    } else {
      throw new Error(data.message);
    }
  } catch (error) {
    console.error('Error fetching weather data:', error);
	alert('城市输入错误,请检查!')
  }
}
function parseWeatherData(data) {
  const { main, weather, wind, sys, name } = data;
  return {
    city: name,
    country: sys.country,
    temperature: main.temp,
    humidity: main.humidity,
    description: weather[0].description,
    windSpeed: wind.speed,
  };
}


async function displayWeather1(city) {
  const weatherData = await getWeather(city);
  const parsedData = parseWeatherData(weatherData);
//document.getElementById('city1').textContent = `地区: ${parsedData.city}, ${parsedData.country}`;
  document.getElementById('temperature1').textContent = `温度: ${parsedData.temperature}°C`;
  document.getElementById('description1').textContent = `天气情况: ${parsedData.description}`;
}
displayWeather1('kashi');//喀什市

async function displayWeather2(city) {
  const weatherData = await getWeather(city);
  const parsedData = parseWeatherData(weatherData);
  document.getElementById('temperature2').textContent = `温度: ${parsedData.temperature}°C`;
  document.getElementById('description2').textContent = `天气情况: ${parsedData.description}`;
}
displayWeather2('Turpan');//吐鲁番市

async function displayWeather3(city) {
  const weatherData = await getWeather(city);
  const parsedData = parseWeatherData(weatherData);
  document.getElementById('city3').textContent = `地区: ${parsedData.city}, ${parsedData.country}`;
  document.getElementById('temperature3').textContent = `温度: ${parsedData.temperature}°C`;
  document.getElementById('description3').textContent = `天气情况: ${parsedData.description}`;
  document.getElementById('windSpeed3').textContent = `风速: ${parsedData.windSpeed} m/s`;
}//查询

function handleSearch() {
  const city = document.getElementById('cityInput').value;
  if (city) {
    displayWeather3(city);
  }
  else
   alert('城市输入错误,请检查!');
}