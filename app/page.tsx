"use client";
import axios from "axios";
import { useEffect, useState } from "react";
import { BsSearch } from "react-icons/bs";

export default function Home() {
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

  const url = `https://api.openweathermap.org/data/2.5/weather?q=hongkong&appid=${process.env.NEXT_PUBLIC_WEATHER_KEY}`;

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <button onClick={fetchWeather}>Fetch data</button>
    </main>
  );
}
