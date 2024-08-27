import styles from './Logo.module.css';
import MenuToggle from './Menu';

// Define Logo component
export default function Logo() {
  // Return Logo component
  return (
    <div className={styles.logo}>
      {/* Main logo image */}
      <img src="/images/Group (2).svg" alt="Main Logo" />

      {/* Secondary logo image container */}
      <div className={styles.img}>
        <img src="/images/Group.svg" alt="Secondary Logo" />
      </div>

      {/* Menu toggle component */}
      <MenuToggle />
    </div>
  );
}