import React from "react";

function Navbar() {
  const user = JSON.parse(localStorage.getItem("currentUser"));

  function Logout() {
    localStorage.removeItem("currentUser");
    window.location.href = "/login";
  }

  const navAction = () => {

    return (
      <ul className="navbar-nav">
        <li className="nav-item active">
          <a className="nav-link" href="/home">
            Rooms
          </a>
        </li>
        <li className="nav-item active">
          <a className="nav-link" href="/roommates">
            Room mates
          </a>
        </li>
        <li class="nav-item">
          <a className="nav-link" href="/mess">
            Mess
          </a>
        </li>
        <li className="nav-item active">
          <a className="nav-link" href="/laundary">
            Laundary
          </a>
        </li>
        <li className="nav-item active">
          <a className="nav-link" href="/gym">
            Gym
          </a>
        </li>
        <li class="nav-item">
          <a className="nav-link" href="/maid">
            Maid
          </a>
        </li>
        <li className="nav-item active">
          <a className="nav-link" href="/bookurpg">
            Owner
          </a>
        </li>

        {
          user ? 
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
              <a className="dropdown-item" href="/profile">
                Profile
              </a>

              <a className="dropdown-item" href="/" onClick={Logout}>
                Logout
              </a>
            </div>
          </div> :
          <div className="d-flex">
            <li className="nav-item active">
              <a className="nav-link" href="/register">
                Register
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/login">
                Login
              </a>
            </li>
          </div>
        }
      </ul>
    );
  };

  return (
    <div>
      <nav className="navbar navbar-expand-lg">
        <a className="navbar-brand" href="/">
          <img src="https://res.cloudinary.com/shishirasdjfadsfj/image/upload/v1657875012/CollegeGrahasthiWeb/CGLogoWhite_ijatxb.png" alt="logo" className="logo" />
        </a>

        {/* <Link to="/maid">Linked Maid</Link> */}

        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon">
            <i class="fas fa-bars" style={{ color: "white" }}></i>
          </span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          {navAction()}
        </div>
      </nav>
      {/* <Route path='/mess' component={Mess} /> */}
    </div>
  );
}

export default Navbar;
