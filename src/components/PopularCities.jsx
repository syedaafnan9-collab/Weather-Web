import {
  LuSun,
  LuCloud,
  LuCloudRain,
  LuCloudDrizzle,
  LuCloudLightning,
  LuCloudSnow,
  LuMapPin,
} from "react-icons/lu";

function PopularCities() {
  const WeatherIcon = {
    Clear: <LuSun size={20} />,
    Clouds: <LuCloud size={20} />,
    Rain: <LuCloudRain size={20} />,
    Drizzle: <LuCloudDrizzle size={20} />,
    Thunderstorm: <LuCloudLightning size={20} />,
    Snow: <LuCloudSnow size={20} />,
    Mist: <LuCloud size={20} />,
  };

  const cities = [
    { name: "Hyderabad", weather: "Rain", temp: "24°C" },
    { name: "Bangalore", weather: "Clouds", temp: "27°C" },
    { name: "Delhi", weather: "Clear", temp: "36°C" },
    { name: "Salem", weather: "Drizzle", temp: "22°C" },
    { name: "Kerala", weather: "Thunderstorm", temp: "26°C" },
  ];

  return (
    <div className="h-[400px] rounded-3xl border border-white/40 bg-black/10 text-white p-5">
      <h2 className="text-3xl font-light text-center mb-6">Popular Cities</h2>

      <div className="space-y-3">
        {cities.map((city, index) => (
          <div
            key={index}
            className="flex justify-between items-center px-5 py-3 rounded-xl bg-white/5 hover:bg-white/10 transition-all duration-300 cursor-pointer"
          >
            <div className="flex items-center gap-3">
              <LuMapPin className="text-red-500 text-lg" />
              <span className="text-[17px] font-medium">{city.name}</span>
            </div>

            <div className="flex items-center gap-3 text-gray-200">
              {WeatherIcon[city.weather]}
              <span>{city.temp}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default PopularCities;
