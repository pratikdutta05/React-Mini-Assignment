import React from "react";
import CarItem from "./CarItem";

const CarContainer = () => {
  const cars = [
    {
      name: "Renault ZOE ZE50 R153 GT Line(rapid)",
      battery: 52,
      emi: 400,
      efficiency: 19,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDZUVqLzTZtavDFP3m6XhXdNDpzPo9XrLPOQ&usqp=CAU",
    },
    {
      name: "MG ZS EV (Excite)",
      battery: 45,
      emi: 450,
      efficiency: 20,
      image:
        "https://bpchargemaster.com/wp-content/uploads/2021/06/Renault-Zoe-50.jpg",
    },
    {
      name: "Nissan Leaf",
      battery: 30,
      emi: 500,
      efficiency: 30,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDZUVqLzTZtavDFP3m6XhXdNDpzPo9XrLPOQ&usqp=CAU",
    },
  ];

  return (
    <div className="CarContainer">
      {/* <div className='CarItem'><img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDZUVqLzTZtavDFP3m6XhXdNDpzPo9XrLPOQ&usqp=CAU'/></div>
              <div className='CarItem'><img src='https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/2019-honda-civic-sedan-1558453497.jpg?crop=1xw:0.9997727789138833xh;center,top&resize=480:*'/></div>
              <div className='CarItem'><img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDZUVqLzTZtavDFP3m6XhXdNDpzPo9XrLPOQ&usqp=CAU'/></div>
              <div className='CarItem'><img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDZUVqLzTZtavDFP3m6XhXdNDpzPo9XrLPOQ&usqp=CAU'/></div>
              <div className='CarItem'><img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDZUVqLzTZtavDFP3m6XhXdNDpzPo9XrLPOQ&usqp=CAU'/></div>
              <div className='CarItem'><img src='https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/2019-honda-civic-sedan-1558453497.jpg?crop=1xw:0.9997727789138833xh;center,top&resize=480:*'/></div> */}

      {cars.map((car) => {
        return <CarItem car={car} />;
      })}
    </div>
  );
};

export default CarContainer;
