import Image from "next/image";
import React from "react";
import { unixToHumanReadable, getCurrentTime } from "../helpers/utils";

function Weather({ data }) {
  console.log(data);

  return (
    <div className="relative flex flex-col max-w-[500px] w-full h-[90vh] m-auto p-4 text-gray-300 z-10">
      <div className="relative flex justify-between pt-10">
        <div className="flex flex-col items-center">
          <Image
            src={`http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`}
            alt="/"
            width={100}
            height={100}
          />
          <p className="text-2xl text-gray-500">{data.weather[0].main}</p>
        </div>
        <div className="flex flex-col">
          <p className="text-8xl text-gray-500 pt-5">
            {data.main.temp.toFixed(0)}&#176;F
          </p>
        </div>
      </div>

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

      {/* Bottom - black overlay */}
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

      {/* Time */}
      <div className="bg-black/40 rounded-xl relative p-8 my-2">
        <div className="flex justify-between text-center">
          <div>
            <p className="font-bold text-lg">
              {unixToHumanReadable(data.sys.sunrise, data.timezone)}
            </p>
            <p className="text-md">Sunrise</p>
          </div>
          <div>
            <p className="font-bold text-lg">{getCurrentTime(data.timezone)}</p>
            <p className="text-md">Present</p>
          </div>
          <div>
            <p className="font-bold text-lg">
              {unixToHumanReadable(data.sys.sunset, data.timezone)}
            </p>
            <p className="text-md">Sunset</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Weather;
