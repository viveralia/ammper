import React from "react";
import logo from "../assets/images/ammper.svg";

const Header = () => {
  return (
    <header className="container py-3">
      <div className="row">
        <div className="col-4 mx-auto">
          <img src={logo} alt="Ammper logo" className="img-fluid" />
        </div>
      </div>
    </header>
  );
};

export default Header;
