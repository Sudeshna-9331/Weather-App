import React, { useEffect, useState } from 'react';
import './index.css';

const App = () => {
    const [city, setCity] = useState("Kolkata");
    const [search, setSearch] = useState("Kolkata");


    useEffect(() => {   
        const fetchAPI = async () => {
            console.log("inside FetchAPI");

            const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=514370f1b94f14093b40c60ddb113a46`);

            // console.log(response);
            const resJSON = await response.json();
            //console.log(resJSON);
            console.log(resJSON.name);
            console.log(resJSON.temp);
            console.log(resJSON.temp_min);
            console.log(resJSON.temp_max);
            setCity(resJSON.main);
        }
        fetchAPI();
    }, [search])

    return (
        <>
            <div className="box">
                <div className="inputData">
                    <input
                        type="search"
                        defaultValue=""
                        className="inputField"
                        onChange={(event) => {
                            setSearch(event.target.value)
                        }}
                    />

                    {!city ? (
                        <p> No Data Found</p>
                    ) : (<div>
                        <div className="location">
                            <div className="place">
                                <i className="fas fa-street-view"></i>
                                <h2> {search} </h2>
                            </div>
                            <h1 className="temperature">
                                {city.temp} °C
                            </h1>
                            <h3 className="temp_min_max"> Min: {city.temp_min}°C | Max: {city.temp_max}°C </h3>
                        </div>
                        <div className="wave one"></div>
                        <div className="wave two"></div>
                        <div className="wave three"></div>
                    </div>
                        )}


                </div>
            </div>
        </>
    )
};

export default App;