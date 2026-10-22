import "./App.css";
import Content from "./components/Content";
import { Navbar } from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import { useState } from "react";
import { getWeather } from "./Api/weatherApi";

function App() {
  const [city, setCity] = useState("Hyderabad");
  const [weatherData, setWeatherData] = useState(null);

  const handleSearch = async () => {
    try {
      const data = await getWeather(city);
      setWeatherData(data);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div
      className="min-h-screen bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/bg.jpg')" }}
    >
      <div className="min-h-screen bg-black/20 p-2">
        <div className="flex gap-6">
          <Sidebar />

          <div className="flex-1 pt-4">
            <Navbar city={city} setCity={setCity} handleSearch={handleSearch} />

            <Content weatherData={weatherData} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
