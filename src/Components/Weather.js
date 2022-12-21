import axios from "axios"
import React, { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import { selectDisplay } from "../redux/slices/displayCountrySlice"

const Weather = () => {
    const [weather, setWeather] = useState()
    const display = useSelector(selectDisplay)

    const lat = display.capitalInfo.latlng[0]
    const long = display.capitalInfo.latlng[1]

    useEffect(() => {
        const options = {
        method: 'GET',
        url: 'https://weatherapi-com.p.rapidapi.com/current.json',
        params: {q: `${lat},${long}`},
        headers: {
            'X-RapidAPI-Key': 'f45492dc24msh5dfcf291828fa99p1b3f3fjsnedd29473e9e4',
            'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
        }
        };

        axios
            .request(options)
            .then((res) => {
            console.log(res.data.current)
            setWeather(res.data.current)
        }).catch((err) => {
            console.error(err)
        })
    }, [])

    return (
        <div>
            <table className="overview-table">
                <tr>
                    <td>Conditions: </td>
                    <td>{weather.condition.text}</td>
                </tr>
                <tr>
                    <td>Temperature: </td>
                    <td>{weather.temp_f} ºF</td>
                    <td>{weather.temp_c} ºC</td>
                </tr>
                <tr>
                    <td>Feels Like: </td>
                    <td>{weather.feelslike_f} ºF</td>
                    <td>{weather.feelslike_c} ºC</td>
                </tr>
                <tr>
                    <td>Humidity: </td>
                    <td>{weather.humidity}%</td>
                </tr>
                <tr>
                    <td>Wind Speed: </td>
                    <td>{weather.wind_mph} mph</td>
                    <td>{weather.wind_kph} kph</td>
                </tr>
            </table>
        </div>
    )
}

export default Weather