import axios from "axios";
import { useEffect, useState } from "react";
import './countries.scss'
import Card from "../Card/card";
import Cover from "../../img/coverhome.jpeg"
function Countries(){
    const [Data,setData] = useState([])
    
    const [Range,setRange] = useState(36)
    const [radiocheck, setradio] = useState("")

    useEffect(()=>{
        axios.get('https://restcountries.com/v3.1/all')
        .then(res => {setData(res.data);console.log(res.data)})
    },[])


    const continents =["Africa","Europe","Asia","America","Oceania"]

     
return(
    <div id="main">
        <img className="coverhome" src={Cover} alt="cover" />
    <h1 className="title">Countries</h1>
    <ul className="filtre">
        <p className="filtre_range_p">{Range}</p>
        <input className="filtre_range" type="range" min="1" max="250" defaultChecked={Range} onChange={(e)=> setRange(e.target.value)} />
        {
            continents.map((continent) => (
                <div key={continent}>
                <input type="radio" id={continent} name="radiocontinent" checked={continent===radiocheck} value={continent} onChange={(e)=>setradio(e.target.id)}/>
                <label htmlFor={continent}>{continent}</label>
                </div>
            ))
        }
    </ul>
   { radiocheck && (<button className="clear_button" onClick={()=>setradio("")}>Annuler la recherche</button>)}
    <ul id="countries">
         
        {
            Data.filter((el)=> el.continents[0].includes(radiocheck))
            .sort((a,b)=> b.population - a.population)
            .slice(0,Range)
            .map((pays, index)=> (
                <Card key={index} pays={pays}/>    
            ))
        }
        </ul>
        </div>
)
}

export default Countries;