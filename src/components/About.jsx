import React from "react";
import { motion } from "framer-motion";
import "./About.css";

const About = () => {
  const images = [
    "https://images.unsplash.com/photo-1733169312700-a3dfad2d99f0?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0",
    "https://images.unsplash.com/photo-1754147965582-edcb63324a81?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0",
    "https://images.unsplash.com/photo-1759765409011-90203119c197?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0",
    "https://media.istockphoto.com/id/2033455021/photo/nature-beauty.jpg?s=2048x2048&w=is&k=20&c=1J79DOB3xx2DjswpybJ-d5-vayRvLXW7alBrTZ_vYpA="
  ];

  return (
    <section className="about-section">
      <div className="container">
        {/* Left Image Grid */}
        <motion.div
          className="contentLeft"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <div className="row">
            {images.map((src, index) => (
              <motion.div
                className="imgWrapper"
                key={index}
                initial={{ opacity: 0, y: index % 2 === 0 ? -50 : 50 }}
                animate={{ opacity: 1, y: index % 2 === 0 ? -20 : 20 }}
                transition={{ duration: 0.8, delay: index * 0.3 }}
                whileHover={{ scale: 1.1 }}
              >
                <img src={src} alt={`Gallery ${index + 1}`} />
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Right Content */}
        <motion.div
          className="contentRight"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }} // delayed to appear after images
        >
          <div className="content">
            <motion.h4
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Welcome To
            </motion.h4>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              About Us Title...
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.6 }}
            >
              Living a healthy lifestyle means nurturing every aspect of our
              being. It's about fueling our body with nutritious food, engaging
              in regular physical activity, and fostering mental and emotional
              well-being. Taking care of your body, mind, and soul can
              transform your overall quality of life.
            </motion.p>
            <motion.a
              href="/login"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              whileHover={{ scale: 1.05 }}
            >
              Read More...
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
