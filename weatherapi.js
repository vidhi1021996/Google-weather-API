var url="https://api.openweathermap.org/data/2.5/weather?q=windsor&units=Metric&appid=26b1a35a942019065f36c21015e9cd8b";
function getWeather(obj)
{

	var city = obj.value;
	if(city.trim().length != 0)
	{
		url = "https://api.openweathermap.org/data/2.5/weather?q="+city+"&units=Metric&appid=26b1a35a942019065f36c21015e9cd8b";
		$.getJSON(url,function(data) {	
			
			var icon = "http://openweathermap.org/img/w/"+data.weather[0].icon+".png";
			var cityName = data.name;
			var country = data.sys.country;
			var temp = Math.round(data.main.temp);
			var feels_like = Math.round(data.main.feels_like);
			var weather = data.weather[0].main;
			var wind = data.wind.speed;
			var pressure = data.main.pressure;
			var humidity = data.main.humidity;
			var name = data.name;
			
			$('.icon').attr('src',icon);
			$('.currentCity').text("City: " +cityName);
			$('.country').text("Country: " +country);
			$('.weather').text("Weather: "+weather);
			$('.pressure').text("Pressure: "+pressure);
			$('.wind').text("Wind: "+wind);
			$('.humidity').text("Humidity: "+humidity);
			$('.name').text("Name: "+name);
			$('.temp').text("Temperature: "+temp +" \u00B0C");
			$('.feels_like').text("Feels Like: " +feels_like+" \u00B0C");
			var lat = data.coord.lat;
			var lon = data.coord.lon;
			initMap2(lat,lon);
			document.getElementById("city").focus();
		
		}).fail(function(){alert("Invalid City Name");});
	}
	else
	{
		alert("Not Found");
	}
}
