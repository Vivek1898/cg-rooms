import Nav from './Nav';
import SearchBar from './SearchBar';
import Button from './Button';
import checkMark from '../images/checked.png';

const Hero = () => {

  return (
    <div>
      <div className='hero'>
        <Nav />

        <div className='hero-des'>

          <div className='title'>
            <h1>College Grahasthi</h1>
            <p>All your accommodation needs in one place.</p>
          </div>

          <div style={{width: "50%"}}>
    
          </div>

          <div className='hero-points'>

            <div className='points'>
              <img src="https://res.cloudinary.com/dl2mkfkqh/image/upload/v1657886866/fianl/checked_auufzp.png" alt="check mark" />
              <p>Verified Listings</p>
            </div>

            <div className='points'>
              <img src="https://res.cloudinary.com/dl2mkfkqh/image/upload/v1657886866/fianl/checked_auufzp.png" alt="check mark" />
              <p>Lowest price Guaranteed</p>
            </div>

            <div className='points'>
              <img src="https://res.cloudinary.com/dl2mkfkqh/image/upload/v1657886866/fianl/checked_auufzp.png" alt="check mark" />
              <p>Best services</p>
            </div>

          </div>

        </div>
      </div>
      <div className='banner'>
        <p>Resister your PG Now</p>
          
        <div>
          <Button value="Book Now !!" link="/bookurpg" bgColor="white" />
        </div>
      </div>
     
    </div>
  );
};

export default Hero;
