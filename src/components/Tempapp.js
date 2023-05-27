import React, { useEffect } from "react";
import { useState } from "react";
import './css/style.css'


const Tempapp = () => {
    const [city, setCity] = useState(null);
    const [search, setSearch] = useState("mumbai")

    useEffect(() => {
        const fetchApi = async () => {
            const url = `https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=2da0345c1fe353033d0980994dbe6fe4`;
            const response = await fetch(url);

            const reJson = await response.json();
            console.log(reJson);
            setCity(reJson.main);
        }
        fetchApi();
    }, [search])


    return (
        <>
            <div className="box">
                <div className="inputData">
                    <input type="search" className="inputField"
                        onChange={(event) => {
                            setSearch(event.target.value)
                        }}
                    />
                </div>

            
            {
                !city ? (
                    <p>No data found</p>
                ) :
                    (
                        <div>
                            <div className="info">

                                <h2 className="location">
                                    <i className="fa-solid fa-street-view">  {search}</i>
                                </h2>
                                <h1 className="temp">{city.temp}°C </h1>
                                <h3 className="tempmin_min">{city.temp_min}°C |{city.temp_max}°C</h3>


                            </div>
                        </div>
                        
                    )
            }

</div>
        </>
    )
}
export default Tempapp;