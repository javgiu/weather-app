import { fetchWeather } from "./weatherAPI.js";

export async function processData(location, unitGroup = "metric") {
    const data = await fetchWeather(location, unitGroup);
    console.log(data);
    const weather = data.currentConditions;

    const units = {
        speed: unitGroup === "metric" ? "km/h" : "mph",
        degrees: unitGroup === "metric" ? "°C" : "°F"
    }
    const weatherObject = {
        condition: weather.conditions,
        feelslike: weather.feelslike,
        humidity: weather.humidity,
        temperature: weather.temp,
        uv: weather.uvindex,
        wind: weather.windspeed,
        precip: weather.precipprob,
        address: data.resolvedAddress,
        units: units
    }

    return weatherObject;
}