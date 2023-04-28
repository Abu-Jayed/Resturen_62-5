import React from "react";
import { FaBed, FaChild } from "react-icons/fa";
import { BsCurrencyDollar } from "react-icons/bs";

const Container = ({data}) => {
  const {img,rooms,description,bedrooms,people,price} = data
  console.log(img);
  return (
    <div className="">
      <div className=" md:mt-6 lg:mt-10 card card-compact w-96 bg-base-100 shadow-xl">
        <div className="mb-3 items-center flex">
          <p className="bg-red-500 h-8 w-8 rounded-full font-bold text-2xl text-white text-center">
            <span className="">
            S
            </span>
          </p>
          <p className="ml-5 font-semibold">{rooms[0].room_type}</p>
        </div>
        <figure>
          <img
            src={img}
            alt="Shoes"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Shoes!</h2>
          <p>{description + rooms[0].description}</p>
          <div className="flex justify-around items-center">
            <FaBed className="w-6 h-6"></FaBed>
            <p>{bedrooms}</p>
            <FaChild className="w-6 h-6"></FaChild>
            <p>{people}</p>
            <BsCurrencyDollar className="w-6 h-6"></BsCurrencyDollar>
            <p>{rooms[0].price}</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary rounded-xl ">Book</button>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Container;
