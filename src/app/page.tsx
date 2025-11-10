"use client";

import {
  CitySearchType,
<<<<<<< HEAD
  CurrentAQIType,
  HourlyAQIType,
=======
  CurrentWeatherType,
  DailytWeatherType,
  HourlyWeatherType,
>>>>>>> 08224d96 (Refactor code structure for improved readability and maintainability)
  getWeather,
} from "@/api/APICalls";
import { FaMapMarkerAlt } from "react-icons/fa";
import { useCallback, useEffect, useState } from "react";
import DayCard from "../components/card/DayCard";
import Header from "../components/header/Header";
import TableRow from "../components/table/TableRow";
import Search from "@/components/search/Search";
<<<<<<< HEAD
import { getAQIIcon } from "@/util/IconCode2";
const HOURLY_DATA_DISPLAY_LIMIT: number = 10  ;

export default function Home() {
  const [currentData, setCurrentData] = useState<CurrentAQIType>();
  const [hourlyData, setHourlyData] = useState<HourlyAQIType[]>([]);
=======
const HOURLY_DATA_DISPLAY_LIMIT: number = 10;

export default function Home() {
  const [currentData, setCurrentData] = useState<CurrentWeatherType>();
  const [dailyData, setDailyData] = useState<DailytWeatherType[]>([]);
  const [hourlyData, setHourlyData] = useState<HourlyWeatherType[]>([]);
>>>>>>> 08224d96 (Refactor code structure for improved readability and maintainability)
  const [selectedResult, setSelectedResult] = useState<CitySearchType>(
    {} as CitySearchType
  );
  const [currentHourlyDispayIndex, setCurrentHourlyDispayIndex] =
    useState<number>(0);
  const [hourlyDisplayData, setHourlyDisplayData] = useState<
<<<<<<< HEAD
    HourlyAQIType[]
  >([]);
=======
    HourlyWeatherType[]
  >([]); 
>>>>>>> 08224d96 (Refactor code structure for improved readability and maintainability)
  const [location, setLocation] = useState<{
    latitude: number;
    longitude: number;
  }>({ latitude: 10, longitude: 10 });

  useEffect(() => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        ({ coords }) => {
          const { latitude, longitude } = coords;
          setLocation({ latitude, longitude });
<<<<<<< HEAD
          // console.log("okk")
=======
>>>>>>> 08224d96 (Refactor code structure for improved readability and maintainability)
        },
        (error) => {
          alert(
            "There was an error getting your location. Please allow to use your location and refresh the page."
          );
        }
      );
    }
  }, []);

  const limitHourlyData = useCallback(
<<<<<<< HEAD
    (data: HourlyAQIType[]) => {
=======
    (data: HourlyWeatherType[]) => {
>>>>>>> 08224d96 (Refactor code structure for improved readability and maintainability)
      const newData = data.slice(
        0,
        HOURLY_DATA_DISPLAY_LIMIT + currentHourlyDispayIndex
      );
      // setHourlyDisplayData(prevData => [...prevData, ...newData]);
      setHourlyDisplayData(newData);
    },
    [currentHourlyDispayIndex]
  );

  useEffect(() => {
    const getData = async () => {
      const latitude =
        Object.keys(selectedResult).length > 0
          ? selectedResult.latitude
          : location.latitude;
      const longitude =
        Object.keys(selectedResult).length > 0
          ? selectedResult.longitude
          : location.longitude;

      const weatherData = await getWeather(
        latitude,
        longitude,
        Intl.DateTimeFormat().resolvedOptions().timeZone
      );

      if (weatherData.current) {
        setCurrentData(weatherData.current);
      }

<<<<<<< HEAD
=======
      if (weatherData.daily) {
        setDailyData(weatherData.daily);
      }

>>>>>>> 08224d96 (Refactor code structure for improved readability and maintainability)
      if (weatherData.hourly) {
        limitHourlyData(weatherData.hourly);
        setHourlyData(weatherData.hourly);
      }
    };

    getData();
  }, [location, limitHourlyData, selectedResult]);

  function onClickResultHandler(item: CitySearchType): void {
    setSelectedResult(item);
  }

  // useEffect(() => {
  //   limitHourlyData(hourlyData);
  // }, [hourlyData, limitHourlyData]);

  // if(currentData == null || currentData == undefined){
  //   return '';
  // }
<<<<<<< HEAD
console.log("Hourly data received:", hourlyDisplayData);
=======

>>>>>>> 08224d96 (Refactor code structure for improved readability and maintainability)
  return (
    // className="flex min-h-screen flex-col items-center justify-between p-24"
    <main className={`${currentData == null ? "blur-md" : ""} `}>
      {Object.keys(selectedResult).length > 0 && (
        <div className="flex justify-center items-center mt-6">
          <FaMapMarkerAlt className="w-6 h-6 object-contain"/>
          <div className="text-center pl-2 text-foregroundColor text-2xl font-medium ">
            {selectedResult.name}
          </div>
        </div>
      )}
      <Search
        latitude={location.latitude}
        longitude={location.longitude}
        onClickResultHandler={onClickResultHandler}
      />
      <Header
<<<<<<< HEAD
  aqi={currentData?.aqi}
  pm25={currentData?.pm25}
  pm10={currentData?.pm10}
  no2={currentData?.no2}
  so2={currentData?.so2}
  o3={currentData?.o3}
  co={currentData?.co}
  iconCode2={50} // static cloud icon, change if you add weather API later
/>
      {/* <section className="grid grid-cols-[repeat(auto-fit,100px)] gap-2 justify-center p-4">
=======
        currentTemp={currentData?.currentTemp}
        highTemp={currentData?.highTemp}
        lowTemp={currentData?.lowTemp}
        highFeelsLike={currentData?.highFeelsLike}
        lowFeelsLike={currentData?.lowFeelsLike}
        windSpeed={currentData?.windSpeed}
        precip={currentData?.precip}
        iconCode={currentData?.iconCode}
      />
      <section className="grid grid-cols-[repeat(auto-fit,100px)] gap-2 justify-center p-4">
>>>>>>> 08224d96 (Refactor code structure for improved readability and maintainability)
        {dailyData.map((item, index) => (
          <DayCard
            key={index}
            iconCode={item.iconCode}
            timestamp={item.timestamp}
            degree={item.maxTemp}
            // className="border-red-600"
          />
<<<<<<< HEAD
        ))} */}
=======
        ))}
