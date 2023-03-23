import { NavLink } from "react-router-dom";
import "./card.scss"
function Card({pays}){
return (
    <NavLink className='link' to={"/country/" + pays.name.common + pays.area}>
    <li className="Card">
        <img className="Card_img" src={pays.flags.svg} alt={pays.flags.alt}/>
        <div className="Card_infos">
            <h2>{pays.translations.fra.common}</h2>
            <p>pop: {parseFloat(pays.population/1000000).toFixed(3) === "0.000" ? pays.population : parseFloat(pays.population/1000000).toFixed(3) + "(millions)"}</p>
        </div>
    </li>
    </NavLink>
)
}

export default Card;
