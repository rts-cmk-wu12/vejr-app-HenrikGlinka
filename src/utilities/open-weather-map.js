const getGeocoding = async (city) => {
    const API_KEY = import.meta.env.VITE_OPEN_WEATHER_MAP_API_KEY;
    const BASE_URL = "https://api.openweathermap.org/geo/1.0/direct";

    const url = new URL(BASE_URL);

    url.searchParams.append("q", `${city}`);
    url.searchParams.append("appid", API_KEY);
    url.searchParams.append("limit", "1");
    //url.searchParams.append("lang", "da");

    const response = await fetch(url);
    const data = await response.json();

    console.log(`Geocoding data for city: ${city}`, data);
    return data[0];
}

const getWeather = async (lat, lon) => {
    const API_KEY = import.meta.env.VITE_OPEN_WEATHER_MAP_API_KEY;
    const BASE_URL = "https://api.openweathermap.org/data/2.5/weather";

    const url = new URL(BASE_URL);

    url.searchParams.append("lat", lat);
    url.searchParams.append("lon", lon);
    url.searchParams.append("appid", API_KEY);
    url.searchParams.append("units", "metric");
    url.searchParams.append("lang", "da");

    const response = await fetch(url);
    const data = await response.json();

    console.log(`Weather data for lat: ${lat}, lon: ${lon}`, data);
    
    return data;
}

const getCityWeather = async (city) => {
    const geocodingData = await getGeocoding(city);
    if (!geocodingData) {
        throw new Error(`City "${city}" not found.`);
    }
    const { lat, lon } = geocodingData;
    const weatherData = await getWeather(lat, lon);

    weatherData.name = geocodingData.name; 
    weatherData.local_names = geocodingData.local_names;

    return weatherData;
}

export {
    getGeocoding, getWeather, getCityWeather
};