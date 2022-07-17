import Nav from "./Nav";
import Button from "./Button";

const Hero = () => {
  return (
    <div>
      <div className="hero">
        <Nav />

        <div className="hero-des">

          <div className="title">
            <div className="h1">
              College Grahasthi
            </div>
            <div className="p">
              All your accommodation needs in one place.
            </div>
          </div>

          <div style={{ width: "50%" }}></div>

          <div className="hero-points">
            <div className="points">
              <img
                src="https://res.cloudinary.com/shishirasdjfadsfj/image/upload/v1657875011/CollegeGrahasthiWeb/checked_xyzbwu.png"
                alt="check mark"
              />
              <div>Verified Listings</div>
            </div>

            <div className="points">
              <img
                src="https://res.cloudinary.com/shishirasdjfadsfj/image/upload/v1657875011/CollegeGrahasthiWeb/checked_xyzbwu.png"
                alt="check mark"
              />
              <div>Lowest price Guaranteed</div>
            </div>

            <div className="points">
              <img
                src="https://res.cloudinary.com/shishirasdjfadsfj/image/upload/v1657875011/CollegeGrahasthiWeb/checked_xyzbwu.png"
                alt="check mark"
              />
              <div>Best services</div>
            </div>
          </div>
        </div>
      </div>
      <div className="banner">
        <div className="p">Resister your PG Now</div>

        <div>
          <Button value="Book Now !!" link="/bookurpg" bgColor="white" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
