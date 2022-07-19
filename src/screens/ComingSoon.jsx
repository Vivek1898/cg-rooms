import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

const ComingSoon = () => {
  return (
    <>
      <Navbar />
      <div className="coming-soon d-flex flex-column"> 
        <div>404</div>
        <div>NOT FOUND</div>
      </div>
      <Footer />
    </>
  );
};

export default ComingSoon;