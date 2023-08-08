"use client";
import Image from "next/legacy/image";
import Weather from "@/components/Weather";
import Loader from "@/components/Loader";
import { BsSearch } from "react-icons/bs";
import axios from "axios";
import { useEffect, useState, useRef } from "react";
import { WeatherData } from "../types/types";

export default function Home() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState<WeatherData | null>(null);
  const [loading, setLoading] = useState(false);

  const inputRef = useRef<HTMLInputElement>(null);

  const fetchWeather = (e: { preventDefault: () => void }) => {
    e.preventDefault();

    // Blur the input to hide the keyboard
    if (inputRef.current) {
      inputRef.current.blur();
    }

    setLoading(true);
    axios.get(url).then((res) => {
      setWeather(res.data);
      setLoading(false);
    });
    setCity("");
  };

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.NEXT_PUBLIC_WEATHER_KEY}&units=imperial`;

  if (loading) {
    return <Loader />;
  } else {
    return (
      <main className="flex min-h-screen flex-col items-center bg-gray-400/30">
        {/* Background image */}
        <Image
          src="/bg-clouds.jpg"
          layout="fill"
          alt="gradient background"
          className="object-cover z-[-1] filter blur-xl"
        />
        {/* Search */}
        <div className="relative flex justify-between items-center max-w-[500px] w-full m-auto pt-4 px-2 text-white z-10">
          <form
            onSubmit={fetchWeather}
            className="flex justify-between items-center w-full m-auto p-3 bg-transparent border border-gray-200 text-white rounded-2xl"
          >
            <div>
              <input
                ref={inputRef}
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
        {/* Weather component */}
        {weather && <Weather data={weather} />}
      </main>
    );
  }
}
