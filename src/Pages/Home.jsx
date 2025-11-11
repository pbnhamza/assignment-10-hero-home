import React, { useEffect, useState } from "react";
import Banner from "../Components/Header/Banner";
import ServiceCard from "./Card/ServiceCard";
import LoadingPage from "../Components/Loading/LoadingPage";

const Home = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetch("http://localhost:3000/latest-hero")
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
    <div className="bg-[#FFFFFF]">
      <Banner></Banner>
      <div>
        <h1 className="font-bold text-center text-3xl text-[#526AF7] py-4">
          Latest Service
        </h1>
        <div className="px-5 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-4">
          {data.map((card) => (
            <ServiceCard key={card._id} card={card}></ServiceCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
