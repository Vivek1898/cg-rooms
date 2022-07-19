import { Link } from "react-router-dom";

const Nav = () => {
  const user = JSON.parse(localStorage.getItem("currentUser"));

  function Logout() {
    localStorage.removeItem("currentUser");
    // history.push("/login")
    window.location.to = "/login";
  }

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "0 6rem",
        fontSize: "1.25rem",
        lineHeight: "1.75rem",
      }}
    >
      <Link to="/">
        <img
          src="https://res.cloudinary.com/shishirasdjfadsfj/image/upload/v1657875012/CollegeGrahasthiWeb/CGLogoWhite_ijatxb.png"
          alt="logo"
          className="hero-logo"
        />
      </Link>
      <div className="rounded" style={{ backgroundColor: "rgba(0, 63, 145, 0.6)" }}>
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
          <div className="d-flex">
            <div className="nav-item active rounded">
              <Link className="nav-link hover-link rounded" to="/register">
                Register
              </Link>
            </div>
            <div className="nav-item rounded">
              <Link className="nav-link hover-link rounded" to="/login">
                Login
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Nav;