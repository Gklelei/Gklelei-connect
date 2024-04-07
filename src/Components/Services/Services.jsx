import { useState } from 'react';
import './Services.css';
import theme from '../../assets/theme_pattern.svg';
import Services_Data from '../../assets/services_data';
import arrow_icon from '../../assets/arrow_icon.svg';

const Services = () => {
    const [expandedSections, setExpandedSections] = useState({});

    const toggleFullText = (index) => {
        setExpandedSections((prevState) => ({
            ...prevState,
            [index]: !prevState[index],
        }));
    };

    return (
        <div className="services" id='services'>
            <div className="services-tittle">
                <h1>My Services</h1>
                <img src={theme} alt="theme-img" />
            </div>
            <div className="services-container">
                {Services_Data.map((service, index) => {
                    return (
                        <div className="services-format" key={index}>
                            <h3>{service.s_no}</h3>
                            <h2>{service.s_name}</h2>
                            <p>{expandedSections[index] ? service.s_desc : service.s_desc.slice(0, 50)}{!expandedSections[index] && '...'}</p>
                            <div className="services-readmore" onClick={() => toggleFullText(index)}>
                                <p>{expandedSections[index] ? 'Read less' : 'Read more...'}</p>
                                <img src={arrow_icon} alt="arrow-icon" />
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default Services;
