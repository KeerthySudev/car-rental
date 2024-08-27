import styles from "./Navbar.module.css";
import SocialIcons from "./SocialIcons";
import Logo from "./Logo";
import Navbar from "./Navbar";

// Define TopBar component
export default function TopBar() {
  return (
    <div className={styles.TopBar}>
      <SocialIcons />

      <Logo />

      <Navbar />
    </div>
  );
}
