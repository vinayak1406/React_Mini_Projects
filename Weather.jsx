import React, { useState,useRef } from 'react'
import * as FaIcons from 'react-icons/fa'
const API_KEY = 'Get the API key from OpenWeather'
const Weather = () => {
    const inputRef = useRef(null)
    const  [api, setAPI] = useState(null)
    const[showweather,setShowweather] = useState(null)
    const WeatherTypes = [
        {type:'Clear',icons:<FaIcons.FaSun/>},
        {type:'Rain',icons:<FaIcons.FaCloudShowersHeavy/>},
        {type:'Snow',icons:<FaIcons.FaSnowman/>},
        {type:'Clouds',icons:<FaIcons.FaCloud/>},
        {type:'Sunny',icons:<FaIcons.FaRegSun/>},
       {type:'Temp',icons:<FaIcons.FaThermometer/>}
    ]
    const featch  = async ()=>{
        const URL = `https://api.openweathermap.org/data/2.5/weather?q=${inputRef.current.value}&units=metric&appid=${API_KEY}`
       fetch(URL).then((res)=>res.json()).then((data)=>{setAPI(null)
      
         setShowweather(
        WeatherTypes.filter((weather)=>weather.type=== data.weather[0].main)
        ) 
        console.log(data)
        setAPI(data)}).catch((err)=>{console.log(err)})
}
  return (
    <div className='bg-gray-800 h-screen grid place-items-center'>
        <div className='bg-white w-96 p-4 rounded-md'>
            <div className=' flex-1 justify-between items-center'>
        <input type="text" ref={inputRef } placeholder='Enter the city' className='text-xl border-b p-1 border-gray-200 font-semibold' />
           <button className='w-8 left-5' onClick={featch}>
            <FaIcons.FaSearch/>
           </button>
            </div>
            <div>
              { showweather && (
                  <div className='text-center flex flex-col gap-6 mt-10'>
               { api && <p className=' text-xl font-semibold'>{api?.name + ',' + api?.sys?.country}</p>}
                 <h3 className='text-5xl font-bold  flex justify-center align-middle '> {showweather[0]?.icons}</h3>
                 <h5 className='text-3xl font-semibold'>{showweather[0]?.type}</h5>
                 {api && (
                 <>
                 <div className='flex justify-center h-9 mt-3'>
                  {WeatherTypes[4].icons} 
                  <h2 className='text-2xl '>{api?.main?.temp}&#176;C</h2>
                 </div>
                 </>)}  
                </div>
                 
              )}
            </div>
        </div>
    </div>
  )
}

export default Weather