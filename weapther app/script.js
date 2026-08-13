const api_key = "9456f83e4b8c2a7ce676df8d763fa0c7";

async function getInfo() {

    let city = document.getElementById("city").value;
    let cityy = document.getElementById("cityy");
    let Temp = document.getElementById("temp");
    let hum = document.getElementById("hum");
    let wind = document.getElementById("wind");
    let press = document.getElementById("press");
    let feel = document.getElementById("feel");
    let con = document.getElementById("condition");

    const url = `https://api.weatherstack.com/current?access_key=${api_key}&query=${city}`;

    try {
        const response = await fetch(url);
        const data = await response.json();

        console.log(data);

        if (data.error) {
            console.log(data.error.info);
            return;
        }

        const weather = data.current;

        cityy.innerText= "City=" + city;
        Temp.innerText="Temperature:" + weather.temperature + "°C";
        hum.innerText="Humidity:" + weather.humidity + "%";
        wind.innerText="Wind:" + weather.wind_speed + " km/h";
        press.innerText="Pressure:" + weather.pressure + " mb";
        feel.innerText="Feels Like:" + weather.feelslike + "°C";
        con.innerText="Condition:" = weather.weather_descriptions[0];


        console.log("City:",city);
        console.log("Temperature:", weather.temperature + "°C");
        console.log("Humidity:", weather.humidity + "%");
        console.log("Wind:", weather.wind_speed + " km/h");
        console.log("Pressure:", weather.pressure + " mb");
        console.log("Feels Like:", weather.feelslike + "°C");
        console.log("Condition:", weather.weather_descriptions[0]);



    } catch (err) {
        console.error(err);
    }
}

