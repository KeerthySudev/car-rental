import styles from "./App.module.css";

export default function App() {
  return (
    // App container
    <div className={styles.app}>
      {/* Mobile image */}
      <img src="images/mobile.svg" alt="" />

      {/* Mobile download container */}
      <div className={styles.mobile}>
        {/* Heading */}
        <h5>
          {" "}
          Enter your number and receive a direct link to download the app{" "}
        </h5>

        {/* Form */}
        <form action="">
          {/* Input container */}
          <div className={styles.input}>
            <input type="text" placeholder="Enter Phone Number" />
          </div>

          {/* Submit button */}
          <button type="submit">Get the link</button>
        </form>
        <p>Get in on</p>

        {/* App links container */}
        <div className={styles.appLinks}>
          {/* Apple app store link */}
          <a href="">
            <img src="images/apple.svg" alt="" />
          </a>

          {/* Google play store link */}
          <div className={styles.img}>
            <a href="">
              <img src="images/playstore.svg" alt="" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
