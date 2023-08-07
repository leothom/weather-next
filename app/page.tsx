"use client";
import axios from "axios";
import { useEffect, useState } from "react";
import { BsSearch } from "react-icons/bs";
import Image from "next/image";

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
      {/* Overlay */}
      <div className="absolute top-0 left-0 right-0 bottom-0 bg-black/40 z-[1]" />
      {/* Background image */}
      <Image
        src="https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1674&q=80"
        layout="fill"
        alt="gradient background"
        className="object-cover"
      />
    </main>
  );
}
