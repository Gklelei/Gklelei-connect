import './Nav.css'
import logo from '../../assets/logo3.png'
import { useRef, useState } from 'react'
import nav_underline from '../../assets/nav_underline.svg'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import menu_open from '../../assets/menu_open.svg'
import menu_close from '../../assets/menu_close.svg'
const Nav = () => {
    const [menu, setMenu] = useState('')
    const menuRef = useRef()
    const openMenue = () => {
        menuRef.current.style.right = "0"
    }
    const closeMenue = () => {
        menuRef.current.style.right = "-350px"
    }
    return (
        <div className="nav">
            <img src={logo} alt="logo" />
            <img src={menu_open} alt="menu-open" className='nav-menu-open' onClick={openMenue} />
            <ul className="nav-menue" ref={menuRef}>
                <img src={menu_close} alt="menu-close" className='nav-menu-close' onClick={closeMenue} />
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