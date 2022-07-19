import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer">
      <div className="company-des">
        <div className="h1">College Grahasthi</div>
        <div className="copyright-title">© 2022 All Rights Reserved.</div>
        <div className="copyright-info">
          The company name, website, and information used on this website are
          owned by Collège Grahasthi. All of these are copyright protected, and
          Collège Grahasthi owners are the exclusive proprietors of the
          copyrights. The usage aims to advertise, identify, and search. No
          involvement or endorsement is suggested.
        </div>

        <div className="stars">
          <img
            src="https://res.cloudinary.com/shishirasdjfadsfj/image/upload/v1657875009/CollegeGrahasthiWeb/star_i7bed2.png"
            alt="star"
          />
          <img
            src="https://res.cloudinary.com/shishirasdjfadsfj/image/upload/v1657875009/CollegeGrahasthiWeb/star_i7bed2.png"
            alt="star"
          />
          <img
            src="https://res.cloudinary.com/shishirasdjfadsfj/image/upload/v1657875009/CollegeGrahasthiWeb/star_i7bed2.png"
            alt="star"
          />
          <img
            src="https://res.cloudinary.com/shishirasdjfadsfj/image/upload/v1657875009/CollegeGrahasthiWeb/star_i7bed2.png"
            alt="star"
          />
          <img
            src="https://res.cloudinary.com/shishirasdjfadsfj/image/upload/v1657875009/CollegeGrahasthiWeb/star_i7bed2.png"
            alt="star"
          />
        </div>
      </div>

      <div className="footer-des">
        <div className="footer-des-card">
          <div className="h1">Company</div>
          <div className="footer-des-card-info">
            <Link to="/comingsoon">About</Link>
            <Link to="/comingsoon">Careers</Link>
            <Link to="/comingsoon">Blogs</Link>
          </div>
        </div>

        <div className="footer-des-card">
          <div className="h1">Get Help</div>
          <div className="footer-des-card-info">
            <Link to="/comingsoon">How It Works</Link>
            <Link to="/comingsoon">FAQs</Link>
            <Link to="/comingsoon">Contact</Link>
            <Link to="/comingsoon">Terms</Link>
            <Link to="/comingsoon">Privacy</Link>
            <Link to="/comingsoon">Sitemap</Link>
          </div>
        </div>

        <div className="contact">
          <div className="h1">Contact Us</div>
          <div className="direct-contact-div">
            <Link to="tel:7850037958" className="direct-contact">
              <img
                src="https://res.cloudinary.com/shishirasdjfadsfj/image/upload/v1657875012/CollegeGrahasthiWeb/call_qwfllq.png"
                alt="call"
              />
              <div>+91 7850037958</div>
            </Link>

            <Link to="tel:7091045216" className="direct-contact">
              <img
                src="https://res.cloudinary.com/shishirasdjfadsfj/image/upload/v1657875012/CollegeGrahasthiWeb/call_qwfllq.png"
                alt="call"
              />
              <div>+91 7091045216</div>
            </Link>

            <Link
              to="mailto:collegegrahasthi@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="direct-contact"
            >
              <img
                src="https://res.cloudinary.com/shishirasdjfadsfj/image/upload/v1657875010/CollegeGrahasthiWeb/mail_d62gqa.png"
                alt="mail"
              />
              <div>collegegrahasthi@gmail.com</div>
            </Link>
          </div>

          <div className="social-div">
            <Link
              to="https://www.instagram.com/collegegrahasthi/"
              target="_blank"
              rel="noopener noreferrer"
              className="social"
            >
              <img
                src="https://res.cloudinary.com/shishirasdjfadsfj/image/upload/v1657875010/CollegeGrahasthiWeb/instagram_tidxgg.png"
                alt="mail"
              />
              <div>Instagram</div>
            </Link>

            <Link
              to="https://www.linkedin.com/company/collegegrahasthi"
              target="_blank"
              rel="noopener noreferrer"
              className="social"
            >
              <img
                src="https://res.cloudinary.com/shishirasdjfadsfj/image/upload/v1657875011/CollegeGrahasthiWeb/linkedin_bqpdy1.png"
                alt="mail"
              />
              <div>LinkedIn</div>
            </Link>
           
          
          </div>
          <div>Made by - Vivek and Shishir</div>
        </div>
      </div>

    </div>
  );
};

export default Footer;