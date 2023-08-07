import React from "react";
import { BsSearch } from "react-icons/bs";
import axios from "axios";
import { useEffect, useState } from "react";

function Search() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState({});
  const [loading, setLoading] = useState(false);

  const fetchWeather = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    setLoading(true);
    axios.get(url).then((res) => {
      setWeather(res.data);
      console.log(res.data);
      setLoading(false);
    });
    setCity("");
    setLoading(false);
  };

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.NEXT_PUBLIC_WEATHER_KEY}&units=imperial`;
  return (
    <div className="relative flex justify-between items-center max-w-[500px] w-full m-auto pt-4 text-white z-10">
      <form
        onSubmit={fetchWeather}
        className="flex justify-between items-center w-full m-auto p-3 bg-transparent border border-gray-200 text-white rounded-2xl"
      >
        <div>
          <input
            onChange={(e) => setCity(e.target.value)}
            className="bg-transparent border-none text-white text-2xl placeholder-gray-300 focus:outline-none"
            type="text"
            placeholder="Search city"
          />
        </div>
        <button onClick={fetchWeather}>
          <BsSearch size={20} />
        </button>
      </form>
    </div>
  );
}

export default Search;
