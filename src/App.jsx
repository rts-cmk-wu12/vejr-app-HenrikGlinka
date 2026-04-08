import "./styles/main.sass"
import VideoBackground from "./components/video-background/video-background"
import { useState, useEffect } from "react";
import WeatherCard from "./components/weather-card/weather-card";
import SearchBar from "./components/search-bar/search-bar";
import { getCityWeather } from "./utilities/open-weather-map";
import AvoiderGame from "./components/avoider-game/avoider-game";

function App() {

  const [weatherData, setWeatherData] = useState(null);
  const [isOnline, setIsOnline] = useState(navigator.onLine);

  useEffect(() => {
    const handleOnline = () => setIsOnline(true);
    const handleOffline = () => setIsOnline(false);

    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, []);

  return (

    !isOnline ? <AvoiderGame /> :
      <>
        <WeatherCard weatherData={weatherData} />
        <SearchBar onSubmit={async searchQuery => setWeatherData(await getCityWeather(searchQuery))} />
        <VideoBackground src={weatherData !== null ? `./videos/weather/${weatherData.weather[0].main.toLowerCase()}.mp4` : null} />
      </>
  )
}

export default App
