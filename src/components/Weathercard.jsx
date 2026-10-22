import {
  LuSun,
  LuCloud,
  LuCloudRain,
  LuCloudDrizzle,
  LuCloudLightning,
  LuCloudSnow,
  LuWind,
  LuDroplets,
  LuEye,
  LuGauge,
} from "react-icons/lu";

function Weathercard({ weatherData }) {
  if (!weatherData) {
    return <div className="text-white">Loading...</div>;
  }
  const WeatherIcon = {
    Clear: <LuSun size={80} />,
    Clouds: <LuCloud size={80} />,
    Rain: <LuCloudRain size={80} />,
    Drizzle: <LuCloudDrizzle size={80} />,
    Thunderstorm: <LuCloudLightning size={80} />,
    Snow: <LuCloudSnow size={80} />,
    Mist: <LuCloud size={80} />,
  };

  return (
    <>
      <div className="h-[400px] rounded-3xl  bg-black/10 backdrop-xl text-white border border-white/40">
        <h2 className="text-center text-4xl font-light p-6">
          {" "}
          Current Weather{" "}
        </h2>
        <div className="flex justify-between items-center p-10">
          <h3 className="text-4xl font-bold">
            {weatherData?.main?.temp}°C
            <br></br>
            <span className="text-xl capitalize">
              {weatherData?.weather?.[0]?.description}
            </span>
          </h3>

          {/* <LuCloudRain size={80} /> */}
          {WeatherIcon[weatherData?.weather?.[0]?.main]}
        </div>
        <div className="flex justify-between items-center p-5">
          <div className="flex flex-col items-center">
            <LuDroplets size={20} />
            <span className="text-xl">Humidity</span>
            <span className="text-xl">{weatherData?.main?.humidity}%</span>
          </div>
          <div className="flex flex-col items-center">
            <LuWind size={20} />
            <span className="text-xl">Wind</span>
            <span className="text-xl">{weatherData?.wind?.speed} m/s</span>
          </div>
          <div className="flex flex-col items-center">
            <LuGauge size={20} />
            <span className="text-xl">Pressure</span>
            <span className="text-xl">{weatherData?.main?.pressure} hPa</span>
          </div>
          <div className="flex flex-col items-center">
            <LuEye size={20} />
            <span className="text-xl">Visibility</span>
            <span className="text-xl">{weatherData?.visibility / 1000} km</span>
          </div>
        </div>
      </div>
    </>
  );
}

export default Weathercard;
