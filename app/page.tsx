"use client";
import Image from "next/image";
import Weather from "@/components/Weather";
import Loader from "@/components/Loader";
import { BsSearch } from "react-icons/bs";
import axios from "axios";
import { useEffect, useState } from "react";

export default function Home() {
  const [city, setCity] = useState("");

  interface Coord {
    lon: number;
    lat: number;
  }

  interface WeatherDetail {
    id: number;
    main: string;
    description: string;
    icon: string;
  }

  interface Main {
    temp: number;
    feels_like: number;
    temp_min: number;
    temp_max: number;
    pressure: number;
    humidity: number;
  }

  interface Wind {
    speed: number;
    deg: number;
  }

  interface Clouds {
    all: number;
  }

  interface Sys {
    type: number;
    id: number;
    country: string;
    sunrise: number;
    sunset: number;
  }

  interface WeatherData {
    coord: Coord;
    weather: WeatherDetail[];
    base: string;
    main: Main;
    visibility: number;
    wind: Wind;
    clouds: Clouds;
    dt: number;
    sys: Sys;
    timezone: number;
    id: number;
    name: string;
    cod: number;
  }

  const [weather, setWeather] = useState<WeatherData | null>(null);

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

  if (loading) {
    return <Loader />;
  } else {
    return (
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        {/* Background image */}
        {/* <Image
          src="https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1674&q=80"
          layout="fill"
          alt="gradient background"
          className="object-cover"
        /> */}
        {/* Search */}
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
        {/* Weather display */}
        {weather && <Weather data={weather} />}
      </main>
    );
  }
}
