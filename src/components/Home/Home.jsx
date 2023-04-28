import React from "react";
import Container from "./container";
import { useLoaderData, useParams } from "react-router-dom";

const Home = () => {
  const data = useLoaderData();

  return (
    <div>
      <h2>This is home</h2>
      <div className="grid lg:grid-cols-3 md:grid-cols-2">
        {data.map((dt, i) => {
          return <Container key={i} data={dt}></Container>;
        })}
      </div>
    </div>
  );
};

export default Home;
