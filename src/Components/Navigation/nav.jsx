import { NavLink } from 'react-router-dom';
import './nav.scss';

function Navigation(){
 return (
 <ul className='Nav'>
    <NavLink to="/" className={(nav)=>(nav.isActive ? "Nav_li Active": "Nav_li")}>
        <li >Accueil</li>
    </NavLink>
    <NavLink to="/About" className={(nav)=>(nav.isActive ? "Nav_li Active": "Nav_li")}>
        <li >A propos</li>
    </NavLink>
 </ul>
)
}

export default Navigation;