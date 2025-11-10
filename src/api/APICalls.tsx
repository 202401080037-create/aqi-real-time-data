// ✅ Do NOT put "use server" here
import axios from "axios";

export type CurrentAQIType = {
  aqi: number;
  pm25: number;
  pm10: number;
  no2: number;
  so2: number;
  o3: number;
  co: number;
};

export type HourlyAQIType = {
  timestamp: number;
  aqi: number;
  pm25: number;
  pm10: number;
  no2: number;
  so2: number;
  o3: number;
  co: number;
  iconCode?: number;
};


export type CitySearchType = {
  id: number;
  name: string;
  latitude: number;
  longitude: number;
};

// ✅ Works in client now
export async function getWeather(lat: number, lon: number, timezone: string) {
  const params = {
    latitude: lat,
    longitude: lon,
    timezone,
    current:
      "european_aqi,pm2_5,pm10,nitrogen_dioxide,sulphur_dioxide,ozone,carbon_monoxide",
    hourly:
      "european_aqi,pm2_5,pm10,nitrogen_dioxide,sulphur_dioxide,ozone,carbon_monoxide",
  };

  const res = await axios.get(
    "https://air-quality-api.open-meteo.com/v1/air-quality",
    { params }
  );

  return {
    current: parseCurrentAQI(res.data),
    hourly: parseHourlyAQI(res.data),
  };
}

function parseCurrentAQI({ current }: any): CurrentAQIType {
  return {
    aqi: Math.round(current.european_aqi),
    pm25: Math.round(current.pm2_5),
    pm10: Math.round(current.pm10),
    no2: Math.round(current.nitrogen_dioxide),
    so2: Math.round(current.sulphur_dioxide),
    o3: Math.round(current.ozone),
    co: Math.round(current.carbon_monoxide),
  };
}

// function parseHourlyAQI({ hourly, current }: any): HourlyAQIType[] {
//   const currentTime = current.time * 1000;

//   return hourly.time
//     .map((t: number, i: number) => ({
//       timestamp: t * 1000,
//       aqi: Math.round(hourly.european_aqi?.[i] ?? 0),
//       pm25: Math.round(hourly.pm2_5?.[i] ?? 0),
//       pm10: Math.round(hourly.pm10?.[i] ?? 0),
//       no2: Math.round(hourly.nitrogen_dioxide?.[i] ?? 0),
//       so2: Math.round(hourly.sulphur_dioxide?.[i] ?? 0),
//       o3: Math.round(hourly.ozone?.[i] ?? 0),
//       co: Math.round(hourly.carbon_monoxide?.[i] ?? 0),
//       iconCode: 50 // placeholder icon
//     }))
//     .filter((entry: any) => entry.timestamp >= currentTime);
// }

function parseHourlyAQI({ hourly, current }: any): HourlyAQIType[] {
  const currentTime = new Date(current.time).getTime();

  return hourly.time
    .map((t: string, i: number) => ({
      timestamp: new Date(t).getTime(),
      aqi: Math.round(hourly.european_aqi?.[i] ?? 0),
      pm25: Math.round(hourly.pm2_5?.[i] ?? 0),
      pm10: Math.round(hourly.pm10?.[i] ?? 0),
      no2: Math.round(hourly.nitrogen_dioxide?.[i] ?? 0),
      so2: Math.round(hourly.sulphur_dioxide?.[i] ?? 0),
      o3: Math.round(hourly.ozone?.[i] ?? 0),
      co: Math.round(hourly.carbon_monoxide?.[i] ?? 0),
      iconCode: 50 // placeholder
    }))
    .filter((entry: any) => entry.timestamp >= currentTime);
}



// ✅ city search still uses axios
export async function getCities(cityName: string) {
  const res = await axios.get(
    "https://geocoding-api.open-meteo.com/v1/search?count=3&language=en&format=json",
    { params: { name: cityName } }
  );

  return (
    res.data.results?.map((item: any) => ({
      id: item.id,
      name: item.name,
      latitude: item.latitude,
      longitude: item.longitude,
    })) ?? []
  );
}
