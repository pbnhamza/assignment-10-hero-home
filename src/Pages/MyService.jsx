import React, { useEffect, useState } from "react";

import ServiceCard from "./Card/ServiceCard";
import LoadingPage from "../Components/Loading/LoadingPage";

const MyService = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetch("http://localhost:3000/hero")
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <LoadingPage></LoadingPage>;
  }

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
