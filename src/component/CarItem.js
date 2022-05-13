import React from "react";
import { NavLink } from "react-router-dom";

function CarItem({ car }) {
  return (
    <div className="CarItem">
      <div>
        <img style={{ width: "350px", height: "250px" }} src={car.image} />
      </div>
      <div style={{ margin: "0 0 0 30px" }}>
        {car.name} {car.battery}kWh
      </div>
      <div>
        <div>{car.efficiency} kWh/miles</div>
        <div>Efficiency</div>
      </div>
      <div>
        <NavLink to={"/home/electric_cars/" + car.id}>
          <button className="exploreButton">Explore</button>
        </NavLink>
      </div>
    </div>
  );
}

export default CarItem;
