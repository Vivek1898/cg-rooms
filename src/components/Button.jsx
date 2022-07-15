const Button = ({ value, link, bgColor }) => {
  var text = '';

  if (bgColor === "white") {
    text = "#003f91"
  } else {
    text = "white"
  }
  
  return (
    <a href={link} className='button' style={{backgroundColor: bgColor, color: text}}>
      { value }
    </a>
  );
};

export default Button;
