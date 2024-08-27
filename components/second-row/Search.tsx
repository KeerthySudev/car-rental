"use client";

// Import useState hook from React
import { useState } from "react";

// Import styles
import styles from "./Search.module.css";

// Import DateTimeInput component from "./DATE"
import DateTimeInput from "./DATE";

// Import BookButton component from "./book"
import BookButton from "./book";

// Define Search component
const Search = () => {
  // Initialize isDifferentDropOff state with false
  const [isDifferentDropOff, setIsDifferentDropOff] = useState(false);

  // Return Search component
  return (
    // Second row container
    <div className={styles.secondRow}>
      {/* Search bar container */}
      <div className={styles.searchBar}>
        {/* Categories container */}
        <div className={styles.categories}>
          <div className={styles.titles}>
            {/* Same as Pick-Up title */}
            <div
              className={isDifferentDropOff ? styles.title : styles.titleActive}
              onClick={() => setIsDifferentDropOff(false)}
            >
              <p>Same as Pick-Up</p>
              <hr />
            </div>

            {/* Different Drop-Off title */}
            <div
              className={isDifferentDropOff ? styles.titleActive : styles.title}
              onClick={() => setIsDifferentDropOff(true)}
            >
              <p>Different Drop-Off</p>
              <hr />
            </div>
          </div>

          {/* Vehicle select */}
          <select className={styles.vehicle}>
            <option value="">Select vehicle type</option>
          </select>
        </div>

        {/* Search form */}
        <div className={styles.search}>
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
              <button type="submit"></button>
            </div>
          </form>
          <div className={styles.smallLine}></div>

          {/* Book button */}
          <div className={styles.btnBooking}>
            <BookButton />
          </div>

          {/* Quick book button */}
          <div className={styles.btnBook}>
            <button>Quick Book</button>
          </div>
        </div>

        {/* Download app container */}
        <div className={styles.download}>
          <p>Download our App for easy accessibility anytime, anywhere!</p>
          <img src="images/apple.svg" alt="" />
          <div className={styles.img}>
            <img src="images/playstore.svg" alt="" />
          </div>
        </div>
      </div>

      {/* Phone icon */}
      <div className={styles.phone}>
        <img src="images/phone.svg" alt="" />
      </div>

      {/* Hours icon */}
      <div className={styles.hours}>
        <img src="images/24x7.svg" alt="" />
      </div>
    </div>
  );
};
export default Search;
