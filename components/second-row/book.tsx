// Enable client-side rendering
"use client";

// Import styles ]
import styles from "./Search.module.css";

// Import DateTimeInput component from "./DATE"
import DateTimeInput from "./DATE";

// Import useState hook from React
import { useState } from "react";

// Define BookButton component
const BookButton = () => {
  // Initialize isMenuVisible state with false
  const [isMenuVisible, setIsMenuVisible] = useState(false);

  // Initialize isDifferentDropOff state with false
  const [isDifferentDropOff, setIsDifferentDropOff] = useState(false);

  // Define toggleMenu function to toggle isMenuVisible state
  const toggleMenu = () => {
    setIsMenuVisible(!isMenuVisible);
  };

  // Define menuStyles object to conditionally display menu
  const menuStyles = {
    display: isMenuVisible ? "flex" : "none",
  };

  // Return BookButton component
  return (
    // Container
    <div>
      {/* Book a Car button */}
      <button onClick={toggleMenu}>Book a Car</button>

      {/* Hidden Content */}
      <div className={styles.form} style={menuStyles}>
        {/* Categories container */}
        <div className={styles.categories}>
          <div className={styles.titles}>
            {/* Same as Pick-Up title */}
            <div
              className={
                isDifferentDropOff ? styles.title : styles.titleActive
              }
              onClick={() => setIsDifferentDropOff(false)}
            >
              <p>Same as Pick-Up</p>
              <hr />
            </div>

             {/* Different Drop-Off title */}
            <div
              className={
                isDifferentDropOff ? styles.titleActive : styles.title
              }
              onClick={() => setIsDifferentDropOff(true)}
            >
              <p>Different Drop-Off</p>
              <hr />
            </div>
          </div>

          {/* Vehicle select */}
          <select className={styles.vehicle}>
            <option value="">Vehicle type</option>
          </select>
        </div>

        {/* Form */}
        <form action="">
          {/* Pickup Location select */}
          <div className={styles.placeWrap}>
            <select className={styles.place}>
              <option value="">Pickup Location</option>
              <option value="">Al Quoz</option>
            </select>
          </div>

          {/* Conditionally render Drop-Off Location select */}
          {isDifferentDropOff && (
            <div className={styles.placeWrap}>
              <select className={styles.place}>
                <option value="">Drop-Off Location</option>
                <option value="Al Quoz">Al Quoz</option>
              </select>
            </div>
          )}

          {/* Pick-Up Date & Time input */}
          <div className={styles.date}>
            <DateTimeInput placeholder="Pick-Up Date & Time" />
          </div>

          {/* Drop-Off Date & Time input */}
          <div className={styles.date}>
            <DateTimeInput placeholder="Drop-Off Date & Time" />
          </div>

          {/* Search button */}
          <div className={styles.btnSearch}>
            <button type="submit">Search</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default BookButton;