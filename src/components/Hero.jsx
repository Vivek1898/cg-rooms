import Nav from "./Nav";
import Button from "./Button";

const Hero = () => {
  return (
    <div>
      <div className="hero">
        <Nav />

        <div className="hero-des">
          <div className="title">
            <h1>College Grahasthi</h1>
            <p>All your accommodation needs in one place.</p>
          </div>

          <div style={{ width: "50%" }}></div>

          <div className="hero-points">
            <div className="points">
              <img
                src="https://res.cloudinary.com/shishirasdjfadsfj/image/upload/v1657875011/CollegeGrahasthiWeb/checked_xyzbwu.png"
                alt="check mark"
              />
              <p>Verified Listings</p>
            </div>

            <div className="points">
              <img
                src="https://res.cloudinary.com/shishirasdjfadsfj/image/upload/v1657875011/CollegeGrahasthiWeb/checked_xyzbwu.png"
                alt="check mark"
              />
              <p>Lowest price Guaranteed</p>
            </div>

            <div className="points">
              <img
                src="https://res.cloudinary.com/shishirasdjfadsfj/image/upload/v1657875011/CollegeGrahasthiWeb/checked_xyzbwu.png"
                alt="check mark"
              />
              <p>Best services</p>
            </div>
          </div>
        </div>
      </div>
      <div className="banner">
        <p>Resister your PG Now</p>

        <div>
          <Button value="Book Now !!" link="/bookurpg" bgColor="white" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
