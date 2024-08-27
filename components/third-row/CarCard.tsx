import styles from './Cars.module.css';

// Define CarCardProps interface
interface CarCardProps {
  imgSrc: string;
  heading: string;
  description: string;
  features: string[]; // Only the labels are dynamic
  price: string;
}

// Define CarCard component
const CarCard: React.FC<CarCardProps> = ({
  imgSrc,
  heading,
  description,
  features,
  price,
}) => {
  // Define icons array
  const icons = [
    '/images/seat.svg',
    '/images/gear.svg',
    '/images/door.svg',
    '/images/ac.svg',
  ];

  // Return CarCard component
  return (
    <div className={styles.car}>
      {/* Image section */}
      <div className={styles.img}>
        <img src={imgSrc} alt={heading} />
      </div>

      {/* Description section */}
      <div className={styles.desc}>
        <h3>{heading}</h3>
        <p>{description}</p>

        {/* Features section */}
        <div className={styles.features}>
          {features.map((label, index) => (
            <div className={styles.feature} key={index}>
              <img src={icons[index]} alt={label} />
              <p>{label}</p>
            </div>
          ))}
        </div>

        {/* Price section */}
        <div className={styles.price}>
          <h4>{price}</h4>
        </div>

        {/* Book button section */}
        <div className={styles.book}>
          <button>Book Now</button>
        </div>
      </div>
    </div>
  );
};

export default CarCard;