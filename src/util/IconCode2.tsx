import {
  Wind,
  CloudFog,
  CloudDrizzle,
  CloudLightning,
  Skull,
  Factory,
} from "lucide-react";

export function getAQIIcon(aqi: number) {
  if (aqi <= 100) return { icon: Wind, color: "#00e400", label: "Good" };
  if (aqi <= 120) return { icon: CloudFog, color: "#ffff00", label: "Moderate" };
  if (aqi <= 150) return { icon: CloudDrizzle, color: "#ff7e00", label: "Unhealthy for Sensitive" };
  if (aqi <= 200) return { icon: CloudLightning, color: "#ff0000", label: "Unhealthy" };
  if (aqi <= 250) return { icon: Factory, color: "#8f3f97", label: "Very Unhealthy" };
  return { icon: Skull, color: "#7e0023", label: "Hazardous" };
}
