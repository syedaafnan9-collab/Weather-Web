import axios from "axios";

const API_KEY = "e84f648377c467dbc1420461e99888c6";

export const getWeather = async (city) => {
  const response = await axios.get(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`,
  );

  return response.data;
};
