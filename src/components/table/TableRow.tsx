import { getIcon } from "@/util/IconCode";
import { getAQIIcon } from "@/util/IconCode2";
import { formatTimestampToDay, formatTimestampToNumericHour } from "@/util/Date";

type TableRowProps = {
  timestamp: number | undefined;
  iconCode2?: number | undefined;
  aqi: number | undefined;
  pm25: number | undefined;
  pm10: number | undefined;
  no2: number | undefined;
  so2: number | undefined;
  o3: number | undefined;
  co: number | undefined;
};

export default function TableRow({
  timestamp = 999,
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
  const dayDate = formatTimestampToDay(timestamp);
  const hourDate = formatTimestampToNumericHour(timestamp);

  return (
    <tr className="[&>td]:p-2 [&>td>*]:gap-1 even:bg-sky-300/60 odd:bg-sky-300/30">
      
      {/* Time */}
      <td>
        <div className="flex flex-col items-center">
          <div className="uppercase font-bold text-xs text-foregroundSecondaryColor">{dayDate}</div>
          <div className="uppercase">{hourDate}</div>
        </div>
      </td>

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
        </div>
      </td>
    </tr>
  );
}
