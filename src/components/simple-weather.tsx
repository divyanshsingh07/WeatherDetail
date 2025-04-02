import { Card, CardContent } from "./ui/card";
import { useWeatherQuery } from "@/hooks/use-weather";
import { useGeolocation } from "@/hooks/use-geolocation";
import { WeatherSkeleton } from "./loading-skeleton";
import { Alert, AlertDescription, AlertTitle } from "./ui/alert";
import { AlertTriangle } from "lucide-react";

export function SimpleWeather() {
  const { coordinates, error: locationError, isLoading: locationLoading } = useGeolocation();
  const weatherQuery = useWeatherQuery(coordinates);

  if (locationLoading) {
    return <WeatherSkeleton />;
  }

  if (locationError) {
    return (
      <Alert variant="destructive">
        <AlertTriangle className="h-4 w-4" />
        <AlertTitle>Location Error</AlertTitle>
        <AlertDescription>{locationError}</AlertDescription>
      </Alert>
    );
  }

  if (!weatherQuery.data) {
    return null;
  }

  const { main, weather } = weatherQuery.data;

  return (
    <Card className="w-full max-w-md mx-auto">
      <CardContent className="pt-6">
        <div className="flex flex-col items-center gap-4">
          <div className="text-4xl font-bold">
            {Math.round(main.temp)}°C
          </div>
          <div className="text-xl text-muted-foreground">
            {weather[0].description}
          </div>
          <div className="grid grid-cols-2 gap-4 w-full mt-4">
            <div className="text-center">
              <div className="text-sm text-muted-foreground">Feels like</div>
              <div className="font-medium">{Math.round(main.feels_like)}°C</div>
            </div>
            <div className="text-center">
              <div className="text-sm text-muted-foreground">Humidity</div>
              <div className="font-medium">{main.humidity}%</div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
} 