
import './Work.css';
import theme from '../assets/theme_pattern.svg';
import mywork_data from '../assets/mywork_data';
import arrow_icon from '../assets/arrow_icon.svg';

const Work = () => {
    return (
        <div className="work">
            <div className="work-tittle">
                <h1>My Latest Work</h1>
                <img src={theme} alt="theme-pattern" />
            </div>
            <div className="work-container">
                {mywork_data.map((work, index) => {
                    return (
                        <a key={index} href={work.url} target="_blank" rel="work-url">
                            <img src={work.w_img} alt='work-image' width={'350px'} />
                        </a>
                    );
                })}
            </div>
            <div className="work-show-more">
                <p>Show More</p>
                <img src={arrow_icon} alt="arrow-icon" />
            </div>
        </div>
    );
}

export default Work;
