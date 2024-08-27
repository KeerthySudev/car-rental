import styles from "./Navbar.module.css";

// Define Navbar component
export default function Navbar() {
  return (
    <>
      {/* Navbar container */}
      <div className={styles.navBar}>
        <div className={styles.links}>
          {/* Navbar links */}
          <a href="" className={styles.link}>
            About
          </a>
          <a href="" className={styles.link}>
            Offers
          </a>
          <a href="" className={styles.link}>
            Corporate
          </a>
          <a href="" className={styles.link}>
            Personal
          </a>
          <a href="" className={styles.link}>
            Location
          </a>
          <a href="" className={styles.link}>
            Contact Us
          </a>
        </div>

        {/* Icons container */}
        <div className={styles.icons}>
          {/* Bell icon */}
          <div className={styles.bell}>
            <a href="">
              <img src="images/bell.svg" alt="" />
            </a>
          </div>

          {/* Name icon */}
          <div className={styles.name}>
            <img src="images/name.svg" alt="" />
          </div>
        </div>
      </div>

      {/* Sunday message container */}
      <div className={styles.sunday}>
        {/* Marquee text container */}
        <div className={styles.marqueeText}>
          {/* Marquee text */}
          <span>
            Sunday Pick Up/Drop-Off only at Dubai Silicon Oasis & Habtoor Grand
            Sales Counters | All Rates inclusive of VAT. T&C's apply | Follow us
            on Social Media for New Offers
          </span>
        </div>
      </div>
    </>
  );
}
