export interface forecastModel {
  latitude: number
  longitude: number
  generationtime_ms: number
  utc_offset_seconds: number
  timezone: string
  timezone_abbreviation: string
  elevation: number
  hourly_units: HourlyUnits
  hourly: Hourly
}

export interface HourlyUnits {
  time: string
  temperature_2m: string
  precipitation: string
  windspeed_10m: string
}

export interface Hourly {
  time: string[]
  temperature_2m: number[]
  precipitation: number[]
  windspeed_10m: number[]
}
