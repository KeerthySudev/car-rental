// Import styles 
import styles from "./Footer.module.css";


export default function Footer() {
  return (
    // Footer container
    <div className={styles.footer}>
      {/* Details container */}
      <div className={styles.details}>
        {/* Logo container */}
        <div className={styles.logo}>
          <img src="images/Group 1261156477.svg" alt="" />
          <p>Member of the Al Habtoor Group</p>
        </div>

        {/* Lists container */}
        <div className={styles.lists}>
          {/* Ordered lists of links */}
          <ul>
            <li>
              <a href="">Home</a>
            </li>
            <li>
              <a href="">About Us</a>
            </li>
            <li>
              <a href="">Services</a>
            </li>
          </ul>
          <ul>
            <li>
              <a href="">Offers</a>
            </li>
            <li>
              <a href="">Locations</a>
            </li>
            <li>
              <a href="">Contact Us</a>
            </li>
          </ul>
          <ul>
            <li>
              <a href="">FAQ</a>
            </li>
            <li>
              <a href="">Privacy Policy</a>
            </li>
            <li>
              <a href="">Service Request</a>
            </li>
          </ul>
          <ul>
            <li>
              <a href="">Career</a>
            </li>
            <li className={styles.last}>
              <a href="">Terms & Conditions</a>
            </li>
          </ul>
        </div>

        {/* Al Habtoor companies container */}
        <div className={styles.alhabtoor}>
          <p>Al Habtoor Companies</p>
        </div>

        {/* Features container */}
        <div className={styles.features}>
          {/* Links to different features */}
          <a href="" className={styles.link}>
            Hospitality
          </a>
          <a href="" className={styles.link}>
            Real Estate
          </a>
          <a href="" className={styles.link}>
            Education
          </a>
          <a href="" className={styles.link}>
            Publishing
          </a>
          <a href="" className={styles.link}>
            Automotive
          </a>
          <a href="" className={styles.link}>
            Vehicle Leasing
          </a>
        </div>

        {/* Follow us on social media container */}
        <div className={styles.follow}>
          <h3>FOLLOW US ON</h3>
          {/* Social media icons container */}
          <div className={styles.socialicons}>
            <div className={styles.fb}>
              <a href="">
                <img src="images/fb.svg" alt="" />
              </a>
            </div>
            <div className={styles.x}>
              <a href="">
                <img src="images/x.svg" alt="" />
              </a>
            </div>
            <div className={styles.insta}>
              <a href="">
                <img src="images/insta.svg" alt="" />
              </a>
            </div>
            <div className={styles.linkedin}>
              <a href="">
                <img src="images/linkedin.svg" alt="" />
              </a>
            </div>
            <div className={styles.utube}>
              <a href="">
                <img src="images/youtube.svg" alt="" />
              </a>
            </div>
          </div>

          {/* Global image container */}
          <div className={styles.img}>
            <img src="images/global.svg" alt="" />
          </div>
        </div>
      </div>

      <div className={styles.line}></div>

      {/* Copyright container */}
      <div className={styles.copyright}>
        <p> 2018 Car rental LLC - All Rights Reserved.</p>
      </div>
    </div>
  );
}
