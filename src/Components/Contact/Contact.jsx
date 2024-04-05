import './Contact.css'
import theme from '../../assets/theme_pattern.svg'
import mail_icon from '../../assets/mail_icon.svg'
import call_icon from '../../assets/call_icon.svg'
import location_icon from '../../assets/location_icon.svg'

const Contact = () => {
    return (
        <div className="contact">
            <div className="contact-tittle">
                <h1>Get in Touch</h1>
                <img src={theme} alt="theme-pattern" />
            </div>
            <div className="contact-section">
                <div className="contact-left">
                    <h1> Reach out</h1>
                    <p>Feel free to reach out to me at any time! Whether you have questions about my work, want to discuss a potential collaboration, or just want to say hello, Im always available and eager to connect.</p>
                    <div className="contact-details">
                        <div className="contact-detail">
                            <img src={mail_icon} alt="mail-icon" />
                            <p>leleigideon97@gmail.com</p>
                        </div>
                        <div className="contact-detail">
                            <img src={call_icon} alt="call-icon" />
                            <p>+254758080448</p>
                        </div>
                        <div className="contact-detail">
                            <img src={location_icon} alt="location-icon" />
                            <p>Kericho,Kenya</p>
                        </div>
                    </div>
                </div>
                <form className="contact-right">
                    <label htmlFor="">Your Name</label>
                    <input type="text" placeholder='Enter Your Name' name='name' />
                    <label htmlFor="">Email</label>
                    <input type="email" name="email" placeholder='Enter Your Email' />
                    <label htmlFor="">Write Your Message Here</label>
                    <textarea name="message" rows="8" placeholder='Enter Your Message'></textarea>
                    <button type='submit' className="btn-contact-submit">Submit</button>
                </form>
            </div>
        </div>
    )
}

export default Contact