>>>>>>> 08224d96 (Refactor code structure for improved readability and maintainability)
        {/* <DayCard
          // icon={<FaSun className="w-16 h-16" />}
          iconCode={999}
          day="Monday"
          degree={32}
        /> */}
<<<<<<< HEAD
      {/* </section> */}

      {/* <div className="container" style={{
        height:120,
        width:"100%",
        justifyContent:"center",
        textAlign:"center",
        paddingTop:50,
      }}>
        <h4>Hourly data display</h4>
        <hr />
      </div> */}

      <div className="mx-auto w-full max-w-5xl rounded-2xl bg-gradient-to-b from-sky-10 to-blue-10 shadow-lg backdrop-blur-md border border-sky-200" style={{
        marginBottom:20,
        marginTop:75,
      }}>
  <h2 className="text-center text-lg font-semibold text-sky-900 py-4 tracking-wide">
    Hourly Air Quality Forecast
  </h2>
  </div>



      <table className="w-full text-center border-spacing-0">
        <tbody>

          {hourlyDisplayData.map((item, index) => (
            <TableRow
  key={index}
  timestamp={item.timestamp}
  iconCode2={item.iconCode}
  aqi={item.aqi}
  pm25={item.pm25}
  pm10={item.pm10}
  no2={item.no2}
  so2={item.so2}
  o3={item.o3}
  co={item.co}
/>
=======
      </section>

      <table className="w-full text-center border-spacing-0">
        <tbody>
          {hourlyDisplayData.map((item, index) => (
            <TableRow
              key={index}
              maxTemp={item.maxTemp}
              feelsLike={item.feelsLike}
              precip={item.precip}
              timestamp={item.timestamp}
              windSpeed={item.windSpeed}
              iconCode={item.iconCode}
            />
>>>>>>> 08224d96 (Refactor code structure for improved readability and maintainability)
          ))}
        </tbody>
      </table>
      {hourlyDisplayData.length < hourlyData.length && (
        <div className="flex justify-center items-center my-5">
          <button
            onClick={() =>
              setCurrentHourlyDispayIndex(
                currentHourlyDispayIndex + HOURLY_DATA_DISPLAY_LIMIT
              )
            }
            className="p-4 m-4 border rounded-lg border-foregroundColor bg-foregroundColor text-white text-sm"
          >
            Load More
          </button>
        </div>
      )}
<<<<<<< HEAD
      <footer className="w-full bg-[#A9D6E5] text-[#023E8A] mt-10 py-8 px-6 rounded-t-2xl shadow-md">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-2xl font-semibold mb-6">More About Air Quality</h2>

        {/* ✅ Single UL with multiple columns */}
        <ul className="list-disc list-inside text-left text-base columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-6 space-y-2">
          <li>AQI : <a href="https://www.aqi.in/blog/en-in/aqi/">Air Quality Index</a></li>
          <li>PM 2.5 : <a href="https://ww2.arb.ca.gov/resources/inhalable-particulate-matter-and-health#:~:text=Some%20of%20the%20particulate%20matter,burning%20wood%2C%20candles%20or%20incense.">Particulate Matter 2.5</a></li>
          <li>NO<sub>2</sub> : <a href="https://www.airnow.gov/publications/air-quality-index/air-quality-guide-for-no2/">Nitrogen Dioxide</a></li>
          <li>SO<sub>2</sub> : <a href="https://www.epa.gov/so2-pollution/sulfur-dioxide-basics">Sulphur Dioxide</a></li>
          <li>O<sub>3</sub> : <a href="https://www.breeze-technologies.de/de/blog/ozone-o3/">Ozone</a></li>
          <li>CO : <a href="https://www.epa.gov/co-pollution/basic-information-about-carbon-monoxide-co-outdoor-air-pollution">Carbon Monooxide</a></li>
          <li>PM 10 : <a href="https://ww2.arb.ca.gov/resources/inhalable-particulate-matter-and-health#:~:text=Some%20of%20the%20particulate%20matter,burning%20wood%2C%20candles%20or%20incense.">Particulate Matter with diameter 10</a></li>
        </ul>

        <p className="text-sm mt-8 text-[#005F73]">
          © {new Date().getFullYear()} Air Quality Monitor | Created by{" "}
          <span className="font-semibold">SY IT [MITAOE]</span>
        </p>
      </div>
    </footer>
    </main>
    
=======
    </main>
>>>>>>> 08224d96 (Refactor code structure for improved readability and maintainability)
  );
}
