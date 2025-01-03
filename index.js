const apiKey = "2662629186e1b8ee44a2bc24340857e0";

const weatherDataEl = document.getElementById("weather-data");
const cityInputEl = document.getElementById("city-input");

const formEl = document.querySelector("form");

formEl.addEventListener("submit", (event) =>{
    event.preventDefault();
    const  cityValue = cityInputEl.value;
    getWeatherData(cityValue);
});


async function getWeatherData(cityValue){
    try{
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityValue}&appid=${apiKey}&units=metric`)

        if(!response.ok){
            throw new Error("Netword response was not ok")
        }

        const data = await response.json()

        const temperature =  Math.round(data.main.temp)

        const description 
    } catch (error){
        
    }
}