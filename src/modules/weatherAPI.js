const VISUAL_API_KEY = "E7A8QUE3AQTAQP9L5C6TD83BC";

export async function fetchWeather(location, unitGroup) {

    const url = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?unitGroup=${unitGroup}&key=${VISUAL_API_KEY}`

    try {
        const response = await fetch(url);
        const data = await response.json();
        return data;
    } catch (e) {
        console.log("Fail to fetch data", e);
    }
} 