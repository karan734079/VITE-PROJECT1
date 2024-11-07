import { useState } from 'react';
import search from '../images/search.png';
import clouds from '../images/clouds.png';
import clear from '../images/clear.png';
import drizzle from '../images/drizzle.png';
import haze from '../images/haze.png';
import rain from '../images/rain.png';
import snow from '../images/snow.png';
import humidity from '../images/humidity.png';
import wind from '../images/wind.png';
import useWeather from '../hooks/useWeather';
import { useDispatch, useSelector } from 'react-redux';
import { addWeather, clearHistory } from '../store/weatherSlice';

const Weather = () => {
    const weatherImages = {
        Clouds: clouds,
        Clear: clear,
        Drizzle: drizzle,
        Haze: haze,
        Rain: rain,
        Snow: snow,
    };
    const dispatch = useDispatch();
    const history = useSelector(state => state.weather.history);

    const [city, setCity] = useState('New York');
    const [imgSource, setImgSource] = useState(clouds);
    const [temperature, setTemperature] = useState(22);
    const [humid, setHumid] = useState(50);
    const [windSpeed, setWindSpeed] = useState(15);

    const data = useWeather(city);

    const handleSearch = () => {
        setTemperature(data?.main?.temp);
        setHumid(data?.main?.humidity);
        setWindSpeed(data?.wind?.speed);
        const weatherCondition = data?.weather?.[0]?.main;
        setImgSource(weatherImages[weatherCondition] || clouds);

        dispatch(addWeather({ temperature: data?.main?.temp, humid: data?.main?.humidity, windSpeed: data?.wind?.speed, city }));

        setCity('');
    };

    return (
        <div className="bg-gradient-to-r from-teal-500 to-blue-500 min-h-screen flex flex-col py-14">
            <div className="search w-[96%] mx-auto">
                <input
                    className="w-[90%] p-3 mt-10 rounded-3xl city outline-none border-none focus:ring-0"
                    type="text"
                    placeholder="Enter City Name"
                    spellCheck="false"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                />
                <button
                    className="bg-white p-3 rounded-full cursor-pointer relative top-1.5 mx-4"
                    onClick={handleSearch}
                >
                    <img className="w-5" src={search} alt="search" />
                </button>
            </div>

            <div className="flex flex-col justify-evenly items-center">
                <img className="main-img mr-12x" src={imgSource} alt="weather condition" />
            </div>

            <div className="flex justify-around mt-5">
                <div className="text-white text-center flex p-5">
                    <img className="w-10" src={humidity} alt="humidity" />
                    <div className="mx-5">
                        <h3 className="text-xl font-bold text-white humidity">{humid}%</h3>
                        <h3 className="text-xl font-bold text-white">Humidity</h3>
                    </div>
                </div>
                <div>
                    <h2 className="text-3xl font-bold text-white temp">{temperature}&deg;C</h2>
                    <h2 className="text-3xl font-bold text-white city-name">Temperature</h2>
                </div>
                <div className="text-white text-center flex p-5">
                    <img className="w-10" src={wind} alt="wind" />
                    <div className="mx-5">
                        <h3 className="text-xl font-bold text-white speed">{windSpeed} km/h</h3>
                        <h3 className="text-xl font-bold text-white">Wind Speed</h3>
                    </div>
                </div>
            </div>

            {/* Recent History Section */}
            <div className="history-section bg-white p-5 mt-1 mx-auto rounded-lg w-[96%]  max-h-60 overflow-y-auto scrollbar-hidden">
                <div className='flex justify-between'>
                <h2 className="text-2xl font-bold text-black mb-2">Recent Searches</h2>
                <button onClick={() => dispatch(clearHistory())} className="bg-red-500 text-white font-bold py-1 px-2 mb-2 rounded hover:bg-red-600">
                    Clear
                </button>
                </div>
                <ul className="space-y-3">
                    <li className="flex justify-between p-2 bg-white rounded-lg shadow">
                        <span className="text-xl font-bold w-[25%]">City</span>
                        <span className="text-xl font-bold">Temperature</span>
                        <span className="text-xl font-bold">Humidity</span>
                        <span className="text-xl font-bold">Wind Speed</span>
                    </li>
                    {history.filter((item) => item.city).map((item, index) => (
                        <li key={index} className="flex justify-between  p-2 bg-white rounded-lg shadow">
                            <span className="text-xl font-medium text-blue-500 w-[25%]">{item.city}</span>
                            <span className="text-xl font-medium text-blue-500 ">{item.temperature}&deg;C</span>
                            <span className="text-xl font-medium text-blue-500 ">{item.humid}%</span>
                            <span className="text-xl font-medium text-blue-500 ">{item.windSpeed} km/h</span>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default Weather;
