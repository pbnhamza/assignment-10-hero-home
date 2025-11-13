import { useEffect, useState } from "react";
import BookingTable from "./Booking/BookingTable";
import { Navigate, useNavigate } from "react-router";

const MyBookings = () => {
  const [data, setData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("http://localhost:3000/bookings")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  const service = () => {
    navigate("/my-service");
  };
  return (
    <div>
      {data.length !== 0 ? (
        <div>
          {data.map((booking) => (
            <BookingTable booking={booking}></BookingTable>
          ))}
        </div>
      ) : (
        <div className="flex flex-col justify-center items-center space-y-5 pt-12">
          <h1 className="font-bold text-3xl text-center">No booking data</h1>
          <button onClick={service} className="btn btn-primary">
            {" "}
            Click Service Details
          </button>
        </div>
      )}
    </div>
  );
};

export default MyBookings;
