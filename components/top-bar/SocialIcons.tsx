import styles from "./SocialIcons.module.css";

// Define SocialIcons component
export default function SocialIcons() {
  return (
    <div className={styles.socialIcons}>
      <a href="">
        <img src="/images/Vector.svg" alt="Facebook" />
      </a>

      <a href="">
        <img src="/images/instaPic.svg" alt="Instagram" />
      </a>

      <a href="">
        <img src="/images/layer1.svg" alt="Twitter" />
      </a>

      <a href="">
        <img src="/images/linkedinPic.svg" alt="LinkedIn" />
      </a>
    </div>
  );
}
