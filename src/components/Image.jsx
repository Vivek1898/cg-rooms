const Image = ({ image, name, link }) => {
  return (
    <div className="services-image">
      <div className="image-div">
        <img src={image} alt="services" />
      </div>

      <a href={link}>
        <div className="name-div">{name}</div>
      </a>
    </div>
  );
};

export default Image;
