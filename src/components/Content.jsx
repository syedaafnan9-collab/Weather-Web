import WeatherCard from "./Weathercard";
import WeatherMap from "./WeatherMap";
import PopularCities from "./PopularCities";
import Forecast from "./Forecast";
import Summary from "./Summary";

function Content({ weatherData }) {
  return (
    <div className="grid grid-cols-3 gap-5 mt-6">
      <WeatherCard weatherData={weatherData} />
      <WeatherMap weatherData={weatherData} />
      <PopularCities />
      <Forecast weatherData={weatherData} />
      <Summary weatherData={weatherData} />
    </div>
  );
}

export default Content;
