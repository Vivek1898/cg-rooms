import Image from './Image';
import room from '../images/room.jpeg';
import food from '../images/food.jpeg';
import laundry from '../images/laundry.jpeg'
import roommates from '../images/roommates.jpeg';
import gym from '../images/gym.jpeg';
import maid from '../images/maid.jpeg';

const ServicesSection = () => {
  return (
    <div className='services'>
      <h1>Services</h1>
      <div className='section-line'></div>

      <div className='services-card'>
        <Image image="https://res.cloudinary.com/dl2mkfkqh/image/upload/v1657887072/fianl/room_lyoc72.jpg" name="ROOMS" link="/home" />
        <Image image="https://res.cloudinary.com/dl2mkfkqh/image/upload/v1657886906/fianl/roommates_rh3d0t.jpg" name="ROOMMATES" link="https://forms.gle/aLvpjA4F4J9J3nrx9" />
        <Image image="https://res.cloudinary.com/dl2mkfkqh/image/upload/v1657887046/fianl/food_v6vm8r.jpg" name="FOOD" link="/mess" />
        <Image image="https://res.cloudinary.com/dl2mkfkqh/image/upload/v1657887123/fianl/laundry_m7fouk.jpg" name="Laundry" link="/laundary" />
        <Image image="https://res.cloudinary.com/dl2mkfkqh/image/upload/v1657887066/fianl/gym_os4yml.jpg"name="GYM" link="/gym" />
        <Image image="https://res.cloudinary.com/dl2mkfkqh/image/upload/v1657886997/fianl/maid_w40xw4.jpg" name="MAID" link="/maid" />
      </div>

    </div>
  );
};

export default ServicesSection;
