import { Link, useHistory } from "react-router-dom";
import { toast } from "react-toastify";

const Nav = () => {
  const user = JSON.parse(localStorage.getItem("currentUser"));
  const history=useHistory();
  function Logout() {
    localStorage.removeItem("currentUser");
    localStorage.removeItem("access_token");
    
    history.push("/login")
    toast.success("Logout Success")
    //window.location.to = "/login";
  }

  return (<div className="nav">
  <Link to="/">
    <img
      src="https://res.cloudinary.com/shishirasdjfadsfj/image/upload/v1657875012/CollegeGrahasthiWeb/CGLogoWhite_ijatxb.png"
      alt="logo"
      className="hero-logo"
    />
  </Link>

  <div
    className="rounded"
    style={{height: "5rem"}}
  >
    <button
      class="navbar-toggler toggler-example pr-5 pt-4"
      type="button"
      data-toggle="collapse"
      data-target="#navbarSupportedContent1"
      aria-controls="navbarSupportedContent1"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="dark-blue-text">
        {!user &&  <i class="fas fa-bars fa-2x" style={{color: "white"}}></i>}
       
      </span>
    </button>

    {user ? (
      <div className="dropdown">
        <button
          className="btn btn-secondary dropdown-toggle"
          type="button"
          id="dropdownMenuButton"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
        >
          <i class="fas fa-user mr-2"></i>
          {user.name}
        </button>
        <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
          <Link className="dropdown-item" to="/profile">
            Profile
          </Link>

          <Link className="dropdown-item" to="/" onClick={Logout}>
            Logout
          </Link>
        </div>
      </div>
    ) : (
      <div class="collapse navbar-collapse" id="navbarSupportedContent1">
        <ul class="navbar-nav">
          <li class="nav-item active rounded">
            <Link className="nav-link px-2 hover-link rounded" to="/register">
              Register
            </Link>
          </li>
          <li class="nav-item active rounded">
            <Link className="nav-link px-2 hover-link rounded" to="/login">
              Login
            </Link>
          </li>
        </ul>
      </div>
    )}
  </div>
</div>
);
};

export default Nav;