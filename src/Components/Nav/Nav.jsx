import './Nav.css'
import logo from '../../assets/logo3.png'
const Nav = () => {
    return (
        <div className="nav">
            <img src={logo} alt="logo" />
            <ul className="nav-menue">
                <li>Home</li>
                <li>About Me</li>
                <li>Services</li>
                <li>Portfolio</li>
                <li>Contact</li>
            </ul>
            <div className="nav-connect">
                connect with me
            </div>
        </div>
    )
}

export default Nav