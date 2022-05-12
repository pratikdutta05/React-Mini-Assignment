import React from "react";

function CarItem({ car }) {
  return (
    <div className="CarItem">
      <div>
        <img style={{ width: "300px" }} src={car.image} />
      </div>
      <div style={{ margin: "0 0 0 30px" }}>
        {car.name} {car.battery}kWh
      </div>
      <div>
        <div>{car.efficiency} kWh/miles</div>
        <div>Efficiency</div>
      </div>
      <div>
        <button className="exploreButton">Explore</button>
      </div>
    </div>
  );
}

export default CarItem;
