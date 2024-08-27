"use client";

// Import styles 
import styles from './Logo.module.css';

// Import useState hook from React
import { useState } from 'react';

// Define MenuToggle component
const MenuToggle = () => {
  // Initialize isMenuVisible state with false
  const [isMenuVisible, setIsMenuVisible] = useState(false);

  // Define toggleMenu function to toggle isMenuVisible state
  const toggleMenu = () => {
    setIsMenuVisible(!isMenuVisible);
  };

  // Define menuStyles object to conditionally render menu
  const menuStyles = {
    display: isMenuVisible ? 'flex' : 'none',
  };

  // Return MenuToggle component
  return (
    <div>
      {/* Menu icon to toggle menu */}
      <div className={styles.menuIcon} onClick={toggleMenu}>
        &#9776;
      </div>

      {/* Hidden menu content */}
      <div className={styles.linksMob} style={menuStyles}>
        {/* Cross icon to toggle menu */}
        <div className={styles.imgCross} onClick={toggleMenu}>
          <img src="images/cross.svg" alt="" />
        </div>

        {/* Menu links */}
        <a href="" className={styles.link}>About</a>
        <div className={styles.middle}></div>
        <a href="" className={styles.link}>Offers</a>
        <div className={styles.middle}></div>
        <a href="" className={styles.link}>Corporate</a>
        <div className={styles.middle}></div>
        <a href="" className={styles.link}>Personal</a>
        <div className={styles.middle}></div>
        <a href="" className={styles.link}>Location</a>
        <div className={styles.middle}></div>
        <a href="" className={styles.link}>Contact Us</a>

        {/* Log In/Sign Up button */}
        <button>Log In/Sign Up</button>
      </div>
    </div>
  );
};

export default MenuToggle;