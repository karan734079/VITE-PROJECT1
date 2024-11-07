import { useEffect, useState } from "react"
import axios from 'axios'

const useWeather = (city) => {
    const [data,setData] = useState("")

    useEffect(()=>{

        const fetchData = async () =>{
            const res = await axios(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=4547d88c13043f840d0f9982089fc006&units=metric`)
       
            setData(res.data)
        }
        
        if(city) fetchData()
    },[city])

    return data;
}

export default useWeather