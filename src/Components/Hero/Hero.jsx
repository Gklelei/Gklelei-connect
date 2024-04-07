import './Hero.css';
import profile_image from '../../assets/gklelei.jpg';
import cv_file from '../../assets/cv.pdf';
import AnchorLink from 'react-anchor-link-smooth-scroll';

const Hero = () => {
    const handleDownloadCV = () => {
        const downloadLink = document.createElement('a');
        downloadLink.href = cv_file; // Use .default to access the file path correctly
        downloadLink.download = 'My_CV.pdf'; // Specify the filename for download
        downloadLink.click();
    };
    return (
        <div className="hero" id='hero'>
            <img src={profile_image} alt="profile-img" />
            <h1><span>Hi, Gklelei Here,</span> A MERN stack Developer Based In Kenya</h1>
            <p>I AM MERN STACK SOFTWARE DEVELOPER</p>
            <div className="hero-action">
                <div className="hero-connect">
                    <AnchorLink className='anchor-link' offset={50} href='#contact'> Connect With Me </AnchorLink>
                </div>
                <div className="hero-resume">
                    <p onClick={handleDownloadCV}>Resume</p>
                </div>
            </div>
        </div>
    );
};

export default Hero;
