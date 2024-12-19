import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <motion.nav
        className="navbar navbar-expand-md navbar-dark sticky-top mt-1 bg-dark shadow"
        initial={{ y: -50 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="container">
          <motion.a
            href="#"
            className="navbar-brand h1"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            DISHDELIGHT
          </motion.a>
          <button
            className="navbar-toggler"
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            aria-controls="navbarNav"
            aria-expanded={isOpen}
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <motion.div
            className={`collapse navbar-collapse ${isOpen ? "show" : ""}`}
            id="navbarNav"
            initial={{ opacity: 0 }}
            animate={{ opacity: isOpen ? 1 : 1 }}
            transition={{ duration: 0.5 }}
          >
            <ul className="navbar-nav ms-auto">
              <motion.li
                className="nav-item"
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Link to="/" className="nav-link text-white">
                  Home
                </Link>
              </motion.li>
              <motion.li
                className="nav-item"
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Link to="/Menu" className="nav-link text-white">
                  Menu
                </Link>
              </motion.li>
              <motion.li
                className="nav-item"
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Link to="/About" className="nav-link text-white">
                  About
                </Link>
              </motion.li>
              <motion.li
                className="nav-item"
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Link to="/Contact" className="nav-link text-white">
                  Contact
                </Link>
              </motion.li>
            </ul>
           <input type="text" className="w-25 form-control ms-5" placeholder="Search" name="" id="" />
          </motion.div>
        </div>
      </motion.nav>
    </>
  );
};

export default Navbar;
