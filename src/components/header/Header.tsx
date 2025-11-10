import { getIcon } from "@/util/IconCode";
import { getAQIIcon } from "@/util/IconCode2";

type HeaderProps = {
  aqi: number | undefined;
  pm25: number | undefined;
  pm10: number | undefined;
  no2: number | undefined;
  so2: number | undefined;
  o3: number | undefined;
  co: number | undefined;
  iconCode2: number | undefined;
};

export default function Header({
  aqi = 0,
  pm25 = 0,
  pm10 = 0,
  no2 = 0,
  so2 = 0,
  o3 = 0,
  co = 0,
  iconCode2 = 999,
}: HeaderProps) {

   const { icon: Icon, color, label } = getAQIIcon(aqi);

  return (
    <header className="flex items-center my-4 mx-10">
      <div className="flex w-1/2 justify-center items-center m-0.5 p-0.5 border-r-2 border-foregroundColor">
        {Icon && <Icon className="w-20 h-20 object-contain" />}
        <div className="text-3xl ml-4">
          AQI: <span data-current-aqi>{aqi}</span>
        </div>
      </div>

      <div className="grid w-1/2 gap-4 justify-around grid-cols-3 grid-rows-2">

        <div className="flex flex-col items-center">
          <div className="uppercase font-bold text-xs text-foregroundSecondaryColor">PM2.5</div>
          <div><span>{pm25}</span></div>
        </div>

        <div className="flex flex-col items-center">
          <div className="uppercase font-bold text-xs text-foregroundSecondaryColor">PM10</div>
          <div><span>{pm10}</span></div>
        </div>

        <div className="flex flex-col items-center">
          <div className="uppercase font-bold text-xs text-foregroundSecondaryColor">NO₂</div>
          <div><span>{no2}</span></div>
        </div>

        <div className="flex flex-col items-center">
          <div className="uppercase font-bold text-xs text-foregroundSecondaryColor">SO₂</div>
          <div><span>{so2}</span></div>
        </div>

        <div className="flex flex-col items-center">
          <div className="uppercase font-bold text-xs text-foregroundSecondaryColor">O₃</div>
          <div><span>{o3}</span></div>
        </div>

        <div className="flex flex-col items-center">
          <div className="uppercase font-bold text-xs text-foregroundSecondaryColor">CO</div>
          <div><span>{co}</span></div>
        </div>

      </div>
    </header>
  );
}
