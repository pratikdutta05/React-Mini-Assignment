import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function CarDetails(props) {
  const { id } = useParams();

  const [car, setCar] = useState([]);

  const getCar = async () => {
    await axios

      .get("https://627ca708bf2deb7174de4ade.mockapi.io/car/v1/allCars/" + id)

      .then((response) => {
        setCar(response.data);
      })

      .catch((error) => console.log(error));
  };

  useEffect(() => {
    getCar();
  }, []);

  return (
    <div className="detailsPageContainer">
      <div className="carDetails">
        <div className="carName">
          <p>
            {"Browse Car > "} {car.name}
          </p>
        </div>
        <div className="carDivison">
          <div className="carImage">
            <img src={car.image}></img>
          </div>
          <div className="carDate">
            <h5>Available From</h5>
            <p>12.02.2022</p>
          </div>
        </div>
        <div className="carDesc">
          <div>
            <p>Range</p>
            <p>{car.efficiency}/miles</p>
            <p>Real World</p>
          </div>
          <div>
            <p>Charging</p>
            <p>{car.battery} kW</p>
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
      <div className="bookingDetails">
        <div className="bookingCarName">
          <p>{car.name}</p>
          <p>{car.battery}kWh</p>
        </div>
        <div className="subcriptionLength">
          <div className="frontStyle">Min. Subscription Length</div>
          <div className="monthContainer">
            <button className="bookingButton">1 Month</button>
            <button className="bookingButton">6 Month</button>
          </div>
        </div>
        <div className="subcriptionLength">
          <div className="frontStyle">Miles per Month</div>
          <div className="milesContainer">
            <button className="bookingButton">800</button>
            <button className="bookingButton">1000</button>
            <button className="bookingButton">1200</button>
          </div>
        </div>
        <div className="deliveryDate">
          <div className="frontStyle">Delivery Date</div>
          <div className="dateBox">
            <p>date:</p>
            <input type="date"></input>
          </div>
        </div>
        <div className="bookNowDiv">
          <button className="bookNow">Book Now</button>
        </div>
      </div>
    </div>
  );
}

export default CarDetails;
