import React, { useEffect, useState } from "react";
import LoadingPage from "../Loading/LoadingPage";
import ServiceCard from "../../Pages/Card/ServiceCard";

const AllService = () => {
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
    <div>
      <div>
        <div
          style={{
            background:
              " radial-gradient(circle,rgba(63, 94, 251, 10) 0%, rgba(252, 70, 107, .2) 100%)",
          }}
        >
          <h1 className="font-bold text-center  text-white text-3xl py-4">
            Our Service
          </h1>
        </div>

        <div className="px-5 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-4">
          {data.map((card) => (
            <ServiceCard key={card._id} card={card}></ServiceCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AllService;
