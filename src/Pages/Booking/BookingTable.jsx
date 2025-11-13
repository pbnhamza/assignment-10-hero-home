import React from "react";

const BookingTable = () => {
  const data = {
    name: "Amir Hamza",
    providerName: "Nasir Hossain",
    image: "https://i.ibb.co.com/KjrNk8v0/electricians-3.jpg",
    email: "pbnhamza@gmail.com",
    price: 700,
    category: "Electricians",
    date: "13/11/2025",
    comment: "best",
  };
  const { name, email, image, category, price, date, comment } = data;

  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table ">
          {/* head */}
          <thead>
            <tr>
              <th>
                <label>
                  <input type="checkbox" className="checkbox" />
                </label>
              </th>
              <th>Name</th>
              <th>Booking information</th>
              <th>Comment</th>
              <th>Status</th>
              <th></th>
            </tr>
          </thead>
          <tbody className="bg-base-200 ">
            {/* row 1 */}
            <tr>
              <th>
                <label>
                  <input type="checkbox" className="checkbox" />
                </label>
              </th>
              <td>
                <div className="flex items-center gap-3">
                  <div className="avatar">
                    <div className="mask mask-squircle h-12 w-12">
                      <img src={image} alt="Avatar Tailwind CSS Component" />
                    </div>
                  </div>
                  <div>
                    <div className="font-bold">{name}</div>
                    <div className="text-sm opacity-50">{email}</div>
                    <div className="text-sm opacity-50">{date}</div>
                  </div>
                </div>
              </td>
              <td>
                Taka {price}
                <br />
                <span className="badge badge-ghost badge-sm">{category}</span>
              </td>
              <td>{comment}</td>
              <th>
                <button className="btn">Cencel</button>
              </th>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default BookingTable;
