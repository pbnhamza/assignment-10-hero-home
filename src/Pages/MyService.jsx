import React, { useEffect, useState } from "react";
import LoadingPage from "../Components/Loading/LoadingPage";
import BookCard from "./Books/BookCard";

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
      <h1
        className="font-bold text-center text-white text-3xl py-4"
        style={{
          background:
            "radial-gradient(circle,rgba(1, 10, 42, 1)0%, rgba(252, 70, 107, .10) 100%)",
        }}
      >
        My Services
      </h1>
      <div className="px-5 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-4">
        {data.map((card) => (
          <BookCard key={card._id} card={card}></BookCard>
        ))}
      </div>
    </div>
  );
};

export default MyService;
