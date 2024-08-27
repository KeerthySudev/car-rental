// Import styles
import styles from "./Subscribe.module.css";

// Export the Subscribe component
export default function Subscribe() {
  return (
    // Subscribe container
    <div className={styles.subscribe}>
      {/* Heading */}
      <h2>Subscribe here for exclusive offers and updates!</h2>

      {/* Form */}
      <form action="">
        {/* Input container */}
        <div className={styles.input}>
          {/* Name input container */}
          <div className={styles.name}>
            <input type="text" placeholder="Name" />
          </div>

          {/* Email input container */}
          <div className={styles.email}>
            <input type="text" placeholder="Email" />
          </div>
        </div>

        {/* Missing out container */}
        <div className={styles.miss}>
          <p>
            Don't miss out! Enter your email and your name, then hit subscribe
            to unlock a world of special offers and details.
          </p>
        </div>

        {/* Subscribe button */}
        <button type="submit">Subscribe</button>
      </form>
    </div>
  );
}
