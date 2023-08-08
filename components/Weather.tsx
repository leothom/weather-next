import Image from "next/legacy/image";
import React from "react";
import { unixToHumanReadable, getCurrentTime } from "../helpers/utils";
import { WeatherData } from "../types/types";
import { BsSunrise, BsSunsetFill } from "react-icons/bs";

interface WeatherProps {
  data: WeatherData;
}

const Weather: React.FC<WeatherProps> = ({ data }) => {
  console.log(data);

  return (
    <div className="relative flex flex-col max-w-[500px] w-full h-[90vh] m-auto p-4 text-gray-300 z-10">
      {/* City name */}
      <div>
        <h1 className="text-7xl pt-10 text-white underline underline-offset-8">
          {data.name}
        </h1>
      </div>
      {/* Icon and current temp */}
      <div className="relative flex justify-between pt-10">
        <div className="flex flex-col items-center">
          <Image
            src={`http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`}
            alt="/"
            width={100}
            height={100}
          />
          <p className="text-2xl text-white">{data.weather[0].main}</p>
        </div>
        <div className="flex flex-col items-center">
          <p className="text-8xl text-white pt-5">
            {data.main.temp.toFixed(0)}&#176;F
          </p>
        </div>
      </div>

      {/* Temps: High, Low, Feels Like */}
      <div className="relative flex justify-between text-center py-2 px-8 bg-black/40 rounded-xl my-5">
        <div className="flex flex-col items-center px-2">
          <p className="text-white">
            High: {data.main.temp_max.toFixed(0)}&#176;F
          </p>
        </div>
        <div className="flex flex-col items-center px-2">
          <p className="text-white">
            Low: {data.main.temp_min.toFixed(0)}&#176;F
          </p>
        </div>
        <div className="flex flex-col items-center px-2">
          <p className="text-white">
            Feels Like: {data.main.feels_like.toFixed(0)}&#176;F
          </p>
        </div>
      </div>

      {/* Visibility, Humidity, Winds */}
      <div className="bg-black/40 rounded-xl relative p-8 my-2">
        <div className="flex justify-between text-center">
          <div>
            <p className="font-bold text-2xl">
              {(data.visibility / 1000).toFixed(1)} km
            </p>
            <p className="text-lg">Visibility</p>
          </div>
          <div>
            <p className="font-bold text-2xl">{data.main.humidity}%</p>
            <p className="text-lg">Humidity</p>
          </div>
          <div>
            <p className="font-bold text-2xl">
              {data.wind.speed.toFixed(0)} mph
            </p>
            <p className="text-lg">Winds</p>
          </div>
        </div>
      </div>

      {/* Time - Sunrise, Present, Sunset */}
      <div className="bg-black/40 rounded-xl relative p-8 my-2">
        <div className="flex justify-between text-center">
          <div className="flex items-center">
            <BsSunrise size={20} />
            <p className="font-bold text-lg ml-2">
              {unixToHumanReadable(data.sys.sunrise, data.timezone)}
            </p>
          </div>
          <div className="flex items-center">
            <BsSunsetFill size={20} />
            <p className="font-bold text-lg ml-2">
              {unixToHumanReadable(data.sys.sunset, data.timezone)}
            </p>
          </div>
        </div>
      </div>
      <div className="flex justify-center text-center mb-10">
        <p className="font-bold text-sm">
          The current time in {data.name} is {getCurrentTime(data.timezone)}
        </p>
      </div>
      {/* <a href="#top">
        <footer className="sticky bottom-1 w-full cursor-pointer">
          <div className="flex items-center justify-center">
            <Image
              className="animate-bounce mx-auto h-10 w-10 cursor-pointer invert"
              src="/arrow.png"
              width={20}
              height={20}
              alt="arrow"
            />
          </div>
        </footer>
      </a> */}
    </div>
  );
};

export default Weather;
