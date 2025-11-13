import React, { useEffect, useState } from "react";
import LoadingPage from "../../Components/Loading/LoadingPage";
import Cards from "./Cards";
const Booking = () => {
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
    <div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 px-5">
        {data.map((card) => (
          <Cards key={card._id} card={card}></Cards>
        ))}
      </div>
    </div>
  );
};

export default Booking;
