import React from "react";
import { useLoaderData } from "react-router";
import ServiceCard from "./Card/ServiceCard";

const MyService = () => {
  const data = useLoaderData();
  console.log(data);
  return (
    <div className="">
      <h1 className="font-bold text-center text-3xl py-4">My Services</h1>
      <div className="px-5 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-4">
        {data.map((card) => (
          <ServiceCard key={card._id} card={card}></ServiceCard>
        ))}
      </div>
    </div>
  );
};

export default MyService;
