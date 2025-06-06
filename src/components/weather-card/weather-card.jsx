import "./weather-card.sass";

export default function WeatherCard({ weatherData }) {
    const BASE_CLASS = 'weather-card';

    if (!weatherData) return null;

    const { name, local_names, main, weather } = weatherData;

    return (
        <div className={BASE_CLASS}>
            <h2 className={`${BASE_CLASS}__city`}>{local_names.da ?? name}</h2>
            <p className={`${BASE_CLASS}__temperature`}>{main.temp.toFixed(1)}°C</p>
            <p className={`${BASE_CLASS}__description`}>{weather[0].description}</p>
        </div>
    );
}