import styles from './Subscribe.module.css';
import Subscribe from './Subscribe';
import App from './App';

// Define the Fourth row component

export default function FourthRow(){
    return(
        <div className={styles.fourthRow}>
          <Subscribe/>
          <App/>
        </div>
    );
}