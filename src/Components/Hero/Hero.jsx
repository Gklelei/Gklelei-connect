import './Hero.css'
import profile_image from '../../assets/gklelei.jpg'
const Hero = () => {
    return (
        <div className="hero">
            <img src={profile_image} alt="profile-img" />
            <h1> <span>Hi,Gklelei Here, </span>  A MERN stack Developer Based In Kenya</h1>
            <p> I AM MERN STACK SOFTWARE DEVELOPER </p>
            <div className="hero-action">
                <div className="hero-connect">
                    Connect With Me
                </div>
                <div className="hero-resume">
                    My Resume
                </div>
            </div>
        </div>
    )
}

export default Hero