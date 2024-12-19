import React from "react";
import { motion } from "framer-motion";
import "./Home.css";

export const Home = () => {
  const images = [
    "/berger.jpeg",
    "/download (1).jpeg",
    "/download (2).jpeg",
    "/download (3).jpeg",
    "/download (4).jpeg",
    "/download (5).jpeg",
    "/download (6).jpeg",
    "/download (7).jpeg",
    "/download (8).jpeg",
    "/download (9).jpeg",
    "/checkin.jpeg",
  ];
  const duplicatedImages = [...images, ...images];

  return (
    <div className="home-container">
      <div className="background-section">
        <motion.div
          className="text-container"
          initial={{ x: "-100vw", opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        >
          <h1 className="text-white shadow" style={{ fontSize: "65px", fontFamily: '"Cinzel", serif' }}>
            <i>Welcome to DishDelight</i>
          </h1>
          <h3>Experience the finest dishes from around the world</h3>
        </motion.div>
      </div>
       
      <div
        className="container mt-5 w-sm-50"
        style={{
          fontSize: "73px", // Large font size
          fontFamily: '"Cinzel", serif', // Elegant font family
          color: "#4a4a4a", // Polished gray color
          textAlign: "center",
          lineHeight: "1", // Eliminates extra vertical spacing
        }}
      >
        WELCOME TO D
        <span style={{ display: "inline-block" }}>
          <img
            className="mb-2 p-0 ms-0"
            src="/spoon.png"
            alt=""
            style={{
              width: "80px",
              height: "80px",
              margin: "0",
              padding: "0",
            }}
          />
        </span>
        SHDEL
        <span style={{ display: "inline-block" }}>
          <img
            className="mb-2 p-0 ms-0"
            src="/spoon.png"
            alt=""
            style={{
              width: "80px",
              height: "80px",
              margin: "0",
              padding: "0",
            }}
          />
        </span>
        GHT
      </div>

      <div className="container mt-5">
        <div className="row">
          {/* Card 1 */}
          <div className="col-lg-4 col-sm-12 mb-4">
            <motion.div
              className="card"
              whileHover={{ opacity: 0.7 }} // Apply opacity on hover
              style={{
                position: "relative",
                overflow: "hidden",
                height: "100%", // Ensure the card is responsive
                borderRadius: "8px", // Rounded corners
                boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)", // Subtle shadow
              }}
            >
              <motion.img
                src="/1st.webp"
                alt=""
                className="w-100"
                whileHover={{
                  scale: 1.05, // Slightly scale up the image on hover
                }}
                transition={{ duration: 0.3 }}
                style={{
                  display: "block",
                  transition: "all 0.3s ease",
                  height: "100%",
                  width: "100%",
                  objectFit: "cover", // Ensures the image fits within the card
                }}
              />
              <div
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                  backgroundColor: "rgba(0, 0, 0, 0.5)", // Black opacity
                  zIndex: 1,
                }}
              ></div>
            </motion.div>
          </div>

          {/* Card 2 */}
          <div className="col-lg-4 col-sm-12 mb-4">
            <motion.div
              className="card"
              whileHover={{ opacity: 0.7 }}
              style={{
                position: "relative",
                overflow: "hidden",
                height: "100%",
                borderRadius: "8px", // Rounded corners
                boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)", // Subtle shadow
              }}
            >
              <motion.img
                src="/2nd.webp"
                alt=""
                className="w-100"
                whileHover={{
                  scale: 1.05,
                }}
                transition={{ duration: 0.3 }}
                style={{
                  display: "block",
                  transition: "all 0.3s ease",
                  height: "100%",
                  width: "100%",
                  objectFit: "cover",
                }}
              />
              <div
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                  backgroundColor: "rgba(0, 0, 0, 0.5)", // Black opacity
                  zIndex: 1,
                }}
              ></div>
            </motion.div>
          </div>

          {/* Card 3 */}
          <div className="col-lg-4 col-sm-12 mb-4">
            <motion.div
              className="card"
              whileHover={{ opacity: 0.7 }}
              style={{
                position: "relative",
                overflow: "hidden",
                height: "100%",
                borderRadius: "8px", // Rounded corners
                boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)", // Subtle shadow
              }}
            >
              <motion.img
                src="/4th.webp"
                alt=""
                className="w-100"
                whileHover={{
                  scale: 1.05,
                }}
                transition={{ duration: 0.3 }}
                style={{
                  display: "block",
                  transition: "all 0.3s ease",
                  height: "100%",
                  width: "100%",
                  objectFit: "cover",
                }}
              />
              <div
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                  backgroundColor: "rgba(0, 0, 0, 0.5)", // Black opacity
                  zIndex: 1,
                }}
              ></div>
            </motion.div>
          </div>
        </div>
        <div className="row">
          {/* Card 1 */}
          <div className="col-lg-4 col-sm-12 mb-4">
            <motion.div
              className="card"
              whileHover={{ opacity: 0.7 }} // Apply opacity on hover
              style={{
                position: "relative",
                overflow: "hidden",
                height: "100%", // Ensure the card is responsive
                borderRadius: "8px", // Rounded corners
                boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)", // Subtle shadow
              }}
            >
              <motion.img
                src="/13th.webp"
                alt=""
                className="w-100"
                whileHover={{
                  scale: 1.05, // Slightly scale up the image on hover
                }}
                transition={{ duration: 0.3 }}
                style={{
                  display: "block",
                  transition: "all 0.3s ease",
                  height: "100%",
                  width: "100%",
                  objectFit: "cover", // Ensures the image fits within the card
                }}
              />
              <div
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                  backgroundColor: "rgba(0, 0, 0, 0.5)", // Black opacity
                  zIndex: 1,
                }}
              ></div>
            </motion.div>
          </div>

          {/* Card 2 */}
          <div className="col-lg-4 col-sm-12 mb-4">
            <motion.div
              className="card"
              whileHover={{ opacity: 0.7 }}
              style={{
                position: "relative",
                overflow: "hidden",
                height: "100%",
                borderRadius: "8px", // Rounded corners
                boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)", // Subtle shadow
              }}
            >
              <motion.img
                src="/15th.webp"
                alt=""
                className="w-100"
                whileHover={{
                  scale: 1.05,
                }}
                transition={{ duration: 0.3 }}
                style={{
                  display: "block",
                  transition: "all 0.3s ease",
                  height: "100%",
                  width: "100%",
                  objectFit: "cover",
                }}
              />
              <div
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                  backgroundColor: "rgba(0, 0, 0, 0.5)", // Black opacity
                  zIndex: 1,
                }}
              ></div>
            </motion.div>
          </div>

          {/* Card 3 */}
          <div className="col-lg-4 col-sm-12 mb-4">
            <motion.div
              className="card"
              whileHover={{ opacity: 0.7 }}
              style={{
                position: "relative",
                overflow: "hidden",
                height: "100%",
                borderRadius: "8px", // Rounded corners
                boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)", // Subtle shadow
              }}
            >
              <motion.img
                src="/5th.webp"
                alt=""
                className="w-100"
                whileHover={{
                  scale: 1.05,
                }}
                transition={{ duration: 0.3 }}
                style={{
                  display: "block",
                  transition: "all 0.3s ease",
                  height: "100%",
                  width: "100%",
                  objectFit: "cover",
                }}
              />
              <div
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                  backgroundColor: "rgba(0, 0, 0, 0.5)", // Black opacity
                  zIndex: 1,
                }}
              ></div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Scrolling Images Section */}
      <div className="scrolling-image-container">
        <motion.div
          className="scrolling-wrapper"
          animate={{
            x: ["0%", "-100%"],
          }}
          transition={{
            duration: 25,
            ease: "linear",
            repeat: Infinity,
          }}
        >
          {duplicatedImages.map((src, index) => (
            <img
              key={index}
              src={src}
              alt={`scroll-img-${index}`}
              className="scrolling-image"
            />
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Home;
