import './Footer.css'
import footer_logo from '../../assets/logo3.png'
import user_icon from '../../assets/user_icon.svg'
const Footer = () => {
    return (
        <div className="footer">
            <div className="footer-top">
                <div className="footer-top-left">
                    <img src={footer_logo} alt="footer-logo" />
                    <p> MERN STACK SOFTWARE DEVELOPER </p>
                </div>
                <div className="footer-top-right">
                    <div className="footer-email-input">
                        <img src={user_icon} alt="user-icon" />
                        <input type="email" placeholder='Enter Your Email' />
                    </div>
                    <div className="footer-subscribe">
                        Subscribe
                    </div>
                </div>
            </div>
            <hr />
            <div className="footer-bottom">
                <p className="footer-bottom-left">@2024 Gklelei. All rights reserved</p>
                <div className="footer bottom-right">
                    <p>Terms Of Services</p>
                    <p>Privacy Policy</p>
                    <p>Connect With Me</p>
                </div>
            </div>
        </div>
    )
}

export default Footer