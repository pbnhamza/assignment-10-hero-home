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
    <div className="">
      <Banner></Banner>
      <div>
        <div
          style={{
            background:
              " radial-gradient(circle,rgba(63, 94, 251, 10) 0%, rgba(252, 70, 107, .2) 100%)",
          }}
        >
          <h1 className="font-bold text-center  text-white text-3xl py-4">
            Our Latest Service
          </h1>
        </div>

        <div className="px-5 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-4">
          {data.map((card) => (
            <ServiceCard key={card._id} card={card}></ServiceCard>
          ))}
        </div>
      </div>
      <div>
        <section className="bg-gray-50 py-16">
          <div className="max-w-6xl mx-auto text-center px-4">
            <h2 className="text-4xl font-bold mb-8 text-gray-800">
              Why Choose Us
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="p-6 bg-white rounded-2xl shadow hover:shadow-lg transition">
                <img
                  src="https://cdn-icons-png.flaticon.com/512/4228/4228679.png"
                  alt="Trusted"
                  className="w-16 mx-auto mb-4"
                />
                <h3 className="text-xl font-semibold mb-2">
                  Trusted Professionals
                </h3>
                <p className="text-gray-600">
                  All our service providers are verified and highly rated by
                  real users.
                </p>
              </div>
              <div className="p-6 bg-white rounded-2xl shadow hover:shadow-lg transition">
                <img
                  src="https://cdn-icons-png.flaticon.com/512/456/456212.png"
                  alt="Support"
                  className="w-16 mx-auto mb-4"
                />
                <h3 className="text-xl font-semibold mb-2">
                  24/7 Customer Support
                </h3>
                <p className="text-gray-600">
                  Our team is always available to help with your queries and
                  bookings.
                </p>
              </div>
              <div className="p-6 bg-white rounded-2xl shadow hover:shadow-lg transition">
                <img
                  src="https://cdn-icons-png.flaticon.com/512/476/476863.png"
                  alt="Affordable"
                  className="w-16 mx-auto mb-4"
                />
                <h3 className="text-xl font-semibold mb-2">
                  Affordable Pricing
                </h3>
                <p className="text-gray-600">
                  Get high-quality services at prices that fit your budget.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
      <div>
        <section className="bg-white py-16">
          <div className="max-w-6xl mx-auto text-center px-4">
            <h2 className="text-4xl font-bold mb-8 text-gray-800">
              What Our Customers Say
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="p-6 bg-gray-50 rounded-2xl shadow">
                <img
                  src="https://randomuser.me/api/portraits/women/44.jpg"
                  alt="Customer"
                  className="w-20 h-20 rounded-full mx-auto mb-4"
                />
                <p className="text-gray-600 italic mb-4">
                  “The electrician arrived on time and fixed the issue quickly.
                  Excellent service!”
                </p>
                <h4 className="font-semibold text-gray-800">Sarah Ahmed</h4>
                <p className="text-sm text-gray-500">Dhaka, Bangladesh</p>
              </div>

              <div className="p-6 bg-gray-50 rounded-2xl shadow">
                <img
                  src="https://randomuser.me/api/portraits/men/32.jpg"
                  alt="Customer"
                  className="w-20 h-20 rounded-full mx-auto mb-4"
                />
                <p className="text-gray-600 italic mb-4">
                  “I booked a plumber through HomeHero, and he was very
                  professional.”
                </p>
                <h4 className="font-semibold text-gray-800">Rafiul Hasan</h4>
                <p className="text-sm text-gray-500">Chittagong, Bangladesh</p>
              </div>

              <div className="p-6 bg-gray-50 rounded-2xl shadow">
                <img
                  src="https://randomuser.me/api/portraits/women/65.jpg"
                  alt="Customer"
                  className="w-20 h-20 rounded-full mx-auto mb-4"
                />
                <p className="text-gray-600 italic mb-4">
                  “Super easy to use and book services. Highly recommended!”
                </p>
                <h4 className="font-semibold text-gray-800">Mim Rahman</h4>
                <p className="text-sm text-gray-500">Sylhet, Bangladesh</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Home;
