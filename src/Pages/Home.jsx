import Banner from "../Components/Header/Banner";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useState } from "react";
import Cards from "./Booking/Cards";
import Booking from "./Booking/Booking";

const Home = () => {
  const [ref1, inView1] = useInView({ triggerOnce: true, threshold: 0.2 });
  const [ref2, inView2] = useInView({ triggerOnce: true, threshold: 0.2 });

  // Auto-scroll testimonials
  const [isPaused, setIsPaused] = useState(false);
  const testimonials = [
    {
      name: "Ayesha Siddika",
      role: "Housewife, Dhaka",
      text: "Got my AC fixed in 30 mins! Rafiq bhai was so professional and charged exactly as quoted.",
      rating: 5,
    },
    {
      name: "Rahim Khan",
      role: "Business Owner",
      text: "Office cleaning team came on Sunday morning. Spotless result! Will book monthly now.",
      rating: 5,
    },
    {
      name: "Fatema Akter",
      role: "Teacher",
      text: "Sink was blocked for 3 days. Imran fixed it in 15 mins. Best price in town!",
      rating: 5,
    },
    {
      name: "Karim Hossain",
      role: "Student",
      text: "New light fixtures look amazing! Energy bill dropped too. Highly recommend Nasir.",
      rating: 4,
    },
  ];
  return (
    <div className="">
      <Banner></Banner>
      <Booking></Booking>

      <div>
        <section className="py-4 ">
          <div className="max-w-6xl mx-auto px-4">
            <motion.h2
              initial={{ opacity: 0, y: -50 }}
              animate={inView1 ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="text-4xl md:text-5xl font-bold text-center py-8"
            >
              Why Choose Us
            </motion.h2>

            <motion.div
              ref={ref1}
              className="grid md:grid-cols-3 gap-10 "
              variants={{
                hidden: { opacity: 0 },
                show: {
                  opacity: 1,
                  transition: { staggerChildren: 0.3 },
                },
              }}
              initial="hidden"
              animate={inView1 ? "show" : "hidden"}
            >
              {[
                {
                  icon: "https://cdn-icons-png.flaticon.com/512/4228/4228679.png",
                  title: "Verified Experts",
                  desc: "All providers are background-checked and rated by real customers.",
                },
                {
                  icon: "https://img.icons8.com/?size=100&id=Ry7mumEprV9w&format=png&color=000000",
                  title: "24/7 Support",
                  desc: "Chat or c all anytime. We're here when you need us.",
                },
                {
                  icon: "https://cdn-icons-png.flaticon.com/512/476/476863.png",
                  title: "Fair Pricing",
                  desc: "No hidden fees. Pay only what you see upfront.",
                },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  variants={{
                    hidden: { y: 100, opacity: 0 },
                    show: {
                      y: 0,
                      opacity: 1,
                      transition: { type: "spring", stiffness: 80 },
                    },
                  }}
                  whileHover={{ scale: 1.08, y: -10 }}
                  className="bg-white p-4 rounded-3xl shadow-xl hover:shadow-xl transition-all duration-300 text-center border border-gray-100  "
                >
                  <motion.div
                    whileHover={{ rotate: 360, scale: 1.3 }}
                    transition={{ duration: 0.6 }}
                    className="w-24 h-24 mx-auto mb-6 bg-[#4461FA] rounded-full flex items-center justify-center p-4 "
                  >
                    <img
                      src={item.icon}
                      alt=""
                      className="w-14 h-14 text-white"
                    />
                  </motion.div>
                  <h3 className="text-2xl font-bold mb-3 text-gray-800">
                    {item.title}
                  </h3>
                  <p className="text-gray-600">{item.desc}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>
      </div>
      <div>
        <section className="  text-white">
          <div className=" mx-auto py-4 px-4">
            <motion.h2
              ref={ref2}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView2 ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.8 }}
              className="text-3xl md:text-4xl font-bold text-center py-4 text-gray-800"
            >
              What Our Customers Say
            </motion.h2>

            <div
              className="overflow-hidden"
              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={() => setIsPaused(false)}
            >
              <motion.div
                animate={{ x: isPaused ? 0 : ["0%", "-50%"] }}
                transition={{
                  duration: 20,
                  repeat: Infinity,
                  ease: "linear",
                  pause: isPaused,
                }}
                className="flex gap-8 py-4"
              >
                {[...testimonials, ...testimonials].map((t, i) => (
                  <motion.div
                    key={i}
                    whileHover={{ scale: 1.05 }}
                    className="min-w-[380px] bg-white text-gray-800 p-8 rounded-3xl "
                  >
                    <div className="flex mb-4">
                      {[...Array(t.rating)].map((_, j) => (
                        <span key={j} className="text-yellow-500 text-2xl">
                          ★
                        </span>
                      ))}
                    </div>
                    <p className="text-lg mb-6 italic">"{t.text}"</p>
                    <div>
                      <p className="font-bold text-xl">{t.name}</p>
                      <p className="text-sm text-gray-500">{t.role}</p>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Home;
