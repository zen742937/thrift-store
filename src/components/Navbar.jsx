import { Link } from 'react-router-dom'
import logo from '../assets/logo.png'

function Navbar(){
    return (
        <nav className="navBar">
            <Link to="/"><img src={logo} alt="RE:ZEN" className="navLogo"/></Link>
            <div>
                <p>🛒 Cart</p>
            </div>
        </nav>
    )
}

export default Navbar