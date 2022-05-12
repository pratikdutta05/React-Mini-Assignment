import axios from "axios";
import React, { useEffect, useState } from "react";
import CarItem from "./CarItem";
import SearchBar from "./SearchBar";

const CarContainer = () => {
  //   const cars = [
  //     {
  //       name: "Renault ZOE ZE50 R153 GT Line(rapid)",
  //       battery: 52,
  //       emi: 400,
  //       efficiency: 19,
  //       image:
  //         "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDZUVqLzTZtavDFP3m6XhXdNDpzPo9XrLPOQ&usqp=CAU",
  //     },
  //     {
  //       name: "MG ZS EV (Excite)",
  //       battery: 45,
  //       emi: 450,
  //       efficiency: 20,
  //       image:
  //         "https://bpchargemaster.com/wp-content/uploads/2021/06/Renault-Zoe-50.jpg",
  //     },
  //     {
  //       name: "Nissan Leaf",
  //       battery: 30,
  //       emi: 500,
  //       efficiency: 30,
  //       image:
  //         "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDZUVqLzTZtavDFP3m6XhXdNDpzPo9XrLPOQ&usqp=CAU",
  //     },
  //   ];

  const [cars, setCars] = useState([]);

  const getCars = async () => {
    await axios
      .get("https://627ca708bf2deb7174de4ade.mockapi.io/car/v1/allCars")
      .then((response) => {
        setCars(response.data);
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    getCars();
  }, []);

  return (
    <div>
      <SearchBar />
      <div className="CarContainer">
        {cars.map((car) => {
          return <CarItem car={car} />;
        })}
      </div>
    </div>
  );
};

export default CarContainer;
