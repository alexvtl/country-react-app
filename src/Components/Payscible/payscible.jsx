
import axios from 'axios'
import { useEffect, useState } from 'react'
import './payscible.scss'

function Payscible({pays}){

const [weatherdata,setweatherdata] = useState(null)   
const apicall = (a,b) => {
        return axios.get("https://api.openweathermap.org/data/2.5/weather?q="+a.capital[0]+"&lang=fr&appid="+b.access_key+"&units="+b.units)
        .then((data) => setweatherdata(data.data))
}
   

useEffect(()=>{
    const param = {
        access_key: "420c11b243ae8ddcd73e62113d788cf1",
        units: "metric"
    } 
apicall(pays,param) 
},[pays])

    

if(weatherdata){
    let timecity = new Date()
    let timezone = ((weatherdata.timezone/3600)*3600*1000)-(60*60*1000)
    timecity.setTime(timecity.getTime()+timezone)
return (
    <div className='payscible'>
        <h1>{pays.translations.fra.common}</h1>
    <section className="payscible_section">
 <img className="payscible_img" src={pays.flags.svg} alt={"drapeau de"+ pays.name.common}/>
 <ul>
 <li>Capital: {pays.capital[0]}<ul><li>time: {timecity.getHours()+":"+timecity.getMinutes()}</li><li> température: {weatherdata.main.temp}℃</li></ul></li>
 </ul>
 <iframe className="payscible_loca" title={pays.name.common} src={'//maps.google.com/maps?q='+pays.latlng[0]+','+pays.latlng[1]+'&z=3&output=embed'}></iframe>

 <ul>
    <li>Continent: {pays.continents[0]}</li>
    <li>Population: {pays.population}</li>
    <li>Habitant:{pays.demonyms.fra.m} Habitante:{pays.demonyms.fra.f}</li>
    <li>Début de semaine: {pays.startOfWeek}</li>
    <li>Conduite: {pays.car.side==="right"?"Droite":"Gauche"}</li> 
    <li><a href={'https://fr.wikipedia.org/wiki/'+pays.translations.fra.common}>En savoir plus (wikipedia)</a></li> 
 </ul>
    </section>
    </div>
)}
}

export default Payscible