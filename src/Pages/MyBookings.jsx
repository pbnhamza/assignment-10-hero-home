import React, { useEffect, useState } from "react";

import LoadingPage from "../Components/Loading/LoadingPage";
import Cards from "./Booking/Cards";
import BookingTable from "./Booking/BookingTable";

const MyBookings = () => {
  return (
    <div>
      <BookingTable></BookingTable>
    </div>
  );
};

export default MyBookings;
