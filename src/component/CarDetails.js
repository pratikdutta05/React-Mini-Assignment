import React from "react";

function CarDetails() {
  return (
    <div className="detailsPageContainer">
      <div className="carDetails">
        <div className="carName">
          <p>Browse Car > Renault ZOE ZE50 R153 GT Line(rapid)</p>
        </div>
        <div className="carDivison">
          <div className="carImage">
            <img src="https://bpchargemaster.com/wp-content/uploads/2021/06/Renault-Zoe-50.jpg"></img>
          </div>
          <div className="carDate"> Available From 12.02.2022</div>
        </div>
        <div className="carDesc">
          <div>
            <p>Range</p>
            <p>120/miles</p>
            <p>Real World</p>
          </div>
          <div>
            <p>Charging</p>
            <p>50 kW</p>
            <p>max. Speed</p>
          </div>
        </div>
        <div className="carBlack">
          <p>5 Seat</p>
          <p>5 Doors</p>
          <p>Front</p>
          <p>Titanium Gray</p>
          <p>140 mph</p>
        </div>
      </div>
      <div className="bookingDetails"></div>
    </div>
  );
}

export default CarDetails;
