import './Hero.css'
import profile_image from '../../assets/gklelei.jpg'
const Hero = () => {
    return (
        <div className="hero">
            <img src={profile_image} alt="profile-img" />
            <h1> <span>Hi,Gklelei Here, </span>  A MERN stack Developer Based In Kenya</h1>
            <p>Passionate and dedicated software engineer with a relentless enthusiasm for turning ideas into reality through code. I thrive on challenges and am committed to delivering high-quality solutions that meet both user needs and business objectives. With a strong foundation in software development principles and a keen eye for detail, I excel in designing, implementing, and maintaining robust and scalable applications. I am constantly learning and adapting to new technologies to stay at the forefront of the ever-evolving tech landscape. Lets build something amazing together.</p>
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