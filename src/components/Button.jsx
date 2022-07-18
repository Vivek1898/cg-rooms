import {BrowserRouter as Router, Route, Link ,useHistory} from 'react-router-dom'
const Button = ({ value, link, bgColor }) => {
  var text = "";

  if (bgColor === "white") {
    text = "#003f91";
  } else {
    text = "white";
  }

  return (
    <Link
      to={link}
      className="button"
      style={{ backgroundColor: bgColor, color: text }}
    >
      {value}
    </Link>
  );
};

export default Button;
