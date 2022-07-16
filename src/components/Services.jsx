import Image from "./Image";
import room from "../images/room.jpeg";
import food from "../images/food.jpeg";
import laundry from "../images/laundry.jpeg";
import roommates from "../images/roommates.jpeg";
import gym from "../images/gym.jpeg";
import maid from "../images/maid.jpeg";

const ServicesSection = () => {
  return (
    <div className="services">
      <h1>Services</h1>
      <div className="section-line"></div>

      <div className="services-card">
        <Image
          image="https://res.cloudinary.com/shishirasdjfadsfj/image/upload/v1657875011/CollegeGrahasthiWeb/room_rmkvaz.jpg"
          name="ROOMS"
          link="/home"
        />
        <Image
          image="https://res.cloudinary.com/shishirasdjfadsfj/image/upload/v1657875011/CollegeGrahasthiWeb/roommates_pb8xjx.jpg"
          name="ROOMMATES"
          link="https://forms.gle/aLvpjA4F4J9J3nrx9"
        />
        <Image
          image="https://res.cloudinary.com/shishirasdjfadsfj/image/upload/v1657875011/CollegeGrahasthiWeb/food_a5kbyu.jpg"
          name="FOOD"
          link="/mess"
        />
        <Image
          image="https://res.cloudinary.com/dl2mkfkqh/image/upload/v1657887123/fianl/laundry_m7fouk.jpg"
          name="Laundry"
          link="/laundary"
        />
        <Image
          image="https://res.cloudinary.com/shishirasdjfadsfj/image/upload/v1657875011/CollegeGrahasthiWeb/gym_qswggi.jpg"
          name="GYM"
          link="/gym"
        />
        <Image
          image="https://res.cloudinary.com/shishirasdjfadsfj/image/upload/v1657875012/CollegeGrahasthiWeb/maid_xr5j98.jpg"
          name="MAID"
          link="/maid"
        />
      </div>
    </div>
  );
};

export default ServicesSection;
