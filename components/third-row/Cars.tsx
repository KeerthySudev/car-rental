import styles from './Cars.module.css';
import CarCard from './CarCard';

// Define Cars component
export default function Cars() {
  // Define cars data
  const cars = [
    {
      imgSrc: '/images/bluecar.svg',
      heading: 'Mitsubishi Eclipse',
      description: 'Eclipse Cross is a fusion of sharp coupe looks and dynamic SUV mobility with signature Mitsubishi styling, technology, and driving confidence.',
      features: ['6 People', 'Automatic', '5 Doors', 'AC'],
      price: 'AED 2700/ Monthly',
    },
    {
      imgSrc: '/images/redcar.svg',
      heading: 'Jac J7',
      description: 'S3 Plus has been rated Five-Star in C-NCAP including front impact, side impact, frontal side impact & Whipping test.',
      features: ['6 People', 'Automatic', '5 Doors', 'AC'],
      price: 'AED 2700/ Monthly',
    },
  ];

  // Return Cars component
  return (
    <>
      {/* Heading section */}
      <div className={styles.heading}>
        <h1>Most popular cars</h1>
      </div>

      {/* Third row section */}
      <div className={styles.thirdRow}>
        {/* Map cars data to CarCard components */}
        {cars.map((car, index) => (
          <CarCard
            key={index}
            imgSrc={car.imgSrc}
            heading={car.heading}
            description={car.description}
            features={car.features}
            price={car.price}
          />
        ))}
      </div>
    </>
  );
}