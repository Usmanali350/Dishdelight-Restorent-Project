import React from 'react';
import { motion } from 'framer-motion';
import './Menu.css';

export const Menu = () => {
  // Array of menu items
  const menuItems = [
    {
      image: "/now1.jpeg",
      name: "Burger",
      description: "Juicy beef patty with fresh lettuce and cheese.",
      price: "$12.99"
    },
    {
      image: "/now2.jpeg",
      name: "Pizza",
      description: "Topped with mozzarella, tomato, and fresh basil.",
      price: "$14.99"
    },
    {
      image: "/now3.jpeg",
      name: "Pasta",
      description: "Creamy Alfredo sauce with grilled chicken.",
      price: "$13.99"
    },
    {
      image: "/now4.jpeg",
      name: "Salad",
      description: "Fresh greens with a light vinaigrette dressing.",
      price: "$8.99"
    },
    {
      image: "/now5.webp",
      name: "Burger",
      description: "Juicy beef patty with fresh lettuce and cheese.",
      price: "$12.99"
    },
    {
      image: "/15th.webp",
      name: "Burger",
      description: "Juicy beef patty with fresh lettuce and cheese.",
      price: "$12.99"
    },
    {
      image: "/now6.jpeg",
      name: "Pizza",
      description: "Topped with mozzarella, tomato, and fresh basil.",
      price: "$14.99"
    },
    {
      image: "/now7.jpeg",
      name: "Pasta",
      description: "Creamy Alfredo sauce with grilled chicken.",
      price: "$13.99"
    },
    {
      image: "/now8.jpeg",
      name: "Salad",
      description: "Fresh greens with a light vinaigrette dressing.",
      price: "$8.99"
    },
    {
      image: "/now9.jpeg",
      name: "Burger",
      description: "Juicy beef patty with fresh lettuce and cheese.",
      price: "$12.99"
    },
    {
      image: "/now10.webp",
      name: "Pizza",
      description: "Topped with mozzarella, tomato, and fresh basil.",
      price: "$14.99"
    },
    {
      image: "/now11.jpeg",
      name: "Pasta",
      description: "Creamy Alfredo sauce with grilled chicken.",
      price: "$13.99"
    },
    {
      image: "/now12.jpeg",
      name: "Salad",
      description: "Fresh greens with a light vinaigrette dressing.",
      price: "$8.99"
    },
    {
      image: "/now13.webp",
      name: "Burger",
      description: "Juicy beef patty with fresh lettuce and cheese.",
      price: "$12.99"
    },
    {
      image: "/now14.jpeg",
      name: "Pizza",
      description: "Topped with mozzarella, tomato, and fresh basil.",
      price: "$14.99"
    },
    {
      image: "/now15.webp",
      description: "Creamy Alfredo sauce with grilled chicken.",
      price: "$13.99"
    },
    
    // Add more items as needed...
  ];

  return (
    <div className="menu-container">
      <motion.div
        className="menu-header"
        initial={{ x: '-100%', opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1.5, ease: 'easeOut' }}
      >
        <h1>Our Menu</h1>
        <motion.p
          initial={{ x: '-100%', opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1.5, ease: 'easeOut', delay: 0.2 }}
        >
          Discover the finest dishes crafted just for you.
        </motion.p>
      </motion.div>

      {/* Menu items */}
      <div className="menu-items">
        {menuItems.map((item, index) => (
          <motion.div
            className="card"
            key={index}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.001 * index, duration: 0.6 }}
            whileHover={{ scale: 1.05, opacity: 0.8 }}
          >
            <img src={item.image} alt={item.name} className="w-100" />
            <div className="card-body">
              <motion.h3
                initial={{ x: '-100%', opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 1.5, ease: 'easeOut', delay: 0.3 }}
              >
                {item.name}
              </motion.h3>
              <motion.p
                initial={{ x: '-100%', opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 1.5, ease: 'easeOut', delay: 0.4 }}
              >
                {item.description}
              </motion.p>
              <motion.h4
                initial={{ x: '-100%', opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 1.5, ease: 'easeOut', delay: 0.5 }}
              >
                {item.price}
              </motion.h4>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Menu;
