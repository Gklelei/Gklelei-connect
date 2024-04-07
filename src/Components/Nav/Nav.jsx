import './Nav.css'
import logo from '../../assets/logo3.png'
import { useState } from 'react'
import nav_underline from '../../assets/nav_underline.svg'
import AnchorLink from 'react-anchor-link-smooth-scroll'
const Nav = () => {
    const [menu, setMenu] = useState('')
    return (
        <div className="nav">
            <img src={logo} alt="logo" />
            <ul className="nav-menue">
                <li> <AnchorLink className='anchor-link' offset={50} href='#'><p onClick={() => setMenu('Home')}>Home</p></AnchorLink> {menu === 'Home' ? <img src={nav_underline} alt='nav-underline' /> : <></>}</li>
                <li> <AnchorLink className='anchor-link' offset={50} href='#about'><p onClick={() => setMenu('About')}>About Me</p></AnchorLink> {menu === 'About' ? <img src={nav_underline} alt='nav-underline' /> : <></>}</li>
                <li><AnchorLink className='anchor-link' offset={50} href='#services'><p onClick={() => setMenu('Services')}>Services</p></AnchorLink>{menu === 'Services' ? <img src={nav_underline} alt='nav-underline' /> : <></>}</li>
                <li><AnchorLink className='anchor-link' offset={50} href='#work'><p onClick={() => setMenu('Work')}>Portfolio</p></AnchorLink>{menu === 'Work' ? <img src={nav_underline} alt='nav-underline' /> : <></>}</li>
                <li><AnchorLink className='anchor-link' offset={50} href='#contact'><p onClick={() => setMenu('Contact')}>Contact</p></AnchorLink>{menu === 'Contact' ? <img src={nav_underline} alt='nav-underline' /> : <></>}</li>
            </ul>
            <div className="nav-connect">
                <AnchorLink className='anchor-link' offset={50} href='#contact'>connect with me</AnchorLink>
            </div>
        </div>
    )
}

export default Nav