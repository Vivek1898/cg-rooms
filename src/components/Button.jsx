import {BrowserRouter as Router, Route, Link ,useHistory} from 'react-router-dom'
const Button = ({ value, link, bgColor }) => {
  var text = "";

  if (bgColor === "white") {
    text = "#003f91";
  } else {
    text = "white";
  }

  return (
<<<<<<< HEAD
    <Link
      to={link}
=======
    <a
      href={link}
>>>>>>> 123d2120da28f5664ede2e51a689a62fa903644f
      className="button"
      style={{ backgroundColor: bgColor, color: text }}
    >
      {value}
<<<<<<< HEAD
    </Link>
=======
    </a>
>>>>>>> 123d2120da28f5664ede2e51a689a62fa903644f
  );
};

export default Button;
