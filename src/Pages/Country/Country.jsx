import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import Payscible from "../../Components/Payscible/payscible"

function Country(){
   const {id} = useParams()
    const [Data,setData] = useState([])
    useEffect(()=>{
        axios.get('https://restcountries.com/v3.1/all')
        .then((res)=>setData(res.data))
    },[])
return (
   <section>
        {
            Data.filter((pays)=> pays.name.common + pays.area === id).map((payscible,index)=>(
           <Payscible key={index} pays={payscible}/>
            ))
        }
    </section>
)
}

export default Country