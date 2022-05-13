import React from "react";
import "../App.css";

const Header = () => {
  return (
    <header>
      <div className="inner">
        <div className="logo">
          <div>
            <img
              src="https://is5-ssl.mzstatic.com/image/thumb/Purple123/v4/7a/da/9f/7ada9f82-cf2f-66f4-b75c-f3d5a1e78795/source/512x512bb.jpg"
              alt="Google logo"
            />
          </div>
          <div>
            <h3>e-Ride</h3>
          </div>
        </div>
        <nav>
          <li>
            <span>
              <a className="headerFont">Electric Cars</a>
            </span>
          </li>
          <li>
            <span>
              <a className="headerFont">Suitability Tool</a>
            </span>
          </li>
          <li>
            <span>
              <a className="headerFont">My Booking</a>
            </span>
          </li>
          <li>
            <span>
              <a>Sign out</a>
            </span>
          </li>
        </nav>
      </div>
    </header>
  );
};

export default Header;
