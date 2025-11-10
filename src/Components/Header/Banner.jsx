import { useNavigate } from "react-router-dom";

import { useState, useEffect } from "react";
import { AnimatePresence, easeOut, motion } from "framer-motion";

const slide = [
  {
    img: "https://i.ibb.co.com/PbcX6R0/electrician.jpg",
    desc: "Professional and trusted electricians for all your home needs al time.",
    title: "Professional Electricians",
  },
  {
    img: "https://i.ibb.co.com/pjGTzPjV/plumbers.jpg",
    desc: "Fixing leaks and installations with precision and care.",
    title: "Professional Reliable Plumbers",
  },
  {
    img: "https://i.ibb.co.com/ZzHqR06B/cleners.jpg",
    desc: "Keeping your space spotless and hygienic.",
    title: "Professional Cleaners",
  },
];

const Banner = () => {
  const [current, setCurrent] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slide.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div>
      <section className="relative h-[70vh] overflow-hidden">
        <AnimatePresence>
          {slide.map(
            (slide, index) =>
              index === current && (
                <motion.div
                  key={index}
                  className="absolute top-0 left-0 w-full h-full bg-cover bg-center flex flex-col items-center justify-center text-center text-white"
                  style={{ backgroundImage: `url(${slide.img})` }}
                  initial={{ opacity: 0, x: 100 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -100 }}
                  transition={{ duration: 1, ease: [0.45, 0, 0.6, 1] }}
                >
                  <div className="bg-black/50 w-full h-full absolute top-0 left-0"></div>
                  <div className="relative z-10 p-6">
                    <motion.h1
                      className="text-4xl md:text-6xl font-bold mb-4"
                      initial={{ y: 40, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{
                        delay: 3,
                        ease: [0.25, 0, 0.25, 1],
                        duration: 1.5,
                      }}
                    >
                      {slide.title}
                    </motion.h1>
                    <motion.p
                      className="max-w-2xl mx-auto text-lg mb-6"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 2.5 }}
                      transition={{ delay: 2, ease: easeOut }}
                    >
                      {slide.desc}
                    </motion.p>
                    <motion.button
                      onClick={() => navigate("/")}
                      className="bg-[#488cfb] hover:bg-blue-700 px-8 py-3 rounded-lg text-white font-medium"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{
                        delay: 1.5,
                        ease: [0.25, 0, 0.25, 1],
                        duration: 0.9,
                      }}
                    >
                      Explore Services
                    </motion.button>
                  </div>
                </motion.div>
              )
          )}
        </AnimatePresence>
      </section>
    </div>
  );
};

export default Banner;
