import Logo from "../Logo/logo"
import Navigation from "../Navigation/nav"
import './header.scss'

function Header(){
    return (
        <div className="header">
   <Logo/>
   <Navigation/>
        </div>
     
    )
}

export default Header;