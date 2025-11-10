<<<<<<< HEAD
import { getIcon } from "@/util/IconCode";
import { getAQIIcon } from "@/util/IconCode2";
=======
import { FaSun } from "react-icons/fa";
import { getIcon } from "@/util/IconCode";
>>>>>>> 08224d96 (Refactor code structure for improved readability and maintainability)
import { formatTimestampToDay, formatTimestampToNumericHour } from "@/util/Date";

type TableRowProps = {
  timestamp: number | undefined;
<<<<<<< HEAD
  iconCode2?: number | undefined;
  aqi: number | undefined;
  pm25: number | undefined;
  pm10: number | undefined;
  no2: number | undefined;
  so2: number | undefined;
  o3: number | undefined;
  co: number | undefined;
=======
  iconCode?: number | undefined;
  maxTemp: number | undefined;
  feelsLike: number | undefined;
  windSpeed: number | undefined;
  precip: number | undefined;
>>>>>>> 08224d96 (Refactor code structure for improved readability and maintainability)
};

export default function TableRow({
  timestamp = 999,
<<<<<<< HEAD
  iconCode2 = 999,
  aqi = 0,
  pm25 = 0,
  pm10 = 0,
  no2 = 0,
  so2 = 0,
  o3 = 0,
  co = 0,
}: TableRowProps) {

  const { icon: Icon, color, label } = getAQIIcon(aqi);
=======
  iconCode = 999,
  maxTemp = 31,
  feelsLike = 30,
  windSpeed = 19,
  precip = 0.1,
}: TableRowProps) {

  const Icon = getIcon(iconCode);
>>>>>>> 08224d96 (Refactor code structure for improved readability and maintainability)
  const dayDate = formatTimestampToDay(timestamp);
  const hourDate = formatTimestampToNumericHour(timestamp);

  return (
<<<<<<< HEAD
    <tr className="[&>td]:p-2 [&>td>*]:gap-1 even:bg-sky-300/60 odd:bg-sky-300/30">
      
      {/* Time */}
      <td>
        <div className="flex flex-col items-center">
=======
    <tr className="[&>td]:p-2 [&>td>*]:gap-1 even:bg-sky-300/60 odd:bg-sky-300/30 ">
      {/* [&>*:nth-child(even)]:bg-borwn-50 */}
      <td>
        <div className="flex flex-col items-center ">
>>>>>>> 08224d96 (Refactor code structure for improved readability and maintainability)
          <div className="uppercase font-bold text-xs text-foregroundSecondaryColor">{dayDate}</div>
          <div className="uppercase">{hourDate}</div>
        </div>
      </td>
<<<<<<< HEAD

      {/* Icon */}
      <td>
        <Icon className="w-12 h-12 object-contain" />
      </td>

      {/* AQI */}
      <td>
        <div className="flex flex-col items-center">
          <div className="uppercase font-bold text-xs text-foregroundSecondaryColor">AQI</div>
          <div>{aqi}</div>
        </div>
      </td>

      {/* PM2.5 */}
      <td>
        <div className="flex flex-col items-center">
          <div className="uppercase font-bold text-xs text-foregroundSecondaryColor">PM2.5</div>
          <div>{pm25}</div>
        </div>
      </td>

      {/* PM10 */}
      <td>
        <div className="flex flex-col items-center">
          <div className="uppercase font-bold text-xs text-foregroundSecondaryColor">PM10</div>
          <div>{pm10}</div>
        </div>
      </td>

      {/* NO2 */}
      <td>
        <div className="flex flex-col items-center">
          <div className="uppercase font-bold text-xs text-foregroundSecondaryColor">NO₂</div>
          <div>{no2}</div>
        </div>
      </td>

      {/* SO2 */}
      <td>
        <div className="flex flex-col items-center">
          <div className="uppercase font-bold text-xs text-foregroundSecondaryColor">SO₂</div>
          <div>{so2}</div>
        </div>
      </td>

      {/* O3 */}
      <td>
        <div className="flex flex-col items-center">
          <div className="uppercase font-bold text-xs text-foregroundSecondaryColor">O₃</div>
          <div>{o3}</div>
        </div>
      </td>

      {/* CO */}
      <td>
        <div className="flex flex-col items-center">
          <div className="uppercase font-bold text-xs text-foregroundSecondaryColor">CO</div>
          <div>{co}</div>
=======
      <td>
        {/* <FaSun className="w-12 h-12 object-contain" /> */}
        <Icon className="w-12 h-12 object-contain" />
      </td>
      <td>
        <div className="flex flex-col items-center">
          <div className="uppercase font-bold text-xs text-foregroundSecondaryColor">TEMP</div>
          <div>{maxTemp}&deg;</div>
        </div>
      </td>
      <td>
        <div className="flex flex-col items-center">
          <div className="uppercase font-bold text-xs text-foregroundSecondaryColor">FL TEMP</div>
          <div>{feelsLike}&deg;</div>
        </div>
      </td>
      <td>
        <div className="flex flex-col items-center">
          <div className="uppercase font-bold text-xs text-foregroundSecondaryColor">WIND</div>
          <div>
            {windSpeed}<span className="font-normal text-sm">mph</span>
          </div>
        </div>
      </td>
      <td>
        <div className="flex flex-col items-center">
          <div className="uppercase font-bold text-xs text-foregroundSecondaryColor">PRECIP</div>
          <div>
            {precip}<span className="font-normal text-sm">in</span>
          </div>
>>>>>>> 08224d96 (Refactor code structure for improved readability and maintainability)
        </div>
      </td>
    </tr>
  );
}
