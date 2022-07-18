import {BrowserRouter as Router, Route, Link ,useHistory} from 'react-router-dom'

const Image = ({ image, name, link }) => {
  return (
    <div className="services-image">
      <div className="image-div">
        <img src={image} alt="services" />
      </div>

<<<<<<< HEAD
      <Link to={link}>
        <div className="name-div">{name}</div>
      </Link>
=======
      <a href={link}>
        <div className="name-div">{name}</div>
      </a>
>>>>>>> 123d2120da28f5664ede2e51a689a62fa903644f
    </div>
  );
};

export default Image;
