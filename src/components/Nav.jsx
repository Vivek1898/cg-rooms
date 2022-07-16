// Import required images.
import logo from "../images/CGLogoWhite.png";

const Nav = () => {
  return (
    <div className="nav">
      <a href="/">
        <img
          src="https://res.cloudinary.com/shishirasdjfadsfj/image/upload/v1657875012/CollegeGrahasthiWeb/home-bg_hgu3rq.png"
          alt="logo"
          className="hero-logo"
        />
      </a>

      {/* <div className='login'>
        <a href='/comingsoon'>
          LogIn/SignUp
        </a>
      </div> */}
    </div>
  );
};

export default Nav;
