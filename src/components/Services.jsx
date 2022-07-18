import Image from "./Image";

const ServicesSection = () => {
  return (
    <div className="services">
      <div className="h1">Services</div>
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
          link="/roomates"
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
