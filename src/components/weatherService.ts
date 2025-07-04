import axios from 'axios'

const API_KEY = 'e46d6b1c945f2e9983f0735f8928ea2f'
const LAT = 20.1367
const LON = -98.6746
const UNITS = 'metric'
const LANG = 'es'

interface WeatherData {
  descripcion: string
  temperatura: number
  humedad: number
  icono: string
}

export async function getWeatherRealDelMonte(): Promise<WeatherData> {
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${LAT}&lon=${LON}&appid=${API_KEY}&units=${UNITS}&lang=${LANG}`
  const { data } = await axios.get(url)
  return {
    descripcion: data.weather[0].description,
    temperatura: Math.round(data.main.temp),
    humedad: data.main.humidity,
    icono: data.weather[0].icon,
  }
}
