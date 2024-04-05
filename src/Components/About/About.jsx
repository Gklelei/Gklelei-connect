import './About.css'
import about_img from '../../assets/gklelei.jpg'
import theme from '../../assets/theme_pattern.svg'
const About = () => {
    return (
        <div className="about">
            <div className="about-title">
                <h1>About Me</h1>
                <img src={theme} alt="theme-img" />
            </div>
            <div className="about-section">
                <div className="about-left" >
                    <img src={about_img} alt="profile-image" width={'300px'} />
                </div>
                <div className="about-right">
                    <div className="about-param">
                        <p>Passionate and dedicated software engineer with a relentless enthusiasm for turning ideas into reality through code. I thrive on challenges and am committed to delivering high-quality solutions that meet both user needs and business objectives.</p>
                        <p> With a strong foundation in software development principles and a keen eye for detail, I excel in designing, implementing, and maintaining robust and scalable applications. I am constantly learning and adapting to new technologies to stay at the forefront of the ever-evolving tech landscape. Lets build something amazing together.</p>
                    </div>
                    <div className="about-skills">
                        <div className="about-skill">
                            <p>HTML/CSS</p>
                            <hr style={{ width: '80%' }} />
                        </div>
                        <div className="about-skill">
                            <p>JavaScript</p>
                            <hr style={{ width: '70%' }} />
                        </div>
                        <div className="about-skill">
                            <p>React</p>
                            <hr style={{ width: '60%' }} />
                        </div>
                        <div className="about-skill">
                            <p>Node js</p>
                            <hr style={{ width: '30%' }} />

                        </div>
                        <div className="about-skill">
                            <p>Oblect Oriented Programming</p>
                            <hr style={{ width: '80%' }} />
                        </div>
                        <div className="about-skill">
                            <p>Python</p>
                            <hr style={{ width: '50%' }} />
                        </div>
                    </div>
                </div>
            </div>
            <div className="about-achivments">
                <div className="about-achivment">
                    <h1>2+</h1>
                    <p>YEARS OF EXPERIENCE</p>
                </div>
                <hr />
                <div className="about-achivment">
                    <h1>10+</h1>
                    <p>PROJECTS COMPLETED</p>
                </div>
                <hr />
                <div className="about-achivment">
                    <h1>2</h1>
                    <p>Happy Clients</p>
                </div>
            </div>
        </div>
    )
}

export default About