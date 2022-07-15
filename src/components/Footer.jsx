import star from '../images/star.png';
import call from '../images/call.png';
import mail from '../images/mail.png';
import instagram from '../images/instagram.png';
import linkedin from '../images/linkedin.png';

const Footer = () => {
  return (
    <div className="footer">

        <div className='company-des'>
            <h1>College Grahasthi</h1>
            <p className='copyright-title'>© 2022 All Rights Reserved.</p>
            <p className='copyright-info'>
                The company name, website, and information used on this website are owned by Collège Grahasthi. 
                All of these are copyright protected, and Collège Grahasthi owners are the exclusive proprietors of the copyrights. 
                The usage aims to advertise, identify, and search. No involvement or endorsement is suggested.
            </p>

            <div className='stars'>
                <img src="https://res.cloudinary.com/dl2mkfkqh/image/upload/v1657886947/fianl/star_msnx3c.png"alt="star" />
                <img src="https://res.cloudinary.com/dl2mkfkqh/image/upload/v1657886947/fianl/star_msnx3c.png"alt="star" />
                <img src="https://res.cloudinary.com/dl2mkfkqh/image/upload/v1657886947/fianl/star_msnx3c.png"alt="star" />
                <img src="https://res.cloudinary.com/dl2mkfkqh/image/upload/v1657886947/fianl/star_msnx3c.png"alt="star" />
                <img src="https://res.cloudinary.com/dl2mkfkqh/image/upload/v1657886947/fianl/star_msnx3c.png"alt="star" />
            </div>
        </div>

        <div className='footer-des'>
            <div className='footer-des-card'>
                <h1>Company</h1>
                <div className='footer-des-card-info'>
                    <a href="/comingsoon">About</a>
                    <a href="/comingsoon">Careers</a>
                    <a href="/comingsoon">Blogs</a>
                </div>
            </div>
            
            <div className='footer-des-card'>
                <h1>Get Help</h1>
                <div className='footer-des-card-info'>
                    <a href="/comingsoon">How It Works</a>
                    <a href="/comingsoon">FAQs</a>
                    <a href="/comingsoon">Contact</a>
                    <a href="/comingsoon">Terms</a>
                    <a href="/comingsoon">Privacy</a>
                    <a href="/comingsoon">Sitemap</a>
                </div>          
            </div>

            <div className='contact'>
                <h1>Contact Us</h1>
                <div className='direct-contact-div'>
                    <a href="tel:7850037958" className='direct-contact'>
                        <img src="https://res.cloudinary.com/dl2mkfkqh/image/upload/v1657886865/fianl/call_nijmeh.png"alt="call" />
                        <p>+91 7850037958</p>
                    </a>

                    <a href="tel:7091045216" className='direct-contact'>
                        <img src="https://res.cloudinary.com/dl2mkfkqh/image/upload/v1657886865/fianl/call_nijmeh.png"alt="call" />
                        <p>+91 7091045216</p>
                    </a>

                    <a href="mailto:collegegrahasthi@gmail.com" target="_blank" rel="noopener noreferrer" className='direct-contact'>
                        <img src="https://res.cloudinary.com/dl2mkfkqh/image/upload/v1657886873/fianl/mail_b3elby.png" alt="mail" />
                        <p>collegegrahasthi@gmail.com</p>
                    </a>
                </div>

                <div className='social-div'>

                    <a href="https://www.instagram.com/collegegrahasthi/" target="_blank" rel="noopener noreferrer" className='social'>
                        <img src="https://res.cloudinary.com/dl2mkfkqh/image/upload/v1657886871/fianl/instagram_pwm0th.png" alt="mail" />
                        <p>Instagram</p>
                    </a>

                    <a href="https://www.linkedin.com/company/collegegrahasthi" target="_blank" rel="noopener noreferrer" className='social'>
                        <img src="https://res.cloudinary.com/dl2mkfkqh/image/upload/v1657886869/fianl/linkedin_rtb2rr.png" alt="mail" />
                        <p>LinkedIn</p>
                    </a>
                </div>       
            </div>

        </div>
    </div>
  );
};

export default Footer;
