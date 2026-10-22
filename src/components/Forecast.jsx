// import React from 'react'
import {
  LuSun,
  LuCloud,
  LuCloudRain,
  LuCloudDrizzle,
  LuCloudLightning,
  LuCloudSnow,
  LuMapPin,
} from "react-icons/lu";

const Forecast = () => {
  const WeatherIcon = {
    Clear: <LuSun size={20} />,
    Clouds: <LuCloud size={20} />,
    Rain: <LuCloudRain size={20} />,
    Drizzle: <LuCloudDrizzle size={20} />,
    Thunderstorm: <LuCloudLightning size={20} />,
    Snow: <LuCloudSnow size={20} />,
    Mist: <LuCloud size={20} />,
  };

  const forecastData = [
    { day: "Mon", weather: "Rain", temp: "24°C" },
    { day: "Tue", weather: "Clouds", temp: "27°C" },
    { day: "Wed", weather: "Clear", temp: "36°C" },
    { day: "Thu", weather: "Drizzle", temp: "22°C" },
    { day: "Fri", weather: "Thunderstorm", temp: "26°C" },
    { day: "Sat", weather: "Rain", temp: "24°C" },
    { day: "Sun", weather: "Clouds", temp: "27°C" },
  ];

  return (
    <>
      <div className="h-[450px] text-white pl-2 pr-2 rounded-3xl bg-black/10 backdrop-xl border border-white/40">
        <h2 className="text-3xl font-light text-center pt-1 mb-6">
          Forecast Chart
        </h2>
        <div className="space-y-3">
          {forecastData.map((data, index) => (
            <div
              key={index}
              className="flex justify-between items-center px-5 py-2  rounded-xl bg-white/5 hover:bg-white/10 transition-all duration-300 cursor-pointer"
            >
              <div className="flex items-center gap-2">
                <LuMapPin className="text-red-500 text-lg" />
                <span className="text-[17px] font-medium">{data.day}</span>
              </div>

              <div className="flex items-center gap-2 text-gray-200">
                {WeatherIcon[data.weather]}
                <span>{data.temp}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Forecast;
