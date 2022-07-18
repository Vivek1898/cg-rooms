import {BrowserRouter as Router, Route, Link ,useHistory} from 'react-router-dom'

const Image = ({ image, name, link }) => {
  return (
    <div className="services-image">
      <div className="image-div">
        <img src={image} alt="services" />
      </div>

      <Link to={link}>
        <div className="name-div">{name}</div>
      </Link>
    </div>
  );
};

export default Image;
