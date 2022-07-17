const Nav = () => {
  return (
    <div style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        padding: "0 6rem",
        fontSize: "1.25rem",
        lineHeight: "1.75rem"
      }}>
      <a href="/">
        <img
          src="https://res.cloudinary.com/shishirasdjfadsfj/image/upload/v1657875012/CollegeGrahasthiWeb/CGLogoWhite_ijatxb.png"
          alt="logo"
          className="hero-logo"
        />
      </a>
    </div>
  );
};

export default Nav;
