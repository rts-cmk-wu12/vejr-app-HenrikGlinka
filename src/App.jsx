import "./styles/main.sass"
import VideoBackground from "./components/video-background/video-background"
import { useState } from "react";
import WeatherCard from "./components/weather-card/weather-card";
import SearchBar from "./components/search-bar/search-bar";
import { getCityWeather } from "./utilities/open-weather-map";

function App() {

  const [weatherData, setWeatherData] = useState(null);

  return (
      <>
            <WeatherCard weatherData={weatherData} />
            <SearchBar onSubmit={async searchQuery => setWeatherData(await getCityWeather(searchQuery))} />
            <VideoBackground src={weatherData !== null ? `./videos/weather/${weatherData.weather[0].main.toLowerCase()}.mp4` : null} />
        </>
  )
}

export default App